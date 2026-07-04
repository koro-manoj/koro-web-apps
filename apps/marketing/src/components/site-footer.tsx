import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-brand-copper flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-display text-xl">Koro</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Unified operations for modern teams. Built for clarity, designed
              for scale.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><Link href="http://localhost:3000" className="hover:text-white transition-colors">Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8 opacity-30" />
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Koro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
