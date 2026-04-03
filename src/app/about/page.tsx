import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Vaishno Temple — Our Story & Craftsmanship",
  description:
    "Learn about Vaishno Temple — founded in 2015, crafting premium Corian and wooden Pooja Mandirs for 18+ years. Meet our master artisans.",
  alternates: { canonical: "https://vaishnotemple.in/about" },
};

const MILESTONES = [
  { year: "2015", title: "Founded in Delhi",           desc: "Started with 3 karigar and a workshop in Kirti Nagar, Delhi." },
  { year: "2018", title: "Introduced Corian Mandirs",  desc: "First in North India to craft Pooja Mandirs from premium Corian." },
  { year: "2020", title: "Pan-India Delivery Launched", desc: "Expanded to 50+ cities with dedicated installation teams." },
  { year: "2022", title: "10,000 Families Milestone",  desc: "Crossed 10,000 happy families — from Srinagar to Kanyakumari." },
  { year: "2024", title: "Online Design Studio",       desc: "Launched our digital design preview tool — see your mandir before it's built." },
];

const TEAM = [
  { name: "Ramesh Gupta",      role: "Founder & Head Designer",    emoji: "👨‍🎨", city: "Delhi" },
  { name: "Sunita Gupta",      role: "Operations & Customer Care", emoji: "👩‍💼", city: "Delhi" },
  { name: "Arjun Vishwakarma", role: "Master Craftsman — Wood",    emoji: "🔨", city: "Saharanpur" },
  { name: "Mohan Lal",         role: "Master Craftsman — Corian",  emoji: "✨", city: "Delhi" },
];

const VALUES = [
  { icon: "🙏", title: "Devotion in Every Detail",   desc: "We don't just build mandirs — we build sacred spaces. Every dimension, curve, and finish is chosen with reverence." },
  { icon: "🤝", title: "Honest Craftsmanship",        desc: "No shortcuts. No MDF disguised as solid wood. We use exactly what we promise — and stand behind it for 5 years." },
  { icon: "👨‍👩‍👧", title: "Family-First Approach",     desc: "Our team visits your home, understands your family's needs, and designs something that truly belongs there." },
  { icon: "🌿", title: "Sustainable Sourcing",        desc: "We source wood from FSC-certified forests and use water-based finishes that are safe for your family and the environment." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1a0e00] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] border border-white/5 rounded-full" />
          <div className="absolute w-[400px] h-[400px] border border-white/8 rounded-full" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f97d08]/8 blur-[90px] rounded-full pointer-events-none" />

        <div className="section-padding container-site relative z-10">
          <nav className="font-body text-xs text-white/40 mb-12 flex items-center gap-2">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">About Us</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#f97d08] mb-5">Est. 2015 — Corian Mandir Shop in Kirti Nagar New Delhi, India</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
              Built on Devotion.<br />
              <span className="text-[#f97d08]">Crafted with Soul.</span>
            </h1>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-10">
              For 10 years, Vaishno Temple has been crafting sacred spaces for Indian
              families across the country. We are not a furniture company — we are
              custodians of a tradition as old as India itself.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { n: "10+",    l: "Years" },
                { n: "7,000+",l: "Families" },
                { n: "50+",    l: "Cities" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl font-semibold text-[#f97d08]">{s.n}</p>
                  <p className="font-body text-xs text-white/40 tracking-wider mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 bg-white">
        <div className="section-padding container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#f97d08] mb-4">Our Story</p>
              <h2 className="font-display text-4xl font-semibold text-[#1a0e00] leading-tight mb-6">
                A Workshop, a Dream,<br />and a Deity
              </h2>
              <div className="space-y-4 font-body text-base text-[#4a3520] leading-relaxed">
                <p>
                  In 2015, Sandep Sharma — a carpenter from West Delhi — had a simple idea:
                  every Indian home deserves a mandir that reflects the family's faith and
                  aesthetic. Not a cheap plywood box from the market, but something worthy of
                  the divine.
                </p>
                <p>
                  He started with three karigar, a small workshop in Sadar Bazar, and the
                  knowledge passed down through three generations of woodworkers. Within five
                  years, Vaishno Temple had become the most trusted name in custom mandirs
                  across Delhi NCR.
                </p>
                <p>
                  In 2018, we were the first in North India to craft Pooja Mandirs from Corian —
                  a material beloved for its purity, durability, and that luminous white finish
                  that stays spotless for decades. Today, we ship to 50+ cities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["🏗️","🔨","🛕","🙏"].map((e, i) => (
                <div key={i} className={`${i === 0 ? "col-span-2" : ""} bg-gradient-to-br from-[#fff8f0] to-[#fdfaf5] rounded-sm border border-[#f97d08]/10 flex items-center justify-center py-12`}>
                  <span className="text-6xl">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="section-padding container-site">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white border border-stone-100 rounded-sm p-8 hover:border-[#f97d08]/30 hover:shadow-[0_6px_30px_rgba(249,125,8,0.07)] transition-all duration-300">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-semibold text-[#1a0e00] mb-2">{v.title}</h3>
                <p className="font-body text-sm text-[#8a7060] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="section-padding container-site">
          <SectionHeading eyebrow="18 Years of Service" title="Our Journey" />
          <div className="max-w-2xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#f97d08]/15" />
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="w-32 flex-shrink-0 text-right">
                    <span className="font-display text-xl font-semibold text-[#f97d08]">{m.year}</span>
                  </div>
                  <div className="relative flex-1 pl-8">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#f97d08] border-2 border-white shadow-[0_0_0_2px_rgba(249,125,8,0.3)]" />
                    <h3 className="font-display text-lg font-semibold text-[#1a0e00] mb-1">{m.title}</h3>
                    <p className="font-body text-sm text-[#8a7060]">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="section-padding container-site">
          <SectionHeading eyebrow="The People Behind the Mandirs" title="Meet Our Team" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {TEAM.map((t) => (
              <div key={t.name} className="text-center bg-white border border-stone-100 rounded-sm p-6 hover:border-[#f97d08]/30 transition-all duration-300">
                <div className="w-16 h-16 bg-[#fff8f0] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {t.emoji}
                </div>
                <h3 className="font-display text-base font-semibold text-[#1a0e00] leading-snug mb-1">{t.name}</h3>
                <p className="font-body text-xs text-[#f97d08] mb-1">{t.role}</p>
                <p className="font-body text-xs text-[#8a7060]">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a0e00] text-white text-center">
        <div className="section-padding container-site">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Let&apos;s Create Your Sacred Space
          </h2>
          <p className="font-body text-base text-white/60 max-w-md mx-auto mb-8">
            Join 10,000+ families who trust Vaishno Temple to craft their home mandir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">Get Free Consultation</Button>
            <Button href="/products" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#1a0e00]">
              Browse Mandirs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
