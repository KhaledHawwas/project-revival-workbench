import { Link } from "@tanstack/react-router";

export function SectionHeading({ eyebrow, title, action, href }: { eyebrow: string; title: string; action?: string; href?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="eyebrow mb-2">{`// ${eyebrow}`}</p>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {href && action && (
        <Link className="shrink-0 font-mono text-sm text-accent transition-transform hover:translate-x-0.5" to={href}>
          {action} →
        </Link>
      )}
    </div>
  );
}

const skillColors: Record<string, string> = {
  kotlin: "chip-kotlin",
  android: "chip-android",
  compose: "chip-compose",
  "compose-multiplatform": "chip-compose",
  java: "chip-java",
  kmp: "chip-kmp",
  architecture: "chip-architecture",
  python: "chip-python",
  git: "chip-git"
};

export function SkillChip({ skill }: { skill: string }) {
  return (
    <Link className={`chip ${skillColors[skill] ?? "chip-default"}`} to="/skills/$skill" params={{ skill }}>
      {skill}
    </Link>
  );
}
