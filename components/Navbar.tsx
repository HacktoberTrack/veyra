import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto mt-5 flex max-w-6xl items-center justify-between rounded-2xl border border-zinc-800 bg-[#0c0c0c] px-5 py-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">
          V
        </div>

        <span className="text-lg font-semibold tracking-tight text-zinc-300">
          veyra
        </span>
      </Link>

     
      <div className="flex items-center gap-6">
        <Link
          href="#how-it-works"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          How it works
        </Link>

        <a
          href="https://github.com/Tsaishashanth/veyra/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          Contribute
        </a>


        <a
          href="https://github.com/Tsaishashanth/veyra"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.1]"
        >
          <span className="relative z-10">⭐ Star on GitHub</span>

          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </a>
      </div>
    </nav>
  );
}