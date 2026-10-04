import { NextResponse } from "next/server";
import { fetchTranscript } from "youtube-transcript";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "YouTube URL is required" },
        { status: 400 }
      );
    }

    const transcript = await fetchTranscript(url);

    // transcript spliting into 5-minute sections
    const sectionsMap = new Map<
      number,
      {
        section: number;
        startTime: number;
        endTime: number;
        transcript: string;
      }
    >();

    transcript.forEach((item) => {
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
        error: "Failed to process video",
      },
      { status: 500 }
    );
  }
}