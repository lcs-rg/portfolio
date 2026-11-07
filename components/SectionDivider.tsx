const REPEAT = 6;

export function SectionDivider({
  index,
  label,
  reverse = false,
}: {
  index: string;
  label: string;
  reverse?: boolean;
}) {
  return (
    <div aria-hidden className="relative select-none overflow-hidden py-10">
      <div
        data-divider-track
        data-reverse={reverse ? "true" : "false"}
        className="flex w-max items-baseline gap-12 whitespace-nowrap will-change-transform"
      >
        {Array.from({ length: REPEAT }).map((_, i) => (
          <span
            key={i}
            className={`text-[10vw] font-bold leading-none tracking-[-0.03em] ${
              i % 2 === 0
                ? "text-gradient-violet"
                : "text-transparent [-webkit-text-stroke:1px_rgba(148,163,184,0.3)]"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-canvas px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
        {index} · {label}
      </div>
    </div>
  );
}
