import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { sections } = await request.json();

    if (!sections || !Array.isArray(sections)) {
      return NextResponse.json(
        { error: "Sections are required" },
        { status: 400 }
      );
    }

    const analyzedSections = [];

    for (const section of sections) {
      const prompt = `
You are analyzing one section of an educational YouTube video.

Analyze the transcript below and return ONLY valid JSON.

Use exactly this format:

{
  "topic": "",
  "summary": "",
  "keyPoints": [],
  "concepts": [],
  "resources": []
}

Do NOT use markdown.
Do NOT wrap the JSON in \`\`\`json.
Return only the JSON object.

Transcript:

${section.transcript}
`;

      const response = await ai.models.generateContent({
        model: "gemma-4-26b-a4b-it",
        contents: prompt,
      });

      const rawAnalysis = response.text?.trim() || "";

      let analysis;

      try {
        analysis = JSON.parse(rawAnalysis);
      } catch {
        const cleanedAnalysis = rawAnalysis
          .replace(/^```json\s*/i, "")
          .replace(/^```\s*/i, "")
          .replace(/\s*```$/i, "")
          .trim();

        analysis = JSON.parse(cleanedAnalysis);
      }

      analyzedSections.push({
        section: section.section,
        startTime: section.startTime,
        endTime: section.endTime,
        analysis,
      });
    }

    return NextResponse.json({
      success: true,
      sections: analyzedSections,
    });
  } catch (error) {
    console.error("AI analysis error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to analyze sections",
      },
      { status: 500 }
    );
  }
}