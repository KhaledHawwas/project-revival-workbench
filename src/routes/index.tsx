import { createFileRoute, Link } from "@tanstack/react-router";
import { ItemCard } from "@/components/portfolio/item-card";
import { SectionHeading, SkillChip } from "@/components/portfolio/skills";
import { getAllItems, getSkillCounts, formatDate } from "@/lib/portfolio";
import { labels, siteConfig } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — ${siteConfig.role}` },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: `${siteConfig.name} — ${siteConfig.role}` },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: Index
});

function Index() {
  const items = getAllItems();
  const featured = items.filter((item) => item.collection === "projects" && item.data.featured);
  const skillCounts = getSkillCounts();
  const latestAchievements = items.filter((item) => item.collection === "achievements").slice(0, 2);

  return (
    <>
      <section className="grid-bg overflow-hidden border-b border-line">
        <div className="container grid min-h-[580px] items-center gap-12 py-24 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="eyebrow mb-5">{labels.en.available}</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              Mobile products
              <br />
              <span className="text-accent">built to last.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-fog">
              {siteConfig.tagline} I turn ideas into reliable, accessible Android products that feel simple to use.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-on-accent hover:bg-accent-strong"
              >
                {labels.en.viewWork}
              </Link>
              <Link to="/contact" className="chip px-5 py-3">
                {labels.en.contactMe}
              </Link>
              <a className="chip px-5 py-3" href="/cv.md" download>
                {labels.en.download}
              </a>
            </div>
            <div className="mt-10 flex gap-6 text-sm text-mist">
              <a className="hover:text-accent" href={siteConfig.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className="hover:text-accent" href={siteConfig.leetcode} target="_blank" rel="noreferrer">
                LeetCode ↗
              </a>
              <a className="hover:text-accent" href={siteConfig.codeforces} target="_blank" rel="noreferrer">
                Codeforces ↗
              </a>
            </div>
          </div>
          <div className="card relative p-7">
            <p className="eyebrow mb-8">01 / Profile</p>
            <p className="text-2xl leading-relaxed">
              “The best apps are not the ones with the most features. They are the ones that make the right thing feel
              effortless.”
            </p>
            <div className="mt-10 border-t border-line-soft pt-5 text-sm text-mist">
              <p>Currently studying Computer Science</p>
              <p className="mt-2">Damietta University · 2023—2027</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-24">
        <SectionHeading eyebrow={`01 / ${labels.en.featured}`} title="A few things I’ve built" href="/projects" action={labels.en.viewAll} />
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="border-y border-line bg-panel">
        <div className="container py-24">
          <SectionHeading eyebrow={`02 / ${labels.en.allSkills}`} title="Tools for turning ideas into products" href="/skills" action={labels.en.viewAll} />
          <div className="flex flex-wrap gap-3">
            {skillCounts.slice(0, 15).map((skill) => (
              <SkillChip key={skill.id} skill={skill.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="container py-24">
        <SectionHeading eyebrow={`03 / ${labels.en.latest}`} title="Proof of continuous learning" href="/timeline" action={labels.en.viewAll} />
        <div className="grid gap-5 md:grid-cols-2">
          {latestAchievements.map((item) => (
            <ItemCard key={`${item.collection}-${item.id}`} item={{ ...item, date: item.date }} />
          ))}
        </div>
      </section>
      {/* formatDate is used by ItemCard; keep the helper referenced for the home date formatting parity */}
      {formatDate(featured[0]?.date)}
    </>
  );
}
