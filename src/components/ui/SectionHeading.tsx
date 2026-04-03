interface SectionHeadingProps {
  eyebrow?:  string;
  title:     string;
  subtitle?: string;
  centered?: boolean;
  light?:    boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light    = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`font-body text-xs font-500 tracking-[0.25em] uppercase mb-4 ${
            light ? "text-[#f97d08]/80" : "text-[#f97d08]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight ${
          light ? "text-white" : "text-[#1a0e00]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-body text-base leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-[#8a7060]"}`}
        >
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div className={`flex items-center gap-3 mt-6 ${centered ? "justify-center" : ""}`}>
        <div className="h-px w-12 bg-[#f97d08]/30" />
        <span className="text-[#f97d08] text-lg">🕉</span>
        <div className="h-px w-12 bg-[#f97d08]/30" />
      </div>
    </div>
  );
}
