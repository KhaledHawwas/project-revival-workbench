<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Architecture

- Portfolio content (skills, projects, certifications, achievements, volunteering) lives as typed data in `src/data/` — it is a static site with no backend; edit the data files to change content.
- Skill-to-item mapping helpers live in `src/lib/portfolio.ts`; use them instead of filtering inline.
- The dark navy/mint design tokens are defined in `src/styles.css` (pf-* variables); components must use semantic classes like `text-accent`, `bg-surface`, never raw hex values.
