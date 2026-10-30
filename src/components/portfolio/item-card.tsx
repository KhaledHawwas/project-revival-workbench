import { SkillChip } from "./skills";
import { formatDate, type NormalizedItem } from "@/lib/portfolio";
import { Link } from "@tanstack/react-router";

const projectColors: Record<string, string> = {
  "all-notification-blocker": "project-mint",
  "pomodoro-kmp": "project-violet",
  "native-ecommerce": "project-blue",
  "ai-assistant-3": "project-pink",
  ainaa: "project-orange",
  "child-shield": "project-yellow",
  "sms-auto-responder": "project-cyan",
  "game-of-life": "project-purple",
  tick: "project-lime",
  "dynamics-simulator": "project-red",
  "order-management-app": "project-blue",
  groceria: "project-orange",
  "webrtc-sample": "project-cyan",
  "portfolio-concept": "project-violet"
};

export function ItemCard({ item }: { item: NormalizedItem }) {
  const data = item.data as Record<string, string | string[] | boolean | undefined>;
  const type = data.type as string | undefined;
  const status = data.status as string | undefined;
  const projectClass = item.collection === "projects" ? (projectColors[item.id] ?? "project-default") : "";

  return (
    <article className={`card ${projectClass} flex h-full flex-col p-5 transition hover:-translate-y-1 hover:border-accent/60`}>
      <div className="mb-4 flex items-center justify-between gap-3 text-xs text-mist">
        <span>{type === "open-source" ? "OPEN SOURCE" : item.collection.toUpperCase()}</span>
        {item.date && <time dateTime={item.date}>{formatDate(item.date)}</time>}
      </div>
      {status === "work-in-progress" && (
        <span className="mb-3 inline-flex w-fit rounded-full border border-amber/40 bg-amber/10 px-2 py-1 text-[.68rem] font-semibold uppercase tracking-wider text-amber">
          Work in progress
        </span>
      )}
      <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-6 text-fog">{item.summary}</p>
      <div className="flex flex-wrap gap-2">
        {item.skills.slice(0, 4).map((skill) => (
          <SkillChip key={skill} skill={skill} />
        ))}
      </div>
      {item.collection === "projects" && (
        <Link className="mt-5 text-sm font-semibold text-accent" to="/projects/$slug" params={{ slug: item.id }}>
          Read case study →
        </Link>
      )}
    </article>
  );
}
