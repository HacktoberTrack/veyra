export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
      
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
       
        <div className="mb-6 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400 backdrop-blur">
          <span className="block h-2 w-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]" />
          <span>AI-powered video intelligence</span>
        </div>

     
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Understand long videos
          <br />
          <span className="text-zinc-500">
            without watching every minute.
          </span>
        </h1>

       
        <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          Paste a YouTube video and let veyra break it into focused sections,
          summaries, key points, and useful resources.
        </p>

    
        <div className="mt-10 flex w-full max-w-2xl flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-2 shadow-2xl backdrop-blur sm:flex-row">
          <input
            type="text"
            placeholder="Paste a YouTube URL..."
            className="h-12 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-zinc-600"
          />

          <button className="h-12 rounded-xl bg-zinc-300 px-6 text-sm font-medium text-black transition hover:bg-zinc-200">
            Analyze video
          </button>
        </div>

        <p className="mt-4 text-xs text-zinc-600">
          Turn long videos into something you can actually explore.
        </p>
      </div>
    </section>
  );
}