"use client";

import { useEffect, useState } from "react";

type StepTiming = {
  duration: number | null;
  running: boolean;
};

type VideoProcessingProps = {
  progress: number;
  currentStep: number;
  stepTimings: StepTiming[];
};

const steps = [
  "Fetching video transcript",
  "Breaking video into sections",
  "Understanding each section",
  "Finding useful references",
];

export default function VideoProcessing({
  progress,
  currentStep,
  stepTimings,
}: VideoProcessingProps) {
  const [liveSeconds, setLiveSeconds] = useState(0);

  useEffect(() => {
    const currentTiming = stepTimings[currentStep];

    if (!currentTiming?.running) {
      return;
    }

    const startedAt = Date.now();

    const interval = setInterval(() => {
      const elapsed = Math.floor(
        (Date.now() - startedAt) / 1000
      );

      setLiveSeconds(Math.max(1, elapsed));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentStep, stepTimings]);

  return (
    <section className="flex items-start justify-center px-4 pt-16 sm:px-6">
      <div className="w-full max-w-2xl">

        <div className="mb-4 text-center">
        <p className="text-sm font-medium tracking-wide text-orange-400">
          PROCESSING VIDEO
        </p>
        </div>

        <div className="mt-4 rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:p-8">

          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Understanding your video
            </h2>

            <span className="text-sm font-medium text-zinc-400">
              {progress}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-7 space-y-4">
            {steps.map((step, index) => {
              const timing = stepTimings[index];

              let time = "—";

              if (timing?.running) {
                time = `${liveSeconds}s`;
              } else if (timing?.duration !== null) {
                time = `${timing.duration}s`;
              }

              return (
                <div
                  key={step}
                  className="flex items-center gap-3 text-sm"
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                      index < currentStep
                        ? "text-green-400"
                        : index === currentStep
                          ? "border border-orange-400/30 text-orange-400"
                          : "text-zinc-700"
                    }`}
                  >
                    {index < currentStep ? "✓" : index + 1}
                  </span>

                  <span
                    className={
                      index <= currentStep
                        ? "flex-1 text-zinc-400"
                        : "flex-1 text-zinc-700"
                    }
                  >
                    {step}
                  </span>

                  <span
                    className={`w-10 text-right text-xs ${
                      timing?.running
                        ? "text-orange-400"
                        : timing?.duration !== null
                          ? "text-zinc-500"
                          : "text-zinc-700"
                    }`}
                  >
                    {time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}