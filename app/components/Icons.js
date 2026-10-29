// Hand-drawn style icons in the same ink weight as the rest of the page.
// Decorative only: every use sits next to a visible text label.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

const MOUTHS = {
  great: "M10 18 Q16 25 22 18 Z",
  ok: "M11 19 Q16 22.5 21 19",
  wobbly: "M10 21 Q13 18 16 21 T22 21",
  tired: "M13 21 H19",
};

export function Face({ mood, className = "h-9 w-9" }) {
  const tired = mood === "tired";
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <circle cx="16" cy="16" r="13" fill="var(--surface)" />
      {tired ? (
        <>
          <path d="M9.5 13.5 Q11.5 15.5 13.5 13.5" />
          <path d="M18.5 13.5 Q20.5 15.5 22.5 13.5" />
        </>
      ) : (
        <>
          <circle cx="11.5" cy="13" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="20.5" cy="13" r="1.6" fill="currentColor" stroke="none" />
        </>
      )}
      {mood === "wobbly" && <path d="M9 9.5 L13 10.5 M23 9.5 L19 10.5" />}
      <path d={MOUTHS[mood]} fill={mood === "great" ? "currentColor" : "none"} />
    </svg>
  );
}

export function Icon({ name, className = "h-5 w-5" }) {
  const paths = {
    arrow: <path d="M4 12 H19 M13 6 L19 12 L13 18" />,
    person: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20 C5.5 15.5 8.5 13.5 12 13.5 C15.5 13.5 18.5 15.5 19 20" />
      </>
    ),
    pencil: (
      <>
        <path d="M4 20 L5 15.5 L15.5 5 L19 8.5 L8.5 19 Z" />
        <path d="M13 7.5 L16.5 11" />
      </>
    ),
    heart: <path d="M12 20 C5 15 3 11.5 4.5 8 C6 5 10 5 12 8.5 C14 5 18 5 19.5 8 C21 11.5 19 15 12 20 Z" />,
    star: <path d="M12 3.5 L14.6 9 L20.5 9.6 L16 13.6 L17.3 19.5 L12 16.5 L6.7 19.5 L8 13.6 L3.5 9.6 L9.4 9 Z" />,
    check: <path d="M5 12.5 L10 17.5 L19 6.5" />,
    sparkle: <path d="M12 2 C12.8 8 16 11.2 22 12 C16 12.8 12.8 16 12 22 C11.2 16 8 12.8 2 12 C8 11.2 11.2 8 12 2 Z" fill="currentColor" />,
    cross: <path d="M6 6 L18 18 M18 6 L6 18" />,
    eye: (
      <>
        <path d="M2.5 12 C5 7 8.5 5 12 5 C15.5 5 19 7 21.5 12 C19 17 15.5 19 12 19 C8.5 19 5 17 2.5 12 Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      {paths[name]}
    </svg>
  );
}
