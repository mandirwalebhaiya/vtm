import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard    from "@/components/ui/ProductCard";
import Button         from "@/components/ui/Button";
import { getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Wooden Mandirs — Handcrafted Teak & Sheesham | Vaishno Temple",
  description:
    "Handcrafted wooden Pooja Mandirs in teak, sheesham, and mango wood. Traditional carving, rich finishes, custom sizes. Pan-India delivery. vaishnotemple.in",
  alternates: { canonical: "https://vaishnotemple.in/products/wooden" },
  keywords: ["wooden mandir", "teak mandir", "sheesham mandir", "wood temple", "carved mandir"],
};

const WOOD_TYPES = [
  {
    name:   "Burma Teak",
    emoji:  "🌿",
    desc:   "The gold standard of Indian woodwork. Dense grain, natural oils, and unmatched longevity.",
    traits: ["Durability: ★★★★★", "Grain: Fine", "Finish: Honey/Walnut"],
  },
  {
    name:   "Sheesham (Rosewood)",
    emoji:  "🍂",
    desc:   "India's most popular furniture wood. Dark, dramatic, and deeply traditional.",
    traits: ["Durability: ★★★★☆", "Grain: Bold", "Finish: Antique/Dark"],
  },
  {
    name:   "Mango Wood",
    emoji:  "🌳",
    desc:   "Eco-friendly, warm-toned, and budget-friendly. Great for modern minimal styles.",
    traits: ["Durability: ★★★☆☆", "Grain: Medium", "Finish: Natural/Light"],
  },
];

export default function WoodenPage() {
  const products = getProductsByCategory("wooden");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#fdfaf5] to-white">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f97d08]/6 blur-[80px] rounded-full pointer-events-none" />
        <div className="section-padding container-site relative z-10">
          <nav className="font-body text-xs text-[#8a7060] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#f97d08] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#f97d08] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#1a0e00]">Wooden Mandirs</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#f97d08] mb-4">🌿 Wooden Collection</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-[#1a0e00] leading-tight mb-5">
              Wooden Mandirs —<br />
              <span className="text-[#f97d08]">Warm. Timeless. Sacred.</span>
            </h1>
            <p className="font-body text-lg text-[#4a3520] leading-relaxed mb-8">
              Nothing captures the soul of Indian tradition like hand-carved wood. Our artisans
              spend weeks on each mandir, chiseling intricate jaali patterns and temple spires
              that carry generations of devotion in every grain.
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

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="section-padding container-site">
          <SectionHeading
            eyebrow={`${products.length} Designs Available`}
            title="Wooden Mandir Designs"
            subtitle="Handcrafted to order. Each mandir takes 3–6 weeks to complete — because great craftsmanship cannot be rushed."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Wood types comparison */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="section-padding container-site">
          <SectionHeading
            eyebrow="Choose Your Wood"
            title="Which Wood is Right for You?"
            subtitle="Each wood brings its own character. Our team will help you choose based on your home, budget, and style."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {WOOD_TYPES.map((w) => (
              <div key={w.name} className="bg-white border border-stone-100 rounded-sm p-8 hover:border-[#f97d08]/30 hover:shadow-[0_8px_36px_rgba(249,125,8,0.08)] transition-all duration-400 text-center">
                <div className="text-5xl mb-4">{w.emoji}</div>
                <h3 className="font-display text-2xl font-semibold text-[#1a0e00] mb-3">{w.name}</h3>
                <p className="font-body text-sm text-[#8a7060] leading-relaxed mb-5">{w.desc}</p>
                <div className="space-y-2 border-t border-stone-100 pt-5">
                  {w.traits.map((t) => (
                    <p key={t} className="font-body text-xs text-[#4a3520]">{t}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship highlight */}
      <section className="py-20 bg-white">
        <div className="section-padding container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#f97d08] mb-4">Our Craft</p>
              <h2 className="font-display text-4xl font-semibold text-[#1a0e00] leading-tight mb-5">
                Every Mandir is a<br />Work of Art
              </h2>
              <p className="font-body text-base text-[#4a3520] leading-relaxed mb-5">
                Our karigar (craftsmen) are third-generation artisans from Saharanpur and Jodhpur
                — cities legendary for their woodwork. They use traditional tools and time-honoured
                techniques to create mandirs that could sit in a museum.
              </p>
              <div className="space-y-4">
                {["Hand-chiselled jaali panels with 200+ hours of work per piece",
                  "Dovetail joinery — no nails, no screws, no compromise",
                  "Linseed oil treatment for natural preservation"].map((pt) => (
                  <div key={pt} className="flex gap-3 items-start">
                    <span className="text-[#f97d08] mt-0.5 flex-shrink-0">✦</span>
                    <p className="font-body text-sm text-[#4a3520]">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["🔨","🪚","✏️","🛕"].map((icon, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-[#fff8f0] to-[#fdfaf5] rounded-sm flex items-center justify-center border border-[#f97d08]/10">
                  <span className="text-5xl">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a0e00] text-white text-center">
        <div className="section-padding container-site">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Commission Your Wooden Mandir
          </h2>
          <p className="font-body text-base text-white/60 max-w-md mx-auto mb-8">
            A wooden mandir is a family heirloom. Let&apos;s create yours together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">Start Your Order</Button>
            <Button href="/products" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#1a0e00]">
              Compare All Mandirs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
