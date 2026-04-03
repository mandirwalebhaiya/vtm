import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard    from "@/components/ui/ProductCard";
import Button         from "@/components/ui/Button";
import { getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Corian Mandirs — Premium White Pooja Mandir | Vaishno Temple",
  description:
    "Buy premium Corian Pooja Mandirs online. Non-porous, moisture-resistant, easy to clean. Custom sizes and designs. Free installation. vaishnotemple.in",
  alternates: { canonical: "https://vaishnotemple.in/products/corian" },
  keywords: ["corian mandir", "corian pooja mandir", "white mandir", "corian temple"],
};

const WHY_CORIAN = [
  { icon: "💧", title: "Moisture-Resistant",   desc: "Non-porous surface — no stains from water, milk, or haldi." },
  { icon: "✨", title: "Pristine White Forever", desc: "UV-stable material that doesn't yellow over time." },
  { icon: "🔧", title: "Easy to Repair",         desc: "Any minor scratch can be buffed out on-site. Truly timeless." },
  { icon: "🌡️", title: "Heat Tolerant",           desc: "Safe for diyas and havan — built to handle temple rituals." },
  { icon: "🎨", title: "Any Shape & Size",        desc: "Corian can be thermoformed into curves no wood can achieve." },
  { icon: "🧽", title: "Effortless Cleaning",     desc: "Wipe clean with a damp cloth. No special care needed." },
];

export default function CorianPage() {
  const products = getProductsByCategory("corian");

  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#fff8f0] to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#f97d08]/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="section-padding container-site relative z-10">
          <nav className="font-body text-xs text-[#8a7060] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#f97d08] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#f97d08] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#1a0e00]">Corian Mandirs</span>
          </nav>

          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#f97d08] mb-4">🤍 Corian Collection</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-[#1a0e00] leading-tight mb-5">
              Corian Mandirs —<br />
              <span className="text-[#f97d08]">Pure. Pristine. Permanent.</span>
            </h1>
            <p className="font-body text-lg text-[#4a3520] leading-relaxed mb-8">
              Corian is the material of choice for discerning homeowners who want a mandir
              that looks immaculate on day one and remains that way for decades. Non-porous,
              moisture-proof, and endlessly elegant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">Get Free Quote</Button>
              <Button href="http://wa.me/918826858845" variant="outline" size="lg" external>
                💬 WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 bg-white">
        <div className="section-padding container-site">
          <SectionHeading
            eyebrow={`${products.length} Designs Available`}
            title="Corian Mandir Designs"
            subtitle="All designs available in custom sizes. Free home visit and measurement included."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Corian */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="section-padding container-site">
          <SectionHeading
            eyebrow="Material Benefits"
            title="Why Choose Corian?"
            subtitle="Corian by DuPont is the world's leading solid surface material — used in hospitals, airports, and luxury homes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CORIAN.map((f) => (
              <div key={f.title} className="bg-white border border-stone-100 rounded-sm p-6 hover:border-[#f97d08]/30 hover:shadow-[0_6px_30px_rgba(249,125,8,0.07)] transition-all duration-300">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[#1a0e00] mb-1">{f.title}</h3>
                <p className="font-body text-sm text-[#8a7060] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-white">
        <div className="section-padding container-site">
          <SectionHeading eyebrow="How It Works" title="From Inquiry to Installation" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", icon: "📞", label: "Call or WhatsApp us" },
              { step: "02", icon: "🏠", label: "Free home visit & measurement" },
              { step: "03", icon: "✏️", label: "3D design preview shared" },
              { step: "04", icon: "🔧", label: "Delivery & installation" },
            ].map((s) => (
              <div key={s.step} className="text-center relative">
                <p className="font-display text-5xl font-semibold text-[#f97d08]/10 mb-2">{s.step}</p>
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="font-body text-sm text-[#4a3520] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1a0e00] text-white text-center">
        <div className="section-padding container-site">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Ready to Order Your Corian Mandir?
          </h2>
          <p className="font-body text-base text-white/60 max-w-md mx-auto mb-8">
            Get a free consultation, measurement, and 3D design — no commitment needed.
          </p>
          <Button href="/contact" size="lg">Book Free Consultation</Button>
        </div>
      </section>
    </>
  );
}
