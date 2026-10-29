"use client";

import { useState } from "react";

const ROLES = [
  {
    id: "child",
    solid: "bg-sun",
    tint: "bg-sun-tint",
    label: "For your child",
    title: "Asks questions back instead of handing over answers.",
    body: "When your child is stuck, the companion works out where the misunderstanding is and nudges them towards it. It knows what they're studying this week, so it doesn't wander off-syllabus.",
    chat: [
      { who: "Ava, Year 5", text: "why is 3/4 bigger than 2/3. 2 is smaller than 3 so it should be" },
      {
        who: "Companion",
        text: "Good thing to be stuck on. Picture two pizzas the same size. One is cut into 4 slices and you eat 3. The other is cut into 3 slices and you eat 2. How many slices are left on each plate?",
      },
      { who: "Ava, Year 5", text: "1 on each" },
      {
        who: "Companion",
        text: "Right. So which leftover slice is bigger: a quarter of a pizza, or a third?",
      },
    ],
  },
  {
    id: "parent",
    solid: "bg-pink",
    tint: "bg-pink-tint",
    label: "For you",
    title: "Tells you where things actually stand.",
    body: "Ask it anything about your child's week and it answers from their real work: what they finished, what they avoided, what the tutor flagged. It suggests a plan for tomorrow, and you decide.",
    chat: [
      {
        who: "Parent",
        text: "Rough week. I don't think Ava's done much writing at all. What should tomorrow look like?",
      },
      {
        who: "Companion",
        text: "She's done 3 of her 5 writing tasks. The two she skipped are both the longer pieces, which fits a pattern from last half-term. For tomorrow: 10 minutes in the Writing corner on a free-choice prompt with no marking, then her 10am maths class. I'd save the persuasive letter for Thursday's session with Mr Okafor so she has help planning it.",
      },
    ],
  },
  {
    id: "tutor",
    solid: "bg-leaf",
    tint: "bg-leaf-tint",
    label: "For tutors",
    title: "Does the preparation, so sessions start on time.",
    body: "Before each session the tutor gets a short brief: recent quiz results, homework that wasn't done, and questions pitched at the right level. After the session, their notes go straight into the parent's weekly summary.",
    chat: [
      { who: "Tutor", text: "Prep me for Leo. Year 10, AQA Higher." },
      {
        who: "Companion",
        text: "Last three sessions: factorising quadratics is secure. Completing the square is shaky (2 out of 5 on Monday's quiz). He didn't submit the surds homework. Suggest a 10 minute surds warm-up, then completing the square with worked examples. I've drafted six questions, easiest first.",
      },
    ],
  },
];

export default function Companion() {
  const [active, setActive] = useState(ROLES[0].id);
  const role = ROLES.find((r) => r.id === active);

  return (
    <div className="grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-14">
      <div>
        <div role="tablist" aria-label="Who the companion helps" className="flex flex-wrap gap-3">
          {ROLES.map((r) => {
            const selected = r.id === active;
            return (
              <button
                key={r.id}
                role="tab"
                id={`ctab-${r.id}`}
                aria-selected={selected}
                aria-controls={`cpanel-${r.id}`}
                onClick={() => setActive(r.id)}
                className={`rounded-full border-[3px] border-ink px-5 py-2 text-sm font-semibold text-ink transition-all duration-200 ${
                  selected ? `${r.solid} shadow-[3px_3px_0_var(--ink)]` : "bg-surface hover:-translate-y-0.5"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
        <div id={`cpanel-${role.id}`} role="tabpanel" aria-labelledby={`ctab-${role.id}`}>
          <h3 className="mt-8 text-2xl font-extrabold leading-tight text-white sm:text-[2.1rem]">
            {role.title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-white/75">{role.body}</p>
        </div>
      </div>

      <div className={`overflow-hidden rounded-[6px] border-[3px] border-ink ${role.tint}`} style={{ boxShadow: "8px 8px 0 var(--sun)" }} aria-label="Example conversation">
        <div className={`flex items-center justify-between border-b-[3px] border-ink px-5 py-3 ${role.solid}`}>
          <span className="font-mono text-xs uppercase tracking-wider text-ink">Example conversation</span>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full border-[3px] border-ink bg-surface" />
            <span className="h-3 w-3 rounded-full border-[3px] border-ink bg-surface" />
            <span className="h-3 w-3 rounded-full border-[3px] border-ink bg-ink" />
          </span>
        </div>
        <div className="space-y-4 px-5 py-6 sm:px-6">
          {role.chat.map((line, i) => {
            const isCompanion = line.who === "Companion";
            return (
              <div key={i} className={`flex ${isCompanion ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[88%] rounded-[14px] border-[3px] border-ink px-4 py-3 ${
                    isCompanion ? "rounded-bl-[2px] bg-surface" : "rounded-br-[2px] bg-ink text-white"
                  }`}
                >
                  <p className={`font-mono text-[11px] uppercase tracking-wider ${isCompanion ? "text-violet" : "text-white/60"}`}>
                    {line.who}
                  </p>
                  <p className="mt-1 leading-relaxed">{line.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
