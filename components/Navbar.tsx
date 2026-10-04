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
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-700"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}