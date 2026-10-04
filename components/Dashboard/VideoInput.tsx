export default function VideoInput() {
  return (
    <section className="flex tems-start justify-center px-4 pt-10  sm:px-6">
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
            placeholder="Paste a YouTube URL..."
            className="h-10 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-zinc-600"
          />

          <button className="h-10 rounded-xl bg-zinc-300 px-6 text-sm font-medium text-black transition hover:bg-zinc-200">
            Analyze video
          </button>
        </div>
      </div>
    </section>
  );
}