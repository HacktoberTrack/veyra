"use client";

import { useState } from "react";
import { json } from "stream/consumers";

export default function VideoInput() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setError("");

    try {
      // Fetch transcript and split into sections
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze video");
      }

      console.log("Sections:", data.sections);

      //Send sections to Gemma
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
        throw new Error(aiData.error || "Failed to analyze sections with AI");
      }

      //Check Gemma output and format
      console.log("Gemma analysis:", JSON.stringify(aiData, null, 2));
    } catch (error) {
      console.error("Analysis error:", error);
      setError("Failed to analyze video.");
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
          Paste a YouTube video and let veyra break it down into focused
          sections, summaries, key points, and useful resources.
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
            className="h-10 rounded-xl bg-zinc-300 px-6 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
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