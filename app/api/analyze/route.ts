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

    // Splits the  transcript into 5-minute sections (check the code again)
    const sections: {
      section: number;
      startTime: number;
      endTime: number;
      transcript: string;
    }[] = [];

    transcript.forEach((item) => {
      const startTime = item.offset;
      const sectionIndex = Math.floor(startTime / 300);

      if (!sections[sectionIndex]) {
        sections[sectionIndex] = {
          section: sectionIndex + 1,
          startTime: sectionIndex * 300,
          endTime: (sectionIndex + 1) * 300,
          transcript: "",
        };
      }

      sections[sectionIndex].transcript +=
        (sections[sectionIndex].transcript ? " " : "") + item.text;
    });

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