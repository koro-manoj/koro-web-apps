import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-navy/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-brand-copper flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="font-display text-xl text-brand-navy tracking-tight">
            Koro
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-slate hover:text-brand-copper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="http://localhost:3000/login"
            className="hidden sm:inline text-sm font-medium text-brand-slate hover:text-brand-navy transition-colors"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-brand-navy rounded-lg hover:bg-brand-navy/90 transition-colors"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
