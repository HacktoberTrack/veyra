"use client";

import { useState } from "react";

import DashboardNav from "./Dashboardnav";
import VideoInput from "./VideoInput";
import VideoProcessing from "./VideoProcessing";
import VideoResults from "./VideoResults";

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

export default function Dashboard() {
  const [sections, setSections] = useState<Section[]>([]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <DashboardNav />

      <VideoInput onResults={setSections} />

      <VideoProcessing />

      {sections.length > 0 && (
        <VideoResults sections={sections} />
      )}
    </main>
  );
}