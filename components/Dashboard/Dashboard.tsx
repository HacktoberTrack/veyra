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

type StepTiming = {
  duration: number | null;
  running: boolean;
};

export default function Dashboard() {
  const [sections, setSections] = useState<Section[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const [stepTimings, setStepTimings] = useState<StepTiming[]>(
    [
      { duration: null, running: false },
      { duration: null, running: false },
      { duration: null, running: false },
      { duration: null, running: false },
    ]
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <DashboardNav />

      <VideoInput
        onResults={(results) => {
          setProgress(100);
          setCurrentStep(4);
          setSections(results);
          setProcessing(false);
        }}
        onProcessing={(value) => {
          setProcessing(value);

          if (value) {
            setProgress(0);
            setCurrentStep(0);
            setSections([]);

            setStepTimings([
              { duration: null, running: false },
              { duration: null, running: false },
              { duration: null, running: false },
              { duration: null, running: false },
            ]);
          }
        }}
        onProgress={(value, step, timings) => {
          setProgress(value);
          setCurrentStep(step);
          setStepTimings(timings);
        }}
      />

      {processing && (
        <VideoProcessing
          progress={progress}
          currentStep={currentStep}
          stepTimings={stepTimings}
        />
      )}

      {sections.length > 0 && (
        <VideoResults sections={sections} />
      )}
    </main>
  );
}