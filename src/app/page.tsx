import AgentForm from "@/components/AgentForm";

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-20 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.28),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Agent builder
        </span>

        <h1 className="bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          AI Agent Studio
        </h1>

        <p className="mt-5 text-lg text-zinc-400 sm:text-xl">
          Build and manage AI agents
        </p>

        <AgentForm />
      </section>
    </main>
  );
}
