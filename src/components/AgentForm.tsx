"use client";

import { FormEvent, useState } from "react";

type AgentDraft = {
  id: number;
  description: string;
};

export default function AgentForm() {
  const [description, setDescription] = useState("");
  const [agents, setAgents] = useState<AgentDraft[]>([]);

  const trimmed = description.trim();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!trimmed) return;
    setAgents((prev) => [{ id: Date.now(), description: trimmed }, ...prev]);
    setDescription("");
  }

  return (
    <div className="mt-10 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-violet-950/40 backdrop-blur-xl sm:flex-row sm:items-center"
      >
        <label htmlFor="agent-description" className="sr-only">
          Agent description
        </label>
        <input
          id="agent-description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe the agent you want to build"
          autoComplete="off"
          className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-base text-white placeholder:text-zinc-500 outline-none focus:bg-white/[0.03]"
        />
        <button
          type="submit"
          disabled={!trimmed}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-violet-500/25 transition hover:from-violet-400 hover:to-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Create Agent
        </button>
      </form>

      {agents.length > 0 && (
        <ul className="mt-8 flex flex-col gap-3 text-left" aria-label="Created agents">
          {agents.map((agent) => (
            <li
              key={agent.id}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-sm font-semibold text-violet-300">
                AI
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Agent draft created</p>
                <p className="mt-1 break-words text-sm text-zinc-400">{agent.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
