import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Fork the repository",
    description:
      "Create your own fork of the veyra repository on GitHub.",
  },
  {
    number: "02",
    title: "Clone your fork",
    description:
      "Clone the repository to your local machine and move into the project directory.",
    code: `git clone https://github.com/YOUR_USERNAME/veyra.git
cd veyra`,
  },
  {
    number: "03",
    title: "Install dependencies",
    description:
      "Install the project dependencies before starting development.",
    code: `npm install`,
  },
  {
    number: "04",
    title: "Configure environment variables",
    description:
      "Create a .env.local file and add the required API key.",
    code: `GEMINI_API_KEY=your_gemini_api_key`,
    note: "Never commit your .env.local file or expose API keys in your changes.",
  },
  {
    number: "05",
    title: "Start the development server",
    description:
      "Run veyra locally and make sure everything is working before making changes.",
    code: `npm run dev`,
  },
];

const commitTypes = [
  ["feat", "Add a new feature"],
  ["fix", "Fix a bug"],
  ["docs", "Update documentation"],
  ["style", "Update UI or styling"],
  ["refactor", "Improve existing code"],
  ["chore", "Project maintenance"],
];

export default function ContributePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
    
        <nav className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400 text-sm font-bold text-black">
              V
            </div>

            <span className="text-sm font-medium text-zinc-300">
              veyra
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-xl px-3 py-2 text-sm text-zinc-500 transition hover:text-white"
            >
              Home
            </Link>

            <a
              href="https://github.com/Tsaishashanth/veyra"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-200 px-4 py-2 text-sm font-medium text-black transition hover:bg-white"
            >
              GitHub
            </a>
          </div>
        </nav>

       
        <section className="mx-auto max-w-3xl px-2 pb-16 pt-24 text-center sm:pt-28">
          <p className="text-sm font-medium tracking-wide text-orange-400">
            OPEN SOURCE
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Contribute to veyra.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            veyra is open source and contributions are welcome. Follow
            the steps below to set up the project locally and start
            making changes.
          </p>
        </section>

        {/* Before you start */}
        <section className="border-t border-white/[0.08] py-14">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium text-orange-400">
                BEFORE YOU START
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                A few things to read first.
              </h2>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/Tsaishashanth/veyra/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition hover:border-white/[0.15] hover:bg-white/[0.05]"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    Contributing Guidelines
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Read the contribution workflow and project guidelines.
                  </p>
                </div>

                <span className="text-zinc-600 transition group-hover:text-orange-400">
                  ↗
                </span>
              </a>

              <a
                href="https://github.com/Tsaishashanth/veyra/blob/main/CODE_OF_CONDUCT.md"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition hover:border-white/[0.15] hover:bg-white/[0.05]"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    Code of Conduct
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Please follow the project&apos;s community standards.
                  </p>
                </div>

                <span className="text-zinc-600 transition group-hover:text-orange-400">
                  ↗
                </span>
              </a>

              <a
                href="https://github.com/Tsaishashanth/veyra/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition hover:border-white/[0.15] hover:bg-white/[0.05]"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    License
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Check the license before contributing.
                  </p>
                </div>

                <span className="text-zinc-600 transition group-hover:text-orange-400">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        
        <section className="border-t border-white/[0.08] py-14">
          <div className="mb-10">
            <p className="text-sm font-medium text-orange-400">
              LOCAL SETUP
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Set up veyra locally.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Follow these steps to get a local development environment
              running.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6"
              >
                <div className="flex gap-4">
                  <span className="pt-0.5 text-xs font-medium text-orange-400">
                    {step.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {step.description}
                    </p>

                    {step.code && (
                      <pre className="mt-4 overflow-x-auto rounded-xl border border-white/[0.06] bg-black/60 p-4 text-xs leading-6 text-zinc-300">
                        <code>{step.code}</code>
                      </pre>
                    )}

                    {step.note && (
                      <p className="mt-3 text-xs leading-5 text-orange-300/70">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* workflow */}
        <section className="border-t border-white/[0.08] py-14">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium text-orange-400">
                DEVELOPMENT
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Make your changes.
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Keep changes focused and make sure the project still
                works before opening a pull request.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {["Create branch", "Make changes", "Test", "Commit", "Push", "PR"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="rounded-lg bg-white/[0.05] px-3 py-2 text-zinc-300">
                        {item}
                      </span>

                      {index < 5 && (
                        <span className="text-zinc-700">→</span>
                      )}
                    </div>
                  )
                )}
              </div>

              <pre className="mt-6 overflow-x-auto rounded-xl border border-white/[0.06] bg-black/60 p-4 text-xs leading-6 text-zinc-300">
                <code>{`git checkout -b feature/your-feature

# make your changes

git add .
git commit -m "feat: describe your change"
git push origin feature/your-feature`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* PR section */}
        <section className="border-t border-white/[0.08] py-14">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium text-orange-400">
                PULL REQUESTS
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Keep pull requests clean.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                "Explain what you changed.",
                "Explain why the change was needed.",
                "Test your changes locally.",
                "Keep the pull request focused.",
                "Do not include API keys or secrets.",
                "Make sure existing functionality still works.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <span className="text-orange-400">✓</span>
                  <p className="text-sm text-zinc-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section className="border-t border-white/[0.08] py-14">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium text-orange-400">
                COMMITS
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Use clear commit messages.
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Use a simple commit type so changes are easy to understand.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {commitTypes.map(([type, description]) => (
                <div
                  key={type}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <code className="text-xs text-orange-400">
                    {type}
                  </code>

                  <p className="mt-1 text-sm text-zinc-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        <section className="border-t border-white/[0.08] py-20 text-center">
          <p className="text-sm text-zinc-500">
            Ready to contribute?
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build something useful with veyra.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-500">
            Fork the repository, make your changes, and open a pull
            request.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://github.com/Tsaishashanth/veyra"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-200 px-6 py-3 text-sm font-medium text-black transition hover:bg-white"
            >
              View repository
            </a>

            <Link
              href="/"
              className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.07]"
            >
              Back to veyra
            </Link>
          </div>
        </section>

        
        <footer className="flex flex-col gap-4 border-t border-white/[0.08] py-8 text-center text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>Open source & built by Shashanth.</p>

          <p>© 2026 veyra</p>
        </footer>
      </div>
    </main>
  );
}