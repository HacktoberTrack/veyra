import Link from "next/link";

export default function DashboardNav() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-white/[0.08] bg-[#080808] px-5 py-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">
          V
        </div>

        <span className="text-lg font-semibold tracking-tight text-zinc-300">
          veyra
        </span>
      </Link>

      {/* Navigation */}
      <nav className="mt-10 space-y-2">
        <button className="flex w-full items-center gap-3 rounded-xl bg-white/[0.07] px-4 py-3 text-sm text-white">
          <span className="text-orange-400">◈</span>
          Overview
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-white/[0.04] hover:text-zinc-300">
          <span>▣</span>
          Video
        </button>
      </nav>

      {/* Bottom */}
      <div className="mt-auto">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-500 transition hover:bg-white/[0.04] hover:text-zinc-300"
        >
          <span>←</span>
          Back to veyra
        </Link>
      </div>
    </aside>
  );
}