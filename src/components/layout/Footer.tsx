import Link from "next/link";
import Button from "@/components/ui/Button";

const PRODUCT_LINKS = [
  { label: "Corian Mandirs",    href: "/products/corian" },
  { label: "Wooden Mandirs",    href: "/products/wooden" },
  { label: "Marble Mandirs",    href: "/products/marble" },
  { label: "Custom Designs",    href: "/products/custom" },
  { label: "Office Mandirs",    href: "/products/office" },
];

const COMPANY_LINKS = [
  { label: "About Us",     href: "/about" },
  { label: "Gallery",      href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0e00] text-white">
      {/* Top newsletter band */}
      <div className="border-b border-white/10">
        <div className="section-padding container-site py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#f97d08] mb-1">
              Stay Connected
            </p>
            <h3 className="font-display text-2xl font-semibold">
              Get exclusive designs &amp; offers
            </h3>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border border-white/20 rounded-sm px-4 py-3 font-body text-sm text-white placeholder-white/40 flex-1 md:w-64 focus:outline-none focus:border-[#f97d08] transition-colors"
            />
            <Button variant="primary" size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-padding container-site py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-5">
            <span className="text-2xl">🛕</span>
            <div>
              <span className="font-display text-xl font-semibold block">Vaishno Temple</span>
              <span className="font-body text-[10px] text-[#f97d08] tracking-[0.2em] uppercase">vaishnotemple.in</span>
            </div>
          </Link>
          <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
            Crafting sacred spaces with devotion and artistry since 2005. Trusted by 10,000+ families across India.
          </p>
          {/* Social */}
          <div className="flex gap-4">
            {["facebook","instagram","youtube","whatsapp"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#f97d08] hover:bg-[#f97d08]/10 flex items-center justify-center transition-all duration-300"
                aria-label={s}
              >
                <span className="text-xs text-white/60 hover:text-[#f97d08] capitalize">{s[0].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-body text-xs font-500 tracking-[0.2em] uppercase text-[#f97d08] mb-5">
            Products
          </h4>
          <ul className="space-y-3">
            {PRODUCT_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-body text-sm text-white/60 hover:text-white animated-underline transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-body text-xs font-500 tracking-[0.2em] uppercase text-[#f97d08] mb-5">
            Company
          </h4>
          <ul className="space-y-3">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-body text-sm text-white/60 hover:text-white animated-underline transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body text-xs font-500 tracking-[0.2em] uppercase text-[#f97d08] mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4 font-body text-sm text-white/60">
            <li className="flex gap-3 items-start">
              <span className="text-base mt-0.5">📍</span>
              <span>Ground Floor, Shop No.4, Plot No. 12, Block A-1, Whs Kirti Nagar Industrial Area, West Delhi-110015</span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-base">📞</span>
              <a href="tel:+918826858845" className="hover:text-white transition-colors">
                +91-8826858845
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-base">✉️</span>
              <a href="mailto:info@vaishnotemple.in" className="hover:text-white transition-colors">
                info@vaishnotemple.in
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-base">🕐</span>
              <span>Mon–Sat, 10am – 7pm IST</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-padding container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-white/30">
          <p>© {new Date().getFullYear()} Vaishno Temple. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms"          className="hover:text-white/60 transition-colors">Terms of Use</Link>
            <Link href="/sitemap.xml"    className="hover:text-white/60 transition-colors">Sitemap</Link>
          </div>
          <p className="font-devanagari text-white/20">🕉 हर हर महादेव 🕉</p>
        </div>
      </div>
    </footer>
  );
}
