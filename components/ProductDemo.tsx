import Link from "next/link";

export default function ProductShowcase() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-6">
      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-[#050505] shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
        style={{
          backgroundImage: "url('/herobg.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="h-14 border-b border-white/[0.08] bg-[#080808] px-7">
          <div className="flex h-full items-center gap-2.5">
            <span className="h-3.5 w-3.5 rounded-full bg-red-500" />
            <span className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
            <span className="h-3.5 w-3.5 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="flex justify-center px-16 py-10 sm:px-20 sm:py-12">
          <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-[#050505] shadow-[0_25px_70px_rgba(0,0,0,0.55)]">

          </div>
        </div>
      </div>


      <div className="mt-10 flex justify-center">
        <Link
          href="/dashboard"
          className="flex h-10 items-center justify-center rounded-xl bg-zinc-300 px-6 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}