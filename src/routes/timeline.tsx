import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading, SkillChip } from "@/components/portfolio/skills";
import { getAllItems, formatDate } from "@/lib/portfolio";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Journey — Khaled Hawwas" },
      { name: "description", content: "A combined, date-sorted journey through every project, certification, achievement, and volunteering entry." },
      { property: "og:title", content: "Journey — Khaled Hawwas" },
      { property: "og:description", content: "A combined, date-sorted journey through every project, certification, achievement, and volunteering entry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: Timeline
});

function Timeline() {
  const items = getAllItems();
  return (
    <div className="container py-20">
      <SectionHeading eyebrow="Journey" title="The path so far" />
      <div className="mx-auto max-w-3xl">
        {items.map((item) => (
          <article key={`${item.collection}-${item.id}`} className="relative border-l border-[#2d4860] pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-accent"></span>
            {item.date ? (
              <time className="text-xs uppercase tracking-widest text-accent">
                {formatDate(item.date, { month: "long", year: "numeric" })}
              </time>
            ) : (
              <span className="text-xs uppercase tracking-widest text-amber">Date to be added</span>
            )}
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 leading-7 text-fog">{item.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.skills.slice(0, 5).map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
