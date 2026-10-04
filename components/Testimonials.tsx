export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="border-t border-zinc-900 pt-16">
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-violet-400">
            WHAT PEOPLE SAY
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Built for a friend.
            <br />
            <span className="text-zinc-600">
              Their thoughts come next.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-500">
            I&apos;m getting veyra into the hands of the people I built it
            for. Once they try it, their honest feedback will live here.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-10 text-center backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-lg text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                ✦
              </div>

              <h3 className="mt-5 text-lg font-medium text-white">
                Real feedback coming soon.
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
                Once my friends try veyra, their honest thoughts and
                experiences will be featured here.
              </p>

              <div className="mt-6 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-xs text-zinc-500">
                Feedback coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}