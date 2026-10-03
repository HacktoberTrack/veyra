export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="border-t border-zinc-900 pt-12">
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-violet-400">
            DEVELOPER FEEDBACK
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for developers.
            <br />
            <span className="text-zinc-600">
              Feedback coming soon.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-500">
            We&apos;re getting veyra into the hands of developers.
            Real thoughts, feedback, and experiences will appear here soon.
          </p>
        </div>

      
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-10 text-center backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-xl text-violet-300">
                ✦
              </div>

              <h3 className="mt-5 text-lg font-medium text-white">
                Real developer feedback will be here soon.
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
                Once developers try veyra and share their thoughts,
                their feedback will be featured here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}