import { createFileRoute, Link } from "@tanstack/react-router";
import { SkillChip } from "@/components/portfolio/skills";
import { renderMarkdown } from "@/lib/markdown";
import { allProjects, formatDate } from "@/lib/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = allProjects.find((candidate) => candidate.id === params.slug);
    const title = project ? `${project.title} — Khaled Hawwas` : "Project — Khaled Hawwas";
    const description = project?.summary ?? "Project case study.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  },
  component: ProjectDetail
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = allProjects.find((candidate) => candidate.id === slug);
  if (!project) throw new Error(`Project not found: ${slug}`);
  const outcome = project.outcome;

  return (
    <article className="container max-w-4xl py-20">
      <Link className="text-sm text-accent" to="/projects">
        ← All projects
      </Link>
      <p className="eyebrow mt-12 mb-4">
        {project.type} · {project.role}
      </p>
      <h1 className="text-5xl font-bold tracking-tight">{project.title}</h1>
      {project.date && <p className="mt-3 text-sm text-mist">{formatDate(project.date, { month: "long", year: "numeric" })}</p>}
      <p className="mt-6 text-xl leading-8 text-fog">{project.summary}</p>
      <div className="my-10 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <SkillChip key={skill} skill={skill} />
        ))}
      </div>
      {outcome && (
        <div className="card mb-10 p-6">
          <p className="eyebrow mb-2">Outcome</p>
          <p>{outcome}</p>
        </div>
      )}
      <div className="max-w-none text-navy-soft">{renderMarkdown(project.body)}</div>
      {project.gallery.length > 0 && (
        <section className="mt-12">
          <p className="eyebrow mb-5">Screenshots</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((image) => (
              <img
                key={image}
                className="h-64 w-full rounded-xl border border-line-soft object-cover"
                src={image}
                alt={`${project.title} screenshot`}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}
      <div className="mt-12 flex gap-3">
        {project.repo && (
          <a className="chip" href={project.repo} target="_blank" rel="noreferrer">
            View repository ↗
          </a>
        )}
        {project.link && (
          <a className="chip" href={project.link} target="_blank" rel="noreferrer">
            Live project ↗
          </a>
        )}
      </div>
      {project.todo.length > 0 && (
        <aside className="mt-12 rounded-xl border border-amber/30 bg-amber/5 p-5">
          <p className="eyebrow mb-2 text-amber">Portfolio TODO</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-[#c8b99f]">
            {project.todo.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}
