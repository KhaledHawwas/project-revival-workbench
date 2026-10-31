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
  const featured = items.filter((item) => item.collection === "projects" && item.data["featured"] === true);
  const skillCounts = getSkillCounts();
  const latestAchievements = items.filter((item) => item.collection === "achievements").slice(0, 2);

  return (
    <>
      <section className="grid-bg overflow-hidden border-b border-line">
        <div className="container grid min-h-[600px] items-center gap-14 py-24 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="term-line mb-6">
              <span className="text-accent">$</span> <span className="text-mist">whoami</span>
            </p>
            <h1 className="font-mono text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              Mobile products
              <br />
              <span className="text-accent">built to last</span>
              <span className="cursor-blink"></span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-fog">
              {siteConfig.tagline} I turn ideas into reliable, accessible Android products that feel simple to use.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-md bg-accent px-5 py-3 font-mono text-sm font-bold text-on-accent transition-all hover:bg-accent-strong hover:shadow-[0_0_30px_-8px_rgba(74,222,128,0.6)]"
              >
                {labels.en.viewWork}
              </Link>
              <Link to="/contact" className="chip px-5 py-3 !text-sm">
                {labels.en.contactMe}
              </Link>
              <a className="chip px-5 py-3 !text-sm" href="/cv.md" download>
                {labels.en.download}
              </a>
            </div>
            <div className="mt-10 flex gap-6 font-mono text-sm text-mist">
              <a className="link-accent" href={siteConfig.github} target="_blank" rel="noreferrer">
                github ↗
              </a>
              <a className="link-accent" href={siteConfig.leetcode} target="_blank" rel="noreferrer">
                leetcode ↗
              </a>
              <a className="link-accent" href={siteConfig.codeforces} target="_blank" rel="noreferrer">
                codeforces ↗
              </a>
            </div>
          </div>

          <div className="term-window">
            <div className="term-titlebar">
              <span className="term-dot"></span>
              <span className="term-dot"></span>
              <span className="term-dot term-dot-active"></span>
              <span className="ml-2">khaled@dev — zsh</span>
            </div>
            <div className="space-y-3 p-6 sm:p-7">
              <p className="term-line term-cmd">whoami</p>
              <p className="term-line term-out">khaled.hawwas — android &amp; kotlin developer</p>
              <p className="term-line term-dim">studying CS @ Damietta University · 2023—2027</p>

              <p className="term-line term-cmd pt-2">cat ./focus.txt</p>
              <p className="term-line term-out">
                “The best apps are not the ones with the most features. They are the ones that
                make the right thing feel effortless.”
              </p>

              <p className="term-line term-cmd pt-2">ls ./toolkit | top 6</p>
              <p className="term-line term-out text-accent">
                kotlin · compose · architecture · ktor · room · kmp
              </p>

              <p className="term-line term-cmd pt-2">./status --availability</p>
              <p className="term-line term-out">
                <span className="text-accent">●</span> available for freelance work — replies &lt; 24h
              </p>

              <p className="term-line term-dim pt-2 cursor-blink"></p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <SectionHeading eyebrow={labels.en.featured} title="A few things I’ve built" href="/projects" action={labels.en.viewAll} />
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="container py-24">
          <SectionHeading eyebrow={labels.en.allSkills} title="Tools for turning ideas into products" href="/skills" action={labels.en.viewAll} />
          <div className="flex flex-wrap gap-2.5">
            {skillCounts.slice(0, 18).map((skill) => (
              <SkillChip key={skill.id} skill={skill.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <SectionHeading eyebrow={labels.en.latest} title="Proof of continuous learning" href="/achievements" action={labels.en.viewAll} />
        <div className="grid gap-5 md:grid-cols-2">
          {latestAchievements.map((item) => (
            <div key={item.id}>
              {item.date && (
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-mist">
                  {formatDate(item.date, { month: "long", year: "numeric" })}
                </p>
              )}
              <ItemCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
