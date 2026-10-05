"use client";

import { useState } from "react";

type Section = {
  section: number;
  startTime: number;
  endTime: number;
  analysis: {
    topic: string;
    summary: string;
    keyPoints: string[];
    concepts: string[];
    resources: string[];
  };
};

type StepTiming = {
  duration: number | null;
  running: boolean;
};

type VideoInputProps = {
  onResults: (sections: Section[]) => void;
  onProcessing: (processing: boolean) => void;
  onProgress: (
    progress: number,
    step: number,
    timings: StepTiming[]
  ) => void;
};

export default function VideoInput({
  onResults,
  onProcessing,
  onProgress,
}: VideoInputProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setError("");
    onProcessing(true);

    const timings: StepTiming[] = [
      { duration: null, running: true },
      { duration: null, running: false },
      { duration: null, running: false },
      { duration: null, running: false },
    ];

    const startTimes = [Date.now(), 0, 0, 0];

    onProgress(10, 0, [...timings]);

    try {
      // --------------------------------
      // STEP 1
      // Fetch transcript
      // --------------------------------

      startTimes[0] = Date.now();

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to analyze video"
        );
      }

      timings[0] = {
        duration: Math.max(
          1,
          Math.round((Date.now() - startTimes[0]) / 1000)
        ),
        running: false,
      };

      // --------------------------------
      // STEP 2
      // Sections created
      // --------------------------------

      startTimes[1] = Date.now();

      timings[1] = {
        duration: 1,
        running: true,
      };

      onProgress(40, 1, [...timings]);

      // The section splitting happens inside /api/analyze,
      // so by the time the response arrives it is complete.

      timings[1] = {
        duration: Math.max(
          1,
          Math.round((Date.now() - startTimes[1]) / 1000)
        ),
        running: false,
      };

      console.log("Sections:", data.sections);

      // --------------------------------
      // STEP 3
      // Gemma analysis
      // --------------------------------

      startTimes[2] = Date.now();

      timings[2] = {
        duration: null,
        running: true,
      };

      onProgress(60, 2, [...timings]);

      const aiResponse = await fetch("/api/analyze/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sections: data.sections,
        }),
      });

      const aiData = await aiResponse.json();

      if (!aiResponse.ok) {
        throw new Error(
          aiData.error ||
            "Failed to analyze sections with AI"
        );
      }

      timings[2] = {
        duration: Math.max(
          1,
          Math.round((Date.now() - startTimes[2]) / 1000)
        ),
        running: false,
      };

      console.log(
        "Gemma analysis:",
        JSON.stringify(aiData, null, 2)
      );

      // --------------------------------
      // STEP 4
      // Prepare references / results
      // --------------------------------

      startTimes[3] = Date.now();

      timings[3] = {
        duration: 1,
        running: true,
      };

      onProgress(90, 3, [...timings]);

      // The resources are already part of Gemma's response,
      // so this final stage is the result preparation step.

      timings[3] = {
        duration: Math.max(
          1,
          Math.round((Date.now() - startTimes[3]) / 1000)
        ),
        running: false,
      };

      onProgress(95, 4, [...timings]);

      // --------------------------------
      // RESULTS READY
      // --------------------------------

      onResults(aiData.sections);
    } catch (error) {
      console.error("Analysis error:", error);
      setError("Failed to analyze video.");
      onProcessing(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-start justify-center px-4 pt-10 sm:px-6">
      <div className="w-full max-w-3xl text-center">
        <p className="text-sm font-medium tracking-wide text-orange-400">
          ANALYZE A VIDEO
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
          Paste a YouTube video link and let veyra break it down
          into focused sections, summaries, key points, and
          useful resources.
        </p>

        <div className="mx-auto mt-8 flex w-full flex-col gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-2 backdrop-blur-xl sm:flex-row">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste a YouTube URL..."
            className="h-10 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-zinc-600"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="h-10 rounded-xl bg-zinc-300 px-6 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50 "
          >
            {loading ? "Analyzing..." : "Analyze video"}
          </button>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}