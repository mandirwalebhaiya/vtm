import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard    from "@/components/ui/ProductCard";
import Button         from "@/components/ui/Button";
import { PRODUCTS, CATEGORIES_META } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Mandirs — Corian, Wooden & Marble | Vaishno Temple",
  description:
    "Browse our complete collection of handcrafted Corian, wooden, and marble Pooja Mandirs. Custom sizes, free installation, pan-India delivery.",
  alternates: { canonical: "https://vaishnotemple.in/products" },
};

const CATEGORY_FILTERS = [
  { key: "all",    label: "All Products" },
  { key: "corian", label: "Corian" },
  { key: "wooden", label: "Wooden" },
  { key: "marble", label: "Marble" },
  { key: "custom", label: "Custom" },
] as const;

export default function ProductsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 bg-[#fdfaf5] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97d08]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="section-padding container-site relative z-10">
          {/* Breadcrumb */}
          <nav className="font-body text-xs text-[#8a7060] mb-8 flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#f97d08] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1a0e00]">Products</span>
          </nav>

          <SectionHeading
            eyebrow="Our Collection"
            title="Customised Pooja Mandirs for Every Home"
            subtitle="From compact apartment mandirs to grand floor-standing pieces — every design built with devotion and precision."
            centered={false}
          />

          {/* Category quick links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {Object.entries(CATEGORIES_META).map(([key, cat]) => (
              <Link
                key={key}
                href={`/products/${key}`}
                className="inline-flex items-center gap-2 border border-stone-200 hover:border-[#f97d08] hover:bg-[#fff8f0] text-[#4a3520] hover:text-[#f97d08] font-body text-sm px-4 py-2 rounded-full transition-all duration-300"
              >
                <span>{cat.emoji}</span>
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections */}
      {(["corian", "wooden", "marble", "custom"] as const).map((cat) => {
        const meta     = CATEGORIES_META[cat];
        const products = PRODUCTS.filter((p) => p.category === cat);
        return (
          <section key={cat} className="py-16 md:py-20 border-t border-stone-100" id={cat}>
            <div className="section-padding container-site">
              {/* Category header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-[#f97d08] mb-2">
                    {meta.emoji} {meta.title}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1a0e00]">
                    {meta.title}
                  </h2>
                  <p className="font-body text-sm text-[#8a7060] mt-1 max-w-md">
                    {meta.description}
                  </p>
                </div>
                <Button href={`/products/${cat}`} variant="outline" size="sm">
                  View All {meta.title} →
                </Button>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
                {/* "View All" card */}
                <Link
                  href={`/products/${cat}`}
                  className="group border-2 border-dashed border-stone-200 hover:border-[#f97d08]/40 rounded-sm flex flex-col items-center justify-center gap-3 p-8 text-center transition-all duration-300 min-h-[280px]"
                >
                  <span className="text-4xl text-[#f97d08]/30 group-hover:text-[#f97d08]/60 transition-colors">{meta.emoji}</span>
                  <p className="font-body text-sm text-[#8a7060] group-hover:text-[#f97d08] transition-colors">
                    See all {meta.title}
                  </p>
                  <svg className="w-5 h-5 text-[#f97d08]/40 group-hover:text-[#f97d08] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="py-16 bg-[#fff8f0] border-t border-[#f97d08]/10">
        <div className="section-padding container-site text-center">
          <span className="text-4xl block mb-4">🛕</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1a0e00] mb-3">
            Can&apos;t find the right design?
          </h2>
          <p className="font-body text-base text-[#8a7060] max-w-md mx-auto mb-8">
            Every mandir can be customised. Share your vision and we&apos;ll craft it — any size, material, or style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/products/custom">Design Your Own Mandir</Button>
            <Button href="/contact" variant="outline">Talk to Our Team</Button>
          </div>
        </div>
      </section>
    </>
  );
}
