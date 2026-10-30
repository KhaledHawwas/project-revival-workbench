import { labels, siteConfig } from "@/data/site";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: labels.en.home },
  { to: "/projects", label: labels.en.work },
  { to: "/skills", label: labels.en.skills },
  { to: "/timeline", label: labels.en.journey },
  { to: "/search", label: "Search" },
  { to: "/contact", label: labels.en.contact }
] as const;

export function Header() {
  const toggleLanguage = () => {
    const html = document.documentElement;
    const arabic = html.lang === "ar";
    html.lang = arabic ? "en" : "ar";
    html.dir = arabic ? "ltr" : "rtl";
  };

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-base/90 backdrop-blur">
      <div className="container flex h-18 items-center justify-between gap-5">
        <Link to="/" className="text-lg font-bold tracking-tight">
          <span className="text-accent">kh.</span>hawwas
        </Link>
        <nav className="hidden gap-6 text-sm text-navy-soft md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
        <button type="button" onClick={toggleLanguage} className="chip focus-ring" aria-label="Switch language">
          عربي
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line py-10">
      <div className="container flex flex-col gap-3 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with Kotlin energy & TanStack.
        </p>
        <div className="flex gap-4">
          <a className="hover:text-accent" href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-accent" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
