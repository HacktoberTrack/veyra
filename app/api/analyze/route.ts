import { NextResponse } from "next/server";
import { fetchTranscript } from "youtube-transcript";

type TranscriptItem = {
  text: string;
  offset: number;
  duration: number;
};

async function getTranscript(url: string): Promise<TranscriptItem[]> {
  try {
    // Try YouTube transcript first
    const transcript = await fetchTranscript(url);

    return transcript.map((item) => ({
      text: item.text,
      offset: item.offset,
      duration: item.duration,
    }));
  } catch (error) {
    console.log(
      "YouTube transcript unavailable. Trying fallback...",
      error
    );

    // Fallback transcript service
    const response = await fetch(
      `https://api.freetranscriptapi.com/v1/transcript?video_url=${encodeURIComponent(
        url
      )}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const responseText = await response.text();

    console.log("Fallback status:", response.status);
    console.log("Fallback response:", responseText);

    if (!response.ok) {
      throw new Error(
        `Fallback transcript service failed: ${response.status}`
      );
    }

    const data = JSON.parse(responseText);

    if (!data.transcript || !Array.isArray(data.transcript)) {
      throw new Error("No transcript found");
    }

    return data.transcript.map(
      (item: {
        text: string;
        start: number;
        duration?: number;
      }) => ({
        text: item.text,
        offset: item.start,
        duration: item.duration ?? 0,
      })
    );
  }
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "YouTube URL is required" },
        { status: 400 }
      );
    }

    const transcript = await getTranscript(url);

    // Transcript splitting into 5-minute sections
    const sectionsMap = new Map<
      number,
      {
        section: number;
        startTime: number;
        endTime: number;
        transcript: string;
      }
    >();

    transcript.forEach((item: TranscriptItem) => {
      // youtube-transcript can return timestamps in milliseconds
      // or seconds depending on the transcript format.
      const startTime =
        item.duration > 100 ? item.offset / 1000 : item.offset;

      const sectionIndex = Math.floor(startTime / 300);

      if (!sectionsMap.has(sectionIndex)) {
        sectionsMap.set(sectionIndex, {
          section: sectionIndex + 1,
          startTime: sectionIndex * 300,
          endTime: (sectionIndex + 1) * 300,
          transcript: "",
        });
      }

      const currentSection = sectionsMap.get(sectionIndex)!;

      currentSection.transcript +=
        (currentSection.transcript ? " " : "") + item.text;
    });

    const sections = Array.from(sectionsMap.values());

    return NextResponse.json({
      success: true,
      sections,
    });
  } catch (error) {
    console.error("Analysis error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Could not get a transcript for this video. Please try another YouTube video.",
      },
      { status: 500 }
    );
  }
}