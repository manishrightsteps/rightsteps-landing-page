import KeyStages from "./components/KeyStages";
import Companion from "./components/Companion";
import ChildDay from "./components/ChildDay";
import { Icon } from "./components/Icons";

const NAV = [
  { href: "#child", label: "For your child" },
  { href: "#ways", label: "Ways to learn" },
  { href: "#stages", label: "Key stages" },
  { href: "#companion", label: "AI companion" },
  { href: "#start", label: "Getting started" },
  { href: "#faq", label: "FAQ" },
];

const DAY = [
  { time: "09:30", what: "Maths class", detail: "Live, 6 pupils · column multiplication", kind: "Class", tag: "bg-leaf" },
  { time: "10:20", what: "Times tables practice", detail: "8s and 9s · 15 min", kind: "Solo", tag: "bg-cobalt-tint" },
  { time: "10:45", what: "Break", detail: "Outside if it's dry", kind: "", tag: "" },
  { time: "11:15", what: "Reading corner", detail: "The Iron Man, chapter 3 · read aloud", kind: "Reading", tag: "bg-pink" },
  { time: "13:30", what: "English with Ms Patel", detail: "One-to-one · planning a story opening", kind: "Tutor", tag: "bg-sun" },
  { time: "14:30", what: "Done for the day", detail: "Summary sent to Mum at 15:00", kind: "", tag: "" },
];

const SUBJECTS = [
  "Phonics",
  "Times tables",
  "Fractions",
  "Fronted adverbials",
  "The Romans in Britain",
  "Photosynthesis",
  "Persuasive letters",
  "Algebra",
  "Macbeth",
  "French",
  "Rivers and coasts",
  "Quadratics",
  "An Inspector Calls",
  "Electricity",
  "The Tudors",
];

const FORMATS = ["Solo learning", "One-to-one tutors", "Live classes", "Reading corner", "Writing corner", "After school", "AI companion"];

const WAYS = [
  {
    n: "01",
    title: "Solo learning",
    body: "Short lessons and practice your child works through at their own pace. Every task is set by a teacher, and the next one adjusts to how the last one went.",
    fit: "Practice, consolidation, and children who like to get on with it.",
    doodle: "at their own pace",
    card: "bg-cobalt text-white",
    span: "lg:col-span-4",
    extra: "tasks",
  },
  {
    n: "02",
    title: "One-to-one tutoring",
    body: "A regular tutor who gets to know your child, picks up where the last session ended, and tells you plainly how it's going.",
    fit: "Catching up, stretching ahead, and GCSE subjects.",
    doodle: "same tutor every week",
    card: "bg-sun text-ink",
    span: "lg:col-span-2",
  },
  {
    n: "03",
    title: "Live classroom",
    body: "Small online classes, grouped by year and ability, with a teacher who knows every child's name. Cameras on, hands up, proper discussion.",
    fit: "Children who miss learning alongside other children.",
    doodle: "hands up!",
    card: "bg-leaf text-ink",
    span: "lg:col-span-2",
  },
  {
    n: "04",
    title: "Reading corner",
    body: "Books matched to your child's level, read aloud to a tutor or on their own, with gentle questions afterwards to check they followed it.",
    fit: "Building fluency, stamina and a habit of reading for fun.",
    doodle: "one more chapter?",
    card: "bg-pink text-ink",
    span: "lg:col-span-4",
    extra: "books",
  },
  {
    n: "05",
    title: "After-school sessions",
    body: "For children who are still in school. Homework help, targeted catch-up, or exam preparation in the late afternoon and early evening.",
    fit: "Families trying us out before committing to home education.",
    doodle: "4pm onwards",
    card: "bg-violet text-white",
    span: "lg:col-span-3",
  },
  {
    n: "06",
    title: "Writing corner",
    body: "Regular, low-pressure writing with feedback on one or two things at a time, not a page full of red pen. From first sentences to GCSE essays.",
    fit: "Reluctant writers, and anyone whose ideas outrun their handwriting.",
    doodle: "less red pen",
    card: "bg-tomato text-ink",
    span: "lg:col-span-3",
  },
];

const TASKS = [
  { label: "Equivalent fractions", state: "done" },
  { label: "Comparing fractions", state: "done" },
  { label: "Fractions of amounts", state: "now" },
  { label: "Adding fractions", state: "next" },
];

const BOOKS = [
  { title: "The Iron Man", c: "bg-sun", h: "h-40" },
  { title: "Charlotte's Web", c: "bg-surface", h: "h-36" },
  { title: "Holes", c: "bg-leaf", h: "h-44" },
  { title: "Wonder", c: "bg-cobalt text-white", h: "h-32" },
  { title: "Matilda", c: "bg-tomato", h: "h-40" },
];

const CHILD_PROMISES = [
  {
    title: "Never too fast, never too slow",
    body: "Work moves on when your child has understood it, not when the rest of the class is ready.",
    c: "bg-leaf",
    icon: "arrow",
  },
  {
    title: "People who know them",
    body: "The same tutor, week after week, who remembers they love football and can't stand long division.",
    c: "bg-sun",
    icon: "person",
  },
  {
    title: "A say in their own day",
    body: "Children choose the order of their tasks, and pick some of their own books and writing topics.",
    c: "bg-cobalt-tint",
    icon: "pencil",
  },
  {
    title: "Feelings come first",
    body: "Each day starts with a quick check-in. A wobbly morning means a lighter plan, and you're told why.",
    c: "bg-pink",
    icon: "heart",
  },
  {
    title: "Their work gets seen",
    body: "Finished pieces go up on their wall, where you and the family can see them and say well done.",
    c: "bg-tomato",
    icon: "star",
  },
];

const NEEDS = [
  {
    title: "Anxious about school",
    body: "We start one-to-one, cameras optional. Group classes come later, only when your child is ready.",
    c: "bg-pink",
  },
  {
    title: "Dyslexia",
    body: "Every task can be read aloud, text is laid out to be easy on the eyes, and spelling is marked separately from ideas.",
    c: "bg-sun",
  },
  {
    title: "ADHD",
    body: "Short blocks, movement breaks built into the day, and a visual timer so they always know when a task ends.",
    c: "bg-leaf",
  },
  {
    title: "Autism",
    body: "A predictable routine, the same faces each week, and a heads-up before anything changes.",
    c: "bg-cobalt-tint",
  },
  {
    title: "Ahead of their year",
    body: "Your child moves up a level in the subjects they're flying in, without skipping the basics in the rest.",
    c: "bg-violet-tint",
  },
  {
    title: "Catching up",
    body: "After illness or time out of school, the placement check finds the gaps, so they start where they are.",
    c: "bg-tomato-tint",
  },
];

const STEPS = [
  {
    n: "1",
    title: "A 30 minute call",
    body: "Tell us about your child, why you're thinking about home education, and what's worrying you. You'll speak to a person who's taught, not a salesperson.",
    card: "bg-sun",
  },
  {
    n: "2",
    title: "A relaxed placement check",
    body: "About 40 minutes of reading, maths and a short piece of writing. It's not a test to pass. It tells us where to start so your child isn't bored or lost in week one.",
    card: "bg-pink",
  },
  {
    n: "3",
    title: "A plan on one page",
    body: "Subjects, weekly timetable, who teaches what, and the cost. We review it with you every half-term and change it when it isn't working.",
    card: "bg-leaf",
  },
];

const NEW_TO_HE = [
  {
    title: "Taking your child out of school",
    body: "If your child is on a school roll, you write to the head teacher to say you're home educating. We'll talk you through the wording and what happens next.",
    style: "bg-sun md:-rotate-2",
  },
  {
    title: "Your local authority",
    body: "Your council may get in touch to ask how your child is being educated. Our half-termly reports give you a clear, written answer.",
    style: "bg-pink md:rotate-1",
  },
  {
    title: "Exams later on",
    body: "Home-educated students sit GCSEs as private candidates. We help you choose subjects, find a centre and plan the dates.",
    style: "bg-leaf-tint md:-rotate-1",
  },
];

const FAQ = [
  {
    q: "Is Rightsteps a school?",
    a: "No. When you home educate, you stay legally responsible for your child's education. We provide the teaching, materials, structure and reporting, and you stay in charge of the decisions.",
  },
  {
    q: "Do we have to follow the National Curriculum?",
    a: "Home educators in England don't have to. We map to it by default because it makes a return to school, or sitting GCSEs, much simpler. You can drop, swap or add subjects.",
  },
  {
    q: "Who are the tutors and teachers?",
    a: "Qualified teachers and subject specialists, all with enhanced DBS checks. You'll know who is teaching your child before the first session, and you can ask to change.",
  },
  {
    q: "How much time will my child spend on a screen?",
    a: "Less than you'd think. Live sessions are short for younger children, and a good share of the work in KS1 and KS2 is printable: worksheets, reading logs and writing done on paper, then photographed and uploaded.",
  },
  {
    q: "Can my child use Rightsteps and stay in school?",
    a: "Yes. Plenty of families use after-school sessions, tutoring or the reading and writing corners alongside school.",
  },
  {
    q: "Is the AI companion safe for children?",
    a: "It only talks about your child's learning, it won't write their work for them, and you can read every conversation they have with it. If your child seems upset or stuck for a long time, it suggests they come and find you.",
  },
  {
    q: "We're in Scotland, Wales or Northern Ireland. Can we join?",
    a: "Yes, but tell us on the call. Our programme follows the National Curriculum for England, so we'll point out where it differs from yours and adjust where we can.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the mix: solo work alone costs far less than three tutor sessions a week. We'll give you a written price after the first call, with no obligation.",
  },
];

function SectionHead({ id, n, kicker, title, outline, intro, note, dark = false, chip = "bg-sun" }) {
  return (
    <div className="max-w-3xl">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider">
        <span className={`rounded-[4px] border-[3px] border-ink px-2 py-0.5 font-bold text-ink shadow-[3px_3px_0_var(--ink)] ${chip}`}>
          {n}
        </span>
        <span className={dark ? "text-white/70" : "text-ink"}>{kicker}</span>
      </p>
      <h2
        id={id}
        className={`mt-6 text-[2.4rem] font-black uppercase leading-[0.95] sm:text-[4rem] ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
        {outline && (
          <>
            {" "}
            <span className={dark ? "pop-red text-sun" : "pop text-tomato"}>{outline}</span>
          </>
        )}
      </h2>
      {note && <p className="mt-3 inline-block -rotate-2 font-hand text-2xl text-tomato sm:text-3xl">{note}</p>}
      {intro && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

function Burst({ children, color = "bg-sun", size = "h-28 w-28", className = "" }) {
  return (
    <div className={`burst-wrap pointer-events-none absolute ${size} ${className}`} aria-hidden="true">
      <div className={`burst spin-slow absolute inset-0 ${color}`} />
      <div className="absolute inset-0 grid place-items-center text-center font-display text-[11px] font-black uppercase leading-tight tracking-wide text-ink">
        {children}
      </div>
    </div>
  );
}

function Logo({ light = false }) {
  return (
    <span className={`flex items-center gap-2 font-display text-xl font-black tracking-tight ${light ? "text-white" : "text-ink"}`}>
      <span className="flex items-end gap-[3px]" aria-hidden="true">
        <span className="h-2.5 w-2 rounded-[2px] border-2 border-ink bg-tomato" />
        <span className="h-4 w-2 rounded-[2px] border-2 border-ink bg-sun" />
        <span className="h-[22px] w-2 rounded-[2px] border-2 border-ink bg-leaf" />
      </span>
      rightsteps
    </span>
  );
}

function Ticker({ items, className, reverse = false, star = "text-tomato" }) {
  return (
    <div className={`overflow-hidden border-y-[3px] border-ink py-3 ${className}`}>
      <div className={`${reverse ? "ticker-reverse" : "ticker"} flex w-max gap-8 whitespace-nowrap font-display text-xl font-black uppercase sm:text-2xl`}>
        {[...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-8" aria-hidden={i >= items.length}>
            {s}
            <Icon name="sparkle" className={`h-5 w-5 ${star}`} />
          </span>
        ))}
      </div>
    </div>
  );
}

function WayExtra({ kind }) {
  if (kind === "tasks") {
    return (
      <div className="mt-6 rounded-[6px] border-[3px] border-ink bg-surface p-4 text-ink shadow-[4px_4px_0_var(--ink)] sm:mt-0" aria-hidden="true">
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">This week · Year 5 maths</p>
        <ul className="mt-3 space-y-2">
          {TASKS.map((t) => (
            <li key={t.label} className="flex items-center gap-3 text-sm">
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-[3px] border-2 border-ink text-[11px] font-black ${
                  t.state === "done" ? "bg-leaf" : t.state === "now" ? "bg-sun" : "bg-surface"
                }`}
              >
                {t.state === "done" && <Icon name="check" className="h-3.5 w-3.5" />}
              </span>
              <span className={t.state === "done" ? "text-faint line-through" : "font-semibold"}>{t.label}</span>
              {t.state === "now" && <span className="ml-auto font-hand text-lg text-tomato">today</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (kind === "books") {
    return (
      <div className="mt-6 flex items-end gap-1.5 sm:mt-0" aria-hidden="true">
        {BOOKS.map((b) => (
          <div
            key={b.title}
            className={`flex w-10 items-center justify-center rounded-t-[4px] border-[3px] border-ink shadow-[3px_3px_0_var(--ink)] ${b.c} ${b.h}`}
          >
            <span className="rotate-180 whitespace-nowrap font-display text-[11px] font-black [writing-mode:vertical-rl]">{b.title}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" aria-label="Rightsteps home">
            <Logo />
          </a>
          <nav aria-label="Main" className="hidden items-center gap-1 text-sm font-semibold text-ink lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[4px] border-2 border-transparent px-3 py-1.5 transition-all duration-150 hover:border-ink hover:bg-sun hover:shadow-[3px_3px_0_var(--ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#book" className="btn btn-sun !min-h-11 text-sm">
            Book a call
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="graph relative overflow-hidden border-b-[3px] border-ink">
          <div className="relative mx-auto grid max-w-6xl gap-20 px-4 pb-28 pt-14 sm:px-6 md:pt-20 lg:min-h-[calc(100svh-68px)] lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12 lg:pb-16 lg:pt-[clamp(1.5rem,5vh,3.5rem)]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-[4px] border-[3px] border-ink bg-surface px-3 py-1 font-mono text-xs uppercase tracking-wider text-ink shadow-[3px_3px_0_var(--ink)]">
                <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-leaf" aria-hidden="true" />
                Home education · KS1 to KS4 · UK
              </p>
              <h1 className="mt-8 font-display text-[2.7rem] font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-[4.6rem] lg:mt-[clamp(1rem,3vh,2rem)] lg:text-[clamp(3rem,8.6vh,4.6rem)]">
                Home
                <br />
                education,{" "}
                <span className="mt-2 inline-block -rotate-2 rounded-[6px] border-[3px] border-ink bg-sun px-3 shadow-[5px_5px_0_var(--ink)]">
                  without
                </span>
                <br />
                doing it
                <br />
                <span className="relative inline-block whitespace-nowrap">
                  <del className="text-ink/45 no-underline">alone.</del>
                  <svg
                    aria-hidden="true"
                    className="absolute left-[-4%] top-1/2 h-5 w-[108%] -translate-y-1/2"
                    viewBox="0 0 300 16"
                    preserveAspectRatio="none"
                  >
                    <path d="M3 10 C 60 4, 120 13, 180 7 S 270 5, 297 9" fill="none" stroke="var(--tomato)" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-3 -rotate-2 font-hand text-3xl leading-none text-tomato sm:ml-16 sm:text-4xl">
                <ins className="no-underline">with a whole team behind you</ins>
                <Icon name="check" className="ml-1 inline h-8 w-8 -translate-y-1 align-middle" />
              </p>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                Rightsteps helps children from Year 1 to Year 11 learn at home, at their own pace,
                with people who know them by name. On their own, with a tutor or in a small live
                class. And you can always see how they&apos;re getting on.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#book" className="btn btn-primary !min-h-14 text-base">
                  Book a free call
                  <span className="grid h-7 w-7 place-items-center rounded-[4px] bg-sun text-ink" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href="#ways" className="btn btn-light !min-h-14 text-base">
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-sm text-muted">
                Also for children in school who need extra support after hours.
              </p>
            </div>

            {/* A printed day plan, taped to the desk */}
            <div className="relative mx-auto w-full max-w-md lg:mt-[clamp(1rem,3vh,2rem)] lg:max-w-none">
              <div className="cut absolute inset-0 translate-x-5 translate-y-5 rotate-3 bg-cobalt" aria-hidden="true" />
              <div className="cut absolute inset-0 -translate-x-3 translate-y-2 -rotate-3 bg-pink" aria-hidden="true" />
              <figure className="sheet relative -rotate-1 p-6 sm:p-8 lg:px-7 lg:py-[clamp(1rem,2.6vh,1.75rem)]">
                <span className="tape -top-4 left-1/2 -translate-x-1/2 -rotate-3" aria-hidden="true" />
                <div className="border-b-[3px] border-ink pb-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-faint">Tuesday plan · wk 7 · autumn</p>
                    <p className="mt-1 font-display text-2xl font-black text-ink">Ava · Year 4</p>
                  </div>
                </div>
                <ol className="divide-y-2 divide-dashed divide-rule">
                  {DAY.map((slot) => (
                    <li key={slot.time} className="grid grid-cols-[3.25rem_1fr_auto] items-baseline gap-3 py-3 lg:py-[clamp(0.3rem,1.1vh,0.75rem)]">
                      <span className="font-mono text-sm text-faint">{slot.time}</span>
                      <span>
                        <span className={`block font-semibold ${slot.kind ? "text-ink" : "text-faint"}`}>{slot.what}</span>
                        <span className="block text-sm text-faint lg:[@media(max-height:720px)]:hidden">{slot.detail}</span>
                      </span>
                      {slot.kind && (
                        <span className={`rounded-[4px] border-2 border-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink ${slot.tag}`}>
                          {slot.kind}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
                <figcaption className="mt-2 pr-40 text-xs text-faint">
                  An example day. Every family&apos;s timetable is different.
                </figcaption>

                <div className="note absolute -bottom-10 -right-3 w-40 rotate-[5deg] bg-sun p-3 sm:-right-8">
                  <p className="font-hand text-xl leading-tight text-ink">Ava read 3 chapters today!</p>
                  <p className="mt-1 font-hand text-lg text-ink/70">Ms Patel</p>
                </div>
              </figure>
              <Burst className="-right-3 -top-12 sm:-right-10 sm:-top-14" size="h-24 w-24 sm:h-28 sm:w-28">
                Year 1
                <br />
                to
                <br />
                Year 11
              </Burst>
            </div>
          </div>
        </section>

        {/* Crossed tickers */}
        <section aria-label="Some of the things we teach" className="relative overflow-hidden bg-paper py-14">
          <Ticker items={SUBJECTS} className="relative z-10 -rotate-2 bg-sun text-ink" />
          <Ticker items={FORMATS} reverse className="-mt-6 rotate-2 bg-ink text-white" star="text-sun" />
        </section>

        {/* Facts */}
        <section aria-label="At a glance" className="mx-auto max-w-6xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["Year groups", "Year 1 to Year 11", "bg-tomato"],
              ["Ages", "5 to 16", "bg-sun"],
              ["Curriculum", "National Curriculum for England", "bg-leaf"],
              ["GCSE boards", "AQA, Edexcel, OCR", "bg-cobalt-tint"],
            ].map(([k, v, c]) => (
              <div key={k} className={`cut p-5 ${c}`}>
                <dt className="font-mono text-xs uppercase tracking-wider text-ink/75">{k}</dt>
                <dd className="mt-2 font-display text-lg font-black leading-tight text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* For your child */}
        <section id="child" className="mt-28 border-y-[3px] border-ink bg-pink-tint" aria-labelledby="child-title">
          <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-start">
              <div>
                <SectionHead
                  id="child-title"
                  n="01"
                  kicker="For your child"
                  title="A day built"
                  outline="around them."
                  note="not around a timetable"
                  intro="Rightsteps is for children first. Every part of it is designed so your child feels understood, gets the help they need when they need it, and actually looks forward to learning again."
                  chip="bg-pink"
                />
                <ul className="mt-10 space-y-4">
                  {CHILD_PROMISES.map((item) => (
                    <li key={item.title} className="flex gap-4 rounded-[8px] border-[3px] border-ink bg-surface p-4 shadow-[4px_4px_0_var(--ink)]">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-[6px] border-[3px] border-ink text-ink ${item.c}`}
                        aria-hidden="true"
                      >
                        <Icon name={item.icon} />
                      </span>
                      <span>
                        <span className="block font-display font-black text-ink">{item.title}</span>
                        <span className="mt-1 block leading-relaxed text-muted">{item.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:sticky lg:top-28">
                <ChildDay />
                <p className="mt-6 text-center text-sm text-muted">
                  What your child sees when they log in. Pick a mood to see how the day changes.
                </p>
              </div>
            </div>

            <div className="mt-28">
              <p className="font-hand text-3xl text-tomato">Every child is different</p>
              <h3 className="mt-1 max-w-3xl text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                Lots of children come to us because school stopped working for them.
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                That&apos;s not a failure on anyone&apos;s part. Here&apos;s how we change the way we teach to fit
                the child in front of us.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {NEEDS.map((n) => (
                  <div key={n.title} className={`cut lift p-6 ${n.c}`}>
                    <p className="font-display text-xl font-black uppercase leading-tight text-ink">{n.title}</p>
                    <p className="mt-3 leading-relaxed text-ink/80">{n.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-10 max-w-2xl rounded-[8px] border-[3px] border-dashed border-ink bg-surface p-5 text-ink">
                If your child has an EHCP or a diagnosis, tell us on the first call. We&apos;ll be honest
                about what we can support well, and what we can&apos;t.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to learn */}
        <section id="ways" className="mx-auto max-w-6xl px-4 py-28 sm:px-6" aria-labelledby="ways-title">
          <SectionHead
            id="ways-title"
            n="02"
            kicker="Ways to learn"
            title="Mix and"
            outline="match."
            note="most families use three or four"
            intro="A seven-year-old who loves stories and a fifteen-year-old two terms from GCSEs need very different weeks. You choose the mix, and change it whenever you like."
            chip="bg-cobalt-tint"
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-6">
            {WAYS.map((w) => (
              <article key={w.n} className={`cut lift relative flex flex-col p-7 ${w.card} ${w.span}`}>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-6xl font-black leading-none">{w.n}</span>
                  <span className="rotate-[-4deg] rounded-[4px] border-2 border-ink bg-surface px-2 py-0.5 font-hand text-xl leading-tight text-ink">
                    {w.doodle}
                  </span>
                </div>
                <div className={w.extra ? "mt-6 grid flex-1 gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-end" : "mt-6 flex flex-1 flex-col"}>
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-2xl font-black uppercase leading-tight">{w.title}</h3>
                    <p className="mt-3 leading-relaxed opacity-90">{w.body}</p>
                    <p className="mt-auto pt-6">
                      <span className="inline-block rounded-[4px] border-2 border-ink bg-surface px-3 py-2 text-sm text-ink">
                        <span className="mr-1.5 font-mono text-[11px] font-bold uppercase tracking-wider">Good for</span>
                        {w.fit}
                      </span>
                    </p>
                  </div>
                  {w.extra && <WayExtra kind={w.extra} />}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Key stages */}
        <section id="stages" className="graph border-t-[3px] border-ink" aria-labelledby="stages-title">
          <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6">
            <SectionHead
              id="stages-title"
              n="03"
              kicker="Key stages"
              title="Year by"
              outline="year."
              intro="Each stage follows the National Curriculum for England, paced for learning at home. Pick a key stage to see what's covered."
              chip="bg-leaf"
            />
            <div className="mt-14">
              <KeyStages />
            </div>
          </div>
        </section>

        {/* AI companion */}
        <section id="companion" className="graph-dark relative overflow-hidden border-t-[3px] border-ink" aria-labelledby="companion-title">
          <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
            <Burst color="bg-violet" className="right-4 top-16 hidden md:block" size="h-36 w-36">
              <span className="text-white">
                For kids,
                <br />
                parents
                <br />& tutors
              </span>
            </Burst>
            <SectionHead
              id="companion-title"
              n="04"
              kicker="AI companion"
              title="One assistant."
              outline="Three jobs."
              intro="The companion reads the same work, timetable and tutor notes as everyone else on your child's team. It helps your child think, keeps you informed, and saves tutors time. It doesn't replace any of you."
              dark
              chip="bg-violet-tint"
            />
            <div className="mt-14">
              <Companion />
            </div>
            <div className="mt-20 grid gap-6 sm:grid-cols-3">
              {[
                ["It won't do their homework", "It explains and asks questions. It won't write the essay or give the answer to copy down.", "bg-sun", "cross"],
                ["You can read everything", "Every conversation your child has with the companion is visible in your parent account.", "bg-pink", "eye"],
                ["A person checks what counts", "Assessed work and GCSE practice papers are marked by a tutor, not the companion alone.", "bg-leaf", "check"],
              ].map(([t, b, c, icon]) => (
                <div key={t} className={`rounded-[8px] border-[3px] border-ink p-6 text-ink shadow-[6px_6px_0_var(--surface)] ${c}`}>
                  <span className="grid h-10 w-10 place-items-center rounded-[4px] border-[3px] border-ink bg-surface" aria-hidden="true">
                    <Icon name={icon} />
                  </span>
                  <p className="mt-4 font-display text-lg font-black uppercase leading-tight">{t}</p>
                  <p className="mt-2 leading-relaxed text-ink/80">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting started */}
        <section id="start" className="border-t-[3px] border-ink" aria-labelledby="start-title">
          <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6">
            <SectionHead
              id="start-title"
              n="05"
              kicker="Getting started"
              title="First call to first lesson:"
              outline="about a week."
              chip="bg-pink"
            />
            <ol className="mt-16 grid gap-8 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <li key={s.n} className={`cut lift relative p-7 ${s.card}`}>
                  <span className="pop font-display text-8xl text-surface font-black leading-none">{s.n}</span>
                  <h3 className="mt-4 text-xl font-black uppercase leading-tight text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/80">{s.body}</p>
                  {i < STEPS.length - 1 && (
                    <span
                      className="absolute -right-7 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border-[3px] border-ink bg-surface font-black text-ink md:grid"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-28">
              <p className="font-hand text-3xl text-tomato">New to home education?</p>
              <h3 className="mt-1 max-w-2xl text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                The practical bits people don&apos;t tell you about.
              </h3>
              <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
                {NEW_TO_HE.map((item) => (
                  <div key={item.title} className={`note relative p-6 pt-8 ${item.style}`}>
                    <span className="tape -top-4 left-1/2 -translate-x-1/2 rotate-2" aria-hidden="true" />
                    <p className="font-display text-lg font-black text-ink">{item.title}</p>
                    <p className="mt-2 leading-relaxed text-ink/80">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t-[3px] border-ink bg-cobalt" aria-labelledby="faq-title">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <SectionHead id="faq-title" n="06" kicker="Questions" title="Parents" outline="ask us." dark chip="bg-sun" />
              <p className="mt-4 inline-block -rotate-2 font-hand text-3xl text-sun">no silly questions</p>
            </div>
            <div className="space-y-4">
              {FAQ.map((item) => (
                <details key={item.q} className="group rounded-[8px] border-[3px] border-ink bg-surface shadow-[5px_5px_0_var(--ink)] open:bg-sun-tint">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-4 font-display font-bold text-ink">
                    {item.q}
                    <span
                      className="faq-sign grid h-8 w-8 shrink-0 place-items-center rounded-[4px] border-[3px] border-ink bg-sun text-lg font-black leading-none text-ink transition-transform duration-200"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 pr-14 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="book" className="graph relative overflow-hidden border-t-[3px] border-ink" aria-labelledby="book-title">
          <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
            <div className="cut relative bg-tomato p-8 sm:p-14" style={{ boxShadow: "12px 12px 0 var(--ink)" }}>
              <Burst className="-right-4 -top-14 sm:-right-10" size="h-32 w-32 sm:h-36 sm:w-36">
                30 min
                <br />
                free
                <br />
                call
              </Burst>
              <p className="font-mono text-xs uppercase tracking-wider text-ink">07 · Talk to us</p>
              <h2 id="book-title" className="mt-4 max-w-3xl font-display text-[2.6rem] font-black uppercase leading-[0.95] text-ink sm:text-[4.5rem]">
                Not sure yet? <span className="pop text-sun">Good.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
                That&apos;s what the first call is for. Thirty minutes, no commitment. Bring your
                questions, including the ones you think might sound silly. Most families have been
                thinking about this for months before they ring.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:hello@rightsteps.co.uk" className="btn btn-primary !min-h-14 text-lg">
                  Book a free call
                  <span className="grid h-7 w-7 place-items-center rounded-[4px] bg-sun text-ink" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href="mailto:hello@rightsteps.co.uk" className="btn btn-light !min-h-14">
                  hello@rightsteps.co.uk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="overflow-hidden border-t-[3px] border-ink bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-12 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Logo light />
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-sun">
                {item.label}
              </a>
            ))}
          </nav>
          <p>© 2026 Rightsteps · United Kingdom</p>
        </div>
        <p
          className="pop-red text-sun mx-auto max-w-6xl select-none px-4 pb-2 pt-10 text-center font-display text-[17vw] font-black leading-[0.8] tracking-tighter sm:px-6 lg:text-[11.5rem]"
          aria-hidden="true"
        >
          rightsteps
        </p>
      </footer>
    </>
  );
}
