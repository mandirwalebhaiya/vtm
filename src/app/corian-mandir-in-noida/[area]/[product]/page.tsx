import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { noidaAreas } from "@/data/noidaAreas";
import { products, getProductBySlug } from "@/data/products";

// ─── Types ───────────────────────────────────────────────────────────────────
type Props = {
  params: Promise<{
    area: string;
    product: string;
  }>;
};

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area, product: productSlug } = await params;

  const areaData = noidaAreas.find((a) => a.slug === area);       // ✅ no async in find
  const product = getProductBySlug(productSlug);

  if (!areaData || !product) return {};

  return {
    title: `${product.name} in ${areaData.name} | Vaishno Temple noida`,
    description: `Buy ${product.name} in ${areaData.name} noida. ${product.price}. ${product.description.slice(0, 120)}... Free home visit available.`,
    openGraph: {
      title: `${product.name} in ${areaData.name}`,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600 }],
    },
  };
}

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const params: { area: string; product: string }[] = [];
  for (const area of noidaAreas) {
    for (const product of products) {
      params.push({ area: area.slug, product: product.slug });
    }
  }
  return params;
}

// ─── Product Schema ───────────────────────────────────────────────────────────
function ProductSchema({
  product,
  areaLabel,
}: {
  product: NonNullable<ReturnType<typeof getProductBySlug>>;
  areaLabel: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: `${product.name} in ${areaLabel}`,
          description: product.description,
          image: `https://www.vaishnotemple.com${product.image}`,
          brand: { "@type": "Brand", name: "Vaishno Temple" },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: product.priceMin,
            highPrice: product.priceMax,
            priceCurrency: "INR",
            availability: product.inStock
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
            seller: {
              "@type": "LocalBusiness",
              name: "Vaishno Temple",
              address: {
                "@type": "PostalAddress",
                addressLocality: areaLabel,
                addressRegion: "noida",
                addressCountry: "IN",
              },
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviews,
            bestRating: 5,
            worstRating: 1,
          },
          additionalProperty: product.features.map((f) => ({
            "@type": "PropertyValue",
            name: "Feature",
            value: f,
          })),
        }),
      }}
    />
  );
}

// ─── Local Business Schema ────────────────────────────────────────────────────
function LocalBusinessSchema({ areaLabel }: { areaLabel: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vaishno Temple – Corian Mandir Manufacturer",
          description: `Corian mandir manufacturer in ${areaLabel}, noida.`,
          url: "https://www.vaishnotemple.com",
          telephone: "+918826858845",
          address: {
            "@type": "PostalAddress",
            addressLocality: areaLabel,
            addressRegion: "noida",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1200",
          },
          priceRange: "₹₹",
        }),
      }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProductPage({ params }: Props) {
  const { area, product: productSlug } = await params;    // ✅ await once, reuse

  const areaData = noidaAreas.find((a) => a.slug === area);    // ✅ no async in find
  const product = getProductBySlug(productSlug);

  if (!areaData || !product) notFound();

  const otherProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <ProductSchema product={product} areaLabel={areaData.name} />
      <LocalBusinessSchema areaLabel={areaData.name} />

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-[#8a7060] mb-8">
          <Link href="/" className="hover:text-[#f97d08] transition-colors">Home</Link>
          <span className="mx-2 text-gray-300">›</span>
          <Link href="/corian-mandir-in-noida" className="hover:text-[#f97d08] transition-colors">noida</Link>
          <span className="mx-2 text-gray-300">›</span>
          <Link
            href={`/corian-mandir-in-noida/${areaData.slug}`}
            className="hover:text-[#f97d08] transition-colors"
          >
            {areaData.name}
          </Link>
          <span className="mx-2 text-gray-300">›</span>
          <span className="text-[#1a0e00]">{product.shortName}</span>
        </nav>

        {/* ── Product Hero ── */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">

          {/* Image */}
          <div className="relative w-full h-[710px] rounded-2xl overflow-hidden bg-[#f5f0eb] border border-[#e8e4df]">
            {product.badge && (
              <span className="absolute top-3 left-3 z-10 bg-[#c8621a] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <Image
              src={product.image}
              alt={`${product.name} in ${areaData.name} noida`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4">

            <span className="text-[11px] uppercase tracking-widest text-[#c8621a] font-semibold">
              {product.category}
            </span>

            <h1 className="font-display text-3xl font-bold text-[#1a0e00] leading-snug">
              {product.name}{" "}
              <span className="text-[#c8621a]">in {areaData.name}, Noida</span>
            </h1>

            <div className="flex items-center gap-2">
              <span className="text-[#f59e0b] tracking-widest text-base">
                {"★".repeat(Math.floor(product.rating))}
              </span>
              <span className="text-sm text-[#8a7060]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-bold text-[#c8621a]">{product.price}</p>

            <p className="text-[#8a7060] leading-relaxed text-sm">{product.description} we have beautifully installed this Corian Mandir in {areaData.name} Noida.</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 bg-[#fdf3eb] border border-[#f5d8b8] rounded-2xl p-4">
              {[
                { label: "Material", value: product.material },
                { label: "Finish", value: product.finish },
                { label: "Delivery", value: `${product.deliveryDays} days` },
                { label: "Warranty", value: product.warranty },
              ].map((spec) => (
                <div key={spec.label} className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#999]">
                    {spec.label}
                  </span>
                  <span className="text-sm font-semibold text-[#1a0e00]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Sizes */}
            <div>
              <p className="text-xs font-semibold text-[#666] mb-2">Available Sizes</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full border border-[#e0dbd4] bg-white text-[#333]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <p className="text-xs font-semibold text-[#666] mb-2">Colors</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-3 py-1 rounded-full border border-[#e0dbd4] bg-white text-[#333]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mt-2">
              <a
                href="tel:+918826858845"
                className="flex-1 text-center bg-[#c8621a] text-white rounded-lg py-3 text-sm font-bold hover:bg-[#b5561a] transition-colors"
              >
                📞 Call for Price
              </a>
              <a
                href={`https://wa.me/918826858845?text=Hi, I'm interested in ${product.name} in ${areaData.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-[#f5d8b8] text-[#c8621a] rounded-lg py-3 text-sm font-bold bg-white hover:bg-[#fdf3eb] transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>

            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-2">
              🏠 Free home visit available in {areaData.name}
            </p>

          </div>
        </div>

        {/* ── Features ── */}
        <section className="bg-white border border-[#e8e4df] rounded-2xl p-8 mb-8">
          <h2 className="text-lg font-semibold text-[#1a0e00] mb-5">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.features.map((f) => (
              <div
                key={f}
                className="flex gap-3 items-start bg-[#fdf3eb] border border-[#f5d8b8] rounded-xl p-4"
              >
                <span className="text-[#c8621a] font-bold text-base flex-shrink-0">✓</span>
                <span className="text-sm text-[#444] leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Products ── */}
        <section>
          <h2 className="text-lg font-semibold text-[#1a0e00] mb-5">
            More Designs in {areaData.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/corian-mandir-in-noida/${areaData.slug}/${p.slug}`}
                className="group bg-white border border-[#e8e4df] rounded-2xl overflow-hidden hover:border-[#c8621a]/40 hover:shadow-md transition-all"
              >
                <div className="relative w-full h-32 bg-[#f5f0eb]">
                  <Image
                    src={p.image}
                    alt={`${p.name} in ${areaData.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-[#1a0e00] leading-snug group-hover:text-[#c8621a] transition-colors">
                    {p.shortName}
                  </p>
                  <p className="text-sm font-bold text-[#c8621a] mt-1">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}