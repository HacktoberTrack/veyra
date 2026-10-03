"use client";

const steps = [
  {
    number: "01",
    title: "Add your video",
    description:
      "Paste a YouTube URL and let veyra understand what the video is about.",
  },
  {
    number: "02",
    title: "Let AI break it down",
    description:
      "The video is divided into focused sections and each part is analyzed separately.",
  },
  {
    number: "03",
    title: "Explore what matters",
    description:
      "Get summaries, key points, concepts, and useful resources without watching the entire video.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl px-6 pb-32 pt-10"
    >
      <div className="grid gap-16 border-t border-zinc-900 pt-16 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="text-sm font-medium tracking-wide text-violet-400">
            HOW VEYRA WORKS
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            One long video.
            <br />
            <span className="text-zinc-600">
              Everything that matters.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
            Veyra turns long videos into focused sections so you can understand
            the important parts without watching everything.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative h-[250px]">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`absolute inset-x-0 top-0 animate-step-${
                index + 1
              }`}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/[0.12] bg-white/[0.055] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                {/* Top glossy shine */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                {/* Main glass reflection */}
                <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

                {/* Subtle white reflection */}
                <div className="pointer-events-none absolute left-10 top-0 h-20 w-2/3 bg-gradient-to-b from-white/[0.08] to-transparent blur-2xl" />

                {/* Bottom glow */}
                <div className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-3xl" />

                {/* Content */}
                <div className="relative z-10 flex gap-6">
                  {/* Number */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-sm font-medium text-violet-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_25px_rgba(139,92,246,0.12)]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}