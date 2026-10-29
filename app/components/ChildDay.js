"use client";

import { useState } from "react";
import { Face, Icon } from "./Icons";

const MOODS = [
  { id: "great", label: "Great", chip: "bg-leaf" },
  { id: "ok", label: "OK", chip: "bg-sun" },
  { id: "wobbly", label: "Wobbly", chip: "bg-pink" },
  { id: "tired", label: "Tired", chip: "bg-cobalt-tint" },
];

const PLANS = {
  great: {
    reply: "Brilliant! You've got 3 things today, and a bonus puzzle if you want it.",
    tasks: [
      { what: "Maths class with Mr Okafor", when: "9:30" },
      { what: "Times tables: 8s and 9s", when: "15 min" },
      { what: "Reading corner: The Iron Man", when: "Chapter 3" },
      { what: "Bonus: the broken calculator puzzle", when: "If you like", bonus: true },
    ],
  },
  ok: {
    reply: "Good stuff. Here are your 3 things for today.",
    tasks: [
      { what: "Maths class with Mr Okafor", when: "9:30" },
      { what: "Times tables: 8s and 9s", when: "15 min" },
      { what: "Reading corner: The Iron Man", when: "Chapter 3" },
    ],
  },
  wobbly: {
    reply: "Thanks for telling us. We've made today lighter, and Mum knows you're feeling wobbly.",
    tasks: [
      { what: "Reading corner with Ms Patel", when: "Together" },
      { what: "Times tables: just the 8s", when: "5 min" },
      { what: "Maths class", when: "Moved to tomorrow", moved: true },
    ],
  },
  tired: {
    reply: "Let's start gently. A short read first, then see how you feel.",
    tasks: [
      { what: "Reading corner: The Iron Man", when: "10 min" },
      { what: "Maths class with Mr Okafor", when: "9:30" },
      { what: "Times tables", when: "After lunch" },
    ],
  },
};

const WALL = [
  { title: "My story: The Fox Who Lost His Shadow", tag: "Writing", c: "bg-pink", tilt: "-rotate-2", sticker: "star" },
  { title: "8 times table. All correct!", tag: "Maths", c: "bg-leaf", tilt: "rotate-1", sticker: "check" },
  { title: "Fact file: a Roman soldier's kit", tag: "History", c: "bg-sun", tilt: "-rotate-1", sticker: "star" },
];

export default function ChildDay() {
  const [mood, setMood] = useState(null);
  const plan = PLANS[mood ?? "ok"];

  return (
    <div className="cut overflow-hidden bg-surface" style={{ boxShadow: "10px 10px 0 var(--ink)" }}>
      <div className="flex items-center justify-between border-b-[3px] border-ink bg-sun px-5 py-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">Ava&apos;s page</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-surface" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-surface" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-ink" />
        </span>
      </div>

      <div className="p-5 sm:p-7">
        <p className="font-display text-3xl font-black text-ink">Morning, Ava!</p>

        <fieldset className="mt-5">
          <legend className="font-semibold text-ink">How are you feeling today?</legend>
          <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
            {MOODS.map((m) => {
              const selected = mood === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setMood(m.id)}
                  className={`flex flex-col items-center gap-1 rounded-[8px] border-[3px] border-ink py-2.5 transition-all duration-150 ${
                    selected
                      ? `${m.chip} translate-x-[3px] translate-y-[3px]`
                      : "bg-surface shadow-[3px_3px_0_var(--ink)] hover:-translate-y-0.5"
                  }`}
                >
                  <Face mood={m.id} className="h-8 w-8 text-ink sm:h-10 sm:w-10" />
                  <span className="text-xs font-bold text-ink sm:text-sm">{m.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div aria-live="polite">
          {mood ? (
            <p className="mt-5 rounded-[8px] border-[3px] border-ink bg-violet-tint px-4 py-3 text-ink">{plan.reply}</p>
          ) : (
            <p className="mt-5 font-hand text-2xl text-tomato">try picking one</p>
          )}

          <p className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-faint">Today</p>
          <ul className="mt-2 space-y-2">
            {plan.tasks.map((t) => (
              <li
                key={t.what}
                className={`flex items-center gap-3 rounded-[6px] border-2 px-3 py-2.5 ${
                  t.bonus ? "border-dashed border-ink bg-sun-tint" : t.moved ? "border-rule bg-paper" : "border-ink bg-surface"
                }`}
              >
                <span
                  className={`h-5 w-5 shrink-0 rounded-[3px] border-2 ${t.moved ? "border-rule" : "border-ink"}`}
                  aria-hidden="true"
                />
                <span className={`flex-1 text-sm font-semibold sm:text-base ${t.moved ? "text-faint line-through" : "text-ink"}`}>
                  {t.what}
                </span>
                <span className="font-mono text-xs text-faint">{t.when}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-[8px] border-[3px] border-ink bg-pink-tint p-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-semibold text-ink">The Iron Man</p>
            <p className="font-mono text-xs text-muted">chapter 3 of 5</p>
          </div>
          <div className="mt-2 flex gap-1.5" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={`h-3 flex-1 rounded-full border-2 border-ink ${n < 3 ? "bg-tomato" : n === 3 ? "bg-sun" : "bg-surface"}`}
              />
            ))}
          </div>
        </div>

        <p className="mt-7 font-mono text-xs font-bold uppercase tracking-wider text-faint">My wall</p>
        <ul className="mt-3 grid grid-cols-3 gap-3">
          {WALL.map((w) => (
            <li key={w.title} className={`relative rounded-[6px] border-[3px] border-ink p-2.5 shadow-[3px_3px_0_var(--ink)] ${w.c} ${w.tilt}`}>
              <span
                className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border-2 border-ink bg-surface text-ink"
                aria-hidden="true"
              >
                <Icon name={w.sticker} className="h-3.5 w-3.5" />
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-ink/70">{w.tag}</span>
              <span className="mt-1 block text-xs font-bold leading-snug text-ink sm:text-sm">{w.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
