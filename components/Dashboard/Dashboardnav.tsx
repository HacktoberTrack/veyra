import Link from "next/link";

export default function DashboardNav() {
  return (
    <header className="px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">
            V
          </div>

          <span className="font-semibold text-zinc-300">veyra</span>
        </Link>

        <Link
          href="/"
          className="rounded-lg border border-white/[0.08] px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
        >
          ← Back
        </Link>
      </nav>
    </header>
  );
}