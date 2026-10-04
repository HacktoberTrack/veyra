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

    return NextResponse.json({
      success: true,
      transcript,
    });
  } catch (error) {
    console.error("Transcript error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch video transcript",
      },
      { status: 500 }
    );
  }
}