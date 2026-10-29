"use client";

import { useState } from "react";

const STAGES = [
  {
    id: "ks1",
    solid: "bg-sun",
    tint: "bg-sun-tint",
    tag: "Learning to read",
    label: "KS1",
    years: "Years 1–2",
    ages: "Ages 5–7",
    session: "20–25 minute sessions",
    summary:
      "Learning to read fluently, count with confidence and hold a pencil properly. Short bursts, lots of talking, and a parent close by.",
    focus: [
      "Systematic phonics, then reading for meaning",
      "Number to 100, adding and taking away, early times tables (2s, 5s, 10s)",
      "Letter formation and the first full sentences",
      "Science through things they can touch: plants, weather, materials",
    ],
    note: "Schools run a phonics screening check in Year 1. At home it's optional. We check phonics every half-term instead, so gaps show up early.",
  },
  {
    id: "ks2",
    solid: "bg-leaf",
    tint: "bg-leaf-tint",
    tag: "Times tables & fractions",
    label: "KS2",
    years: "Years 3–6",
    ages: "Ages 7–11",
    session: "30–45 minute sessions",
    summary:
      "The longest key stage, and where gaps tend to grow if nobody's watching. Times tables, fractions, grammar and proper extended writing.",
    focus: [
      "Times tables up to 12 × 12 by the end of Year 4",
      "Fractions, decimals and percentages, and the reasoning behind them",
      "Grammar, punctuation and spelling taught in context, not as drills",
      "History, geography and science topics with real research and write-ups",
    ],
    note: "Home-educated children don't have to sit Year 6 SATs. If you'd like a benchmark anyway, we run past papers at home and go through the results with you.",
  },
  {
    id: "ks3",
    solid: "bg-cobalt",
    tint: "bg-cobalt-tint",
    tag: "Going deeper",
    label: "KS3",
    years: "Years 7–9",
    ages: "Ages 11–14",
    session: "45–60 minute sessions",
    summary:
      "Subjects split and deepen. Children start working more independently, and the habits they build here carry them through GCSE.",
    focus: [
      "Algebra, geometry and statistics as separate strands",
      "Analytical essays on novels, poetry and non-fiction",
      "Biology, chemistry and physics taught as distinct sciences",
      "A modern foreign language, history, geography and computing",
    ],
    note: "In Year 9 we sit down with you to choose GCSE subjects. It's the right time to think about which exams your child will actually sit, and where.",
  },
  {
    id: "ks4",
    solid: "bg-tomato",
    tint: "bg-tomato-tint",
    tag: "GCSE years",
    label: "KS4",
    years: "Years 10–11",
    ages: "Ages 14–16",
    session: "60 minute sessions",
    summary:
      "Two years of GCSE study, planned backwards from exam dates. Specification-led teaching, past papers and honest feedback on where marks are being lost.",
    focus: [
      "Maths (Foundation or Higher) and English Language",
      "English Literature and Combined or Triple Science",
      "Option subjects chosen in Year 9",
      "Exam technique, timed papers and revision planning",
    ],
    note: "Home-educated students sit GCSEs as private candidates, so you need an exam centre that will take them. Centres fill up, so we start that conversation early in Year 10.",
  },
];

export default function KeyStages() {
  const [active, setActive] = useState(STAGES[0].id);
  const stage = STAGES.find((s) => s.id === active);

  return (
    <div>
      <div role="tablist" aria-label="Key stages" className="grid grid-cols-4 gap-1.5 sm:gap-3">
        {STAGES.map((s) => {
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`panel-${s.id}`}
              onClick={() => setActive(s.id)}
              className={`relative rounded-t-[10px] border-[3px] border-b-0 border-ink px-2 pb-3 pt-3 text-left transition-transform duration-200 sm:px-4 ${s.solid} ${
                selected ? "translate-y-0.5 z-10" : "translate-y-2 opacity-80 hover:translate-y-1 hover:opacity-100"
              } ${s.id === "ks3" ? "text-white" : "text-ink"}`}
            >
              <span className="block font-display text-xl font-extrabold sm:text-3xl">{s.label}</span>
              <span className="mt-0.5 block font-mono text-[11px] sm:text-xs">{s.years}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${stage.id}`}
        aria-labelledby={`tab-${stage.id}`}
        className={`relative grid gap-10 rounded-b-[10px] rounded-tr-[10px] border-[3px] border-ink p-6 sm:p-10 md:grid-cols-[1fr_1.2fr] ${stage.tint}`}
        style={{ boxShadow: "8px 8px 0 var(--ink)" }}
      >
        <div>
          <p className="inline-block rotate-[-2deg] font-hand text-3xl text-ink">{stage.tag}</p>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
            {stage.ages} · {stage.session}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text">{stage.summary}</p>
          <div className="note mt-8 bg-sun max-w-sm rotate-[-1.5deg] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-ink/70">Worth knowing</p>
            <p className="mt-2 text-ink">{stage.note}</p>
          </div>
        </div>

        <div className="rounded-[8px] border-[3px] border-ink bg-surface p-6 shadow-[5px_5px_0_var(--ink)] sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-faint">What we cover</p>
          <ol className="mt-4 space-y-3">
            {stage.focus.map((item, i) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border-[3px] border-ink font-display text-sm font-bold ${stage.solid} ${
                    stage.id === "ks3" ? "text-white" : "text-ink"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="pt-1">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
