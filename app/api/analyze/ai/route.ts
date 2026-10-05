import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

type Section = {
  section: number;
  startTime: number;
  endTime: number;
  transcript: string;
};

type Analysis = {
  topic: string;
  summary: string;
  keyPoints: string[];
  concepts: string[];
  resources: string[];
};

export async function POST(request: Request) {
  try {
    const { sections }: { sections: Section[] } =
      await request.json();

    if (!sections || !Array.isArray(sections)) {
      return NextResponse.json(
        { error: "Sections are required" },
        { status: 400 }
      );
    }

    const analyzedSections: {
      section: number;
      startTime: number;
      endTime: number;
      analysis: Analysis;
    }[] = [];

    for (const item of sections) {
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

Rules:

- "topic" should be a short title for the section.
- "summary" should briefly explain what the section is about.
- "keyPoints" should contain the most important points.
- "concepts" should contain the important concepts, technologies, ideas, or terms mentioned.
- "resources" should contain useful resources related to the concepts if you can identify them.
- Do NOT use markdown.
- Do NOT wrap the JSON in \`\`\`json.
- Return only the JSON object.

Transcript:

${item.transcript}
`;

      const response = await ai.models.generateContent({
        model: "gemma-4-26b-a4b-it",
        contents: prompt,
      });

      const rawAnalysis = response.text?.trim() || "";

      let analysis: Analysis;

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
        section: item.section,
        startTime: item.startTime,
        endTime: item.endTime,
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