import { SkillChip } from "./skills";
import { formatDate, type NormalizedItem } from "@/lib/portfolio";
import { Link } from "@tanstack/react-router";

const projectAccent: Record<string, string> = {
  "native-ecommerce": "text-accent",
  "all-notification-blocker": "text-accent",
  ainaa: "text-amber",
  "ai-assistant-3": "text-amber",
  "pomodoro-kmp": "text-accent"
};

export function ItemCard({ item }: { item: NormalizedItem }) {
  const data = item.data as Record<string, string | string[] | boolean | undefined>;
  const type = data["type"] as string | undefined;
  const status = data["status"] as string | undefined;
  const accentClass =
    item.collection === "projects" ? (projectAccent[item.id] ?? "text-accent") : "text-accent";

  return (
    <article className="card group flex h-full flex-col p-5 transition-all duration-200 hover:-translate-y-1">
      <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[.7rem] text-mist">
        <span className={accentClass}>
          {type === "open-source" ? "open-source" : item.collection}
        </span>
        {item.date && <time dateTime={item.date}>{formatDate(item.date)}</time>}
      </div>
      {status === "work-in-progress" && (
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded border border-amber/40 bg-amber/10 px-2 py-0.5 font-mono text-[.65rem] uppercase tracking-wider text-amber">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber"></span>
          wip
        </span>
      )}
      <h3 className="mb-2 text-lg font-semibold leading-snug tracking-tight group-hover:text-accent transition-colors">
        {item.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-6 text-fog">{item.summary}</p>
      <div className="flex flex-wrap gap-2">
        {item.skills.slice(0, 4).map((skill) => (
          <SkillChip key={skill} skill={skill} />
        ))}
      </div>
      {item.collection === "projects" && (
        <Link
          className="mt-5 inline-flex items-center gap-1 font-mono text-sm text-accent transition-transform duration-200 group-hover:translate-x-1"
          to="/projects/$slug"
          params={{ slug: item.id }}
        >
          cat case-study.md →
        </Link>
      )}
    </article>
  );
}
