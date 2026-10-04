"use client";

import { useEffect, useState } from "react";

const steps = [
  "Fetching video transcript",
  "Breaking video into sections",
  "Understanding each section",
  "Finding useful references",
];

export default function VideoProcessing() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = Math.min(prev + 1, steps.length - 1);
        return next;
      });

      setProgress((prev) => Math.min(prev + 24, 100));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-start justify-center px-4 pt-28 sm:px-6">
      <div className="w-full max-w-2xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium tracking-wide text-orange-400">
              PROCESSING VIDEO
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Understanding your video
            </h2>
          </div>

          <span className="text-sm font-medium text-zinc-400">
            {progress}%
          </span>
        </div>

        {/* Progress reference bar */}
        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Steps animation*/}
        <div className="mt-7 space-y-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3 text-sm"
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${
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
                    ? "text-zinc-400"
                    : "text-zinc-700"
                }
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
