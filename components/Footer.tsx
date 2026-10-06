import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-8">
      <div className="border-t border-zinc-900 pt-10">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white"
            >
              veyra
            </Link>

            <p className="mt-2 max-w-sm text-sm text-zinc-600">
              Turn long videos into focused, useful knowledge.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm">
            <a
              href="https://github.com/Tsaishashanth/veyra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="contribute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              Contribute
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              X
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-zinc-900 pt-6 text-center text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>Open source & built by Shashanth.</p>

          <p>© 2026 Veyra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}