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

type VideoResultsProps = {
  sections: Section[];
};

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

export default function VideoResults({
  sections,
}: VideoResultsProps) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-sm font-medium tracking-wide text-orange-400">
          VIDEO BREAKDOWN
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Here&apos;s what matters.
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
          Key ideas, concepts, and resources from the video
        </p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <article
            key={section.section}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-orange-400">
                  PART {section.section}
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {section.analysis.topic}
                </h2>
              </div>

              <span className="w-fit rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-500">
                {formatTime(section.startTime)} –{" "}
                {formatTime(section.endTime)}
              </span>
            </div>

            <div className="mt-7 border-t border-white/[0.06] pt-6">
              <p className="text-sm leading-7 text-zinc-400">
                {section.analysis.summary}
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-zinc-300">
                  Key points
                </h3>

                <ul className="mt-4 space-y-3">
                  {section.analysis.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-zinc-500"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-300">
                  Concepts
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {section.analysis.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {section.analysis.resources.length > 0 && (
              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <h3 className="text-sm font-medium text-zinc-300">
                  Useful resources
                </h3>

                <ul className="mt-4 space-y-2">
                  {section.analysis.resources.map((resource) => (
                    <li
                      key={resource}
                      className="text-sm text-zinc-500"
                    >
                      {resource}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}