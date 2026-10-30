import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/portfolio/skills";
import { getSkillCounts } from "@/lib/portfolio";

export const Route = createFileRoute("/skills/")({
  head: () => ({
    meta: [
      { title: "Skills — Khaled Hawwas" },
      {
        name: "description",
        content: "Skills mapped to real work: every skill links to the projects, certifications, achievements, and community work connected to it."
      },
      { property: "og:title", content: "Skills — Khaled Hawwas" },
      {
        property: "og:description",
        content: "Skills mapped to real work: every skill links to the projects, certifications, achievements, and community work connected to it."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: SkillsIndex
});

const countLabels = [
  { key: "projects", label: "Projects", className: "border-accent/40 bg-accent/10 text-accent" },
  { key: "certifications", label: "Certifications", className: "border-[#8ab4ff]/40 bg-[#8ab4ff]/10 text-[#8ab4ff]" },
  { key: "achievements", label: "Achievements", className: "border-amber/40 bg-amber/10 text-amber" },
  { key: "volunteering", label: "Volunteering", className: "border-[#d49cff]/40 bg-[#d49cff]/10 text-[#d49cff]" }
] as const;

function SkillsIndex() {
  const skills = getSkillCounts();
  const groups = [...new Set(skills.map((skill) => skill.category))];

  return (
    <div className="container py-20">
      <SectionHeading eyebrow="Toolkit" title="Skills mapped to real work" />
      <p className="mb-8 max-w-2xl text-fog">
        Explore a skill to see the projects, certifications, achievements, and community work connected to it.
      </p>
      <div className="mb-12 flex flex-wrap gap-2" aria-label="Skill count legend">
        {countLabels.map((count) => (
          <span key={count.key} className={`rounded-full border px-3 py-1 text-xs ${count.className}`}>
            {count.label}
          </span>
        ))}
      </div>
      {groups.map((group) => (
        <section key={group} className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">{group}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills
              .filter((skill) => skill.category === group)
              .map((skill) => (
                <Link
                  key={skill.id}
                  to="/skills/$skill"
                  params={{ skill: skill.id }}
                  className="card flex flex-col gap-3 p-4 transition hover:-translate-y-0.5 hover:border-accent/60"
                >
                  <span className="font-semibold">{skill.name}</span>
                  <span className="flex flex-wrap gap-2">
                    {countLabels.map((count) =>
                      skill.counts[count.key] > 0 ? (
                        <span
                          key={count.key}
                          aria-label={`${count.label}: ${skill.counts[count.key]}`}
                          className={`rounded-full border px-2 py-1 text-xs ${count.className}`}
                        >
                          {skill.counts[count.key]}
                        </span>
                      ) : null
                    )}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
