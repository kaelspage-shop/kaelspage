import { useId } from "react";

// Polka-dot fawn mascot. `head` crops the drawing to the face (used for the logo).
export function Fawn({ className = "", head = false, label = "Polka-dot fawn mascot" }) {
  const id = useId().replace(/:/g, "");
  const dots = `url(#${id})`;
  return (
    <svg viewBox={head ? "46 14 108 108" : "0 0 200 230"} className={className} role="img" aria-label={label}>
      <defs>
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
          <circle cx="5" cy="5" r="3" fill="#80583D" opacity=".6" />
          <circle cx="13" cy="13" r="2" fill="#80583D" opacity=".45" />
        </pattern>
      </defs>
      <g stroke="#563A2B" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <ellipse cx="152" cy="146" rx="10" ry="7" fill="#FFFCF7" />
        {[60, 80, 108, 128].map((x) => (
          <g key={x}>
            <rect x={x} y="168" width="14" height="44" rx="7" fill="#E7D4BC" />
            <rect x={x} y="168" width="14" height="44" rx="7" fill={dots} stroke="none" />
            <rect x={x} y="206" width="14" height="8" rx="4" fill="#563A2B" />
          </g>
        ))}
        <ellipse cx="100" cy="150" rx="50" ry="36" fill="#E7D4BC" />
        <ellipse cx="100" cy="150" rx="50" ry="36" fill={dots} stroke="none" />
        <ellipse cx="66" cy="54" rx="10" ry="20" transform="rotate(-25 66 54)" fill="#E7D4BC" />
        <ellipse cx="134" cy="54" rx="10" ry="20" transform="rotate(25 134 54)" fill="#E7D4BC" />
        <ellipse cx="66" cy="56" rx="4.5" ry="12" transform="rotate(-25 66 56)" fill="#B58B69" stroke="none" />
        <ellipse cx="134" cy="56" rx="4.5" ry="12" transform="rotate(25 134 56)" fill="#B58B69" stroke="none" />
        <circle cx="100" cy="84" r="34" fill="#E7D4BC" />
        <circle cx="100" cy="84" r="34" fill={dots} stroke="none" />
        <ellipse cx="100" cy="98" rx="17" ry="12" fill="#FFFCF7" />
        <ellipse cx="100" cy="93" rx="5" ry="3.5" fill="#563A2B" stroke="none" />
        <path d="M100 96v4M94 102q6 4 12 0" fill="none" strokeWidth="2" />
        <circle cx="86" cy="80" r="4.5" fill="#563A2B" stroke="none" />
        <circle cx="114" cy="80" r="4.5" fill="#563A2B" stroke="none" />
        <circle cx="87.5" cy="78.5" r="1.5" fill="#FFFCF7" stroke="none" />
        <circle cx="115.5" cy="78.5" r="1.5" fill="#FFFCF7" stroke="none" />
        <circle cx="76" cy="95" r="5" fill="#B58B69" opacity=".5" stroke="none" />
        <circle cx="124" cy="95" r="5" fill="#B58B69" opacity=".5" stroke="none" />
        {/* bow */}
        <path d="M124 52L108 43v18zM124 52l16-9v18z" fill="#80583D" strokeWidth="2" />
        <circle cx="124" cy="52" r="4" fill="#B58B69" strokeWidth="2" />
        {/* flower */}
        {[0, 72, 144, 216, 288].map((a) => (
          <circle key={a} cx="76" cy="46" r="4.2" fill="#FFFCF7" strokeWidth="1.6" transform={`rotate(${a} 76 50) translate(0 -5)`} />
        ))}
        <circle cx="76" cy="50" r="3" fill="#B58B69" strokeWidth="1.6" />
      </g>
    </svg>
  );
}

export function Sparkle({ className = "", size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <path d="M12 1c.8 6.2 4.8 10.2 11 11-6.2.8-10.2 4.800-11 11-.8-6.200-4.800-10.200-11-11 6.200-.8 10.200-4.800 11-11z" fill="currentColor" />
    </svg>
  );
}

export function Bow({ className = "", size = 28 }) {
  return (
    <svg viewBox="0 0 32 20" width={size} height={size * 0.62} className={className} aria-hidden="true">
      <path d="M16 10L3 2v16zM16 10l13-8v16z" fill="currentColor" />
      <circle cx="16" cy="10" r="3.2" fill="#F8F0E5" />
    </svg>
  );
}

export function Flower({ className = "", size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx="12" cy="6" r="4.5" fill="currentColor" transform={`rotate(${a} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="3" fill="#B58B69" />
    </svg>
  );
}

// Small heading ornament: line - bow - line
export function Ornament() {
  return (
    <div className="mx-auto mt-3 flex items-center justify-center gap-3 text-caramel" aria-hidden="true">
      <span className="h-px w-12 bg-caramel/60" />
      <Bow size={26} />
      <span className="h-px w-12 bg-caramel/60" />
    </div>
  );
}

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      <Ornament />
      {subtitle && <p className="mt-4 text-mocha">{subtitle}</p>}
    </div>
  );
}
