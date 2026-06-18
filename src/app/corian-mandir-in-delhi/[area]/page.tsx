import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { areas } from "@/data/areas";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    area: string;
  }>;
};

export async function generateStaticParams() {
  return areas.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const areaData = areas.find((item) => item.slug === area);
  if (!areaData) return {};

  return {
    title: `Corian Mandir Manufacturer in ${areaData.name} Delhi | Custom Temple Design`,
    description: `Premium Corian Mandir Manufacturer in ${areaData.name}, Delhi. Custom Corian Temple Design, CNC Jali Work, LED Backlit Mandirs and Professional Installation.`,
    keywords: [
      `Corian Mandir in ${areaData.name}`,
      `Corian Temple in ${areaData.name}`,
      `Corian Mandir Manufacturer in ${areaData.name}`,
      `${areaData.name} Corian Mandir`,
      `Corian Temple Design ${areaData.name}`,
    ],
  };
}

export default async function AreaPage({ params }: Props) {
  const { area } = await params;
  const areaData = areas.find((item) => item.slug === area);
  if (!areaData) notFound();

  return (
    <>
      {/* ── Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vaishno Temple",
            areaServed: areaData.name,
            serviceType: "Corian Mandir Manufacturer",
            address: {
              "@type": "PostalAddress",
              addressLocality: areaData.name,
              addressRegion: "Delhi",
              addressCountry: "India",
            },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#fdfaf5] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#f97d08]/10 blur-[80px] rounded-full" />

        <div className="container-site section-padding relative z-10">
          {/* <nav className="text-sm text-[#8a7060] mb-8">
            <Link href="/corian-mandir-in-delhi" className="hover:text-[#f97d08] transition-colors">
              Delhi
            </Link>
            {" / "}
            <span className="text-[#1a0e00]">Corian Mandir in {areaData.name}</span>
          </nav> */}
             {/* ── Breadcrumb ── */}
        <nav className="text-sm text-[#8a7060] mb-8">
          <Link href="/" className="hover:text-[#f97d08] transition-colors">Home</Link>
          <span className="mx-2 text-gray-300">›</span>
          <Link href="/corian-mandir-in-delhi" className="hover:text-[#f97d08] transition-colors">Delhi</Link>
          <span className="mx-2 text-gray-300">›</span>
          <Link
            href={`/corian-mandir-in-delhi/${areaData.slug}`}
            className="hover:text-[#f97d08] transition-colors"
          >
            {areaData.name}
          </Link>         
        </nav>


          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-[0.3em] text-[#f97d08] text-xs mb-4">
              Premium Corian Temple Designs
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-[#1a0e00] mb-6">
              Corian Mandir Manufacturer in {areaData.name}, Delhi
            </h1>
            <p className="text-[#8a7060] text-lg leading-relaxed">
              Looking for a premium Corian Mandir in {areaData.name}, Delhi? We design and
              manufacture customized Corian temples with elegant CNC jali work, LED
              backlighting, marble finishes and professional installation services.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-white">
        <div className="container-site section-padding">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "5000+", label: "Mandirs Installed" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "Custom Designs" },
              { value: "Free", label: "Home Visit" },
            ].map((stat) => (
              <div key={stat.label} className="border rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold text-[#f97d08]">{stat.value}</h3>
                <p className="text-[#8a7060] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="container-site section-padding">

          {/* Section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#f97d08] text-xs mb-2">
                Browse Designs
              </p>
              <h2 className="font-display text-3xl text-[#1a0e00]">
                Our Corian Mandir Designs
              </h2>
            </div>
            <p className="text-sm text-[#8a7060] hidden md:block">
              {products.length} designs available in {areaData.name}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/corian-mandir-in-delhi/${areaData.slug}/${product.slug}`}
                className="group relative flex flex-col bg-white border border-[#ede8e0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#f97d08]/40 transition-all duration-300"
              >
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-[#f97d08] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Image */}
                <div className="relative w-full h-52 bg-[#fdf6ee] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} in ${areaData.name}, Delhi`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5 gap-2">
                  {/* Category */}
                  <span className="text-[11px] uppercase tracking-widest text-[#f97d08] font-semibold">
                    {product.category}
                  </span>

                  {/* Name */}
                  <h3 className="text-[#1a0e00] font-semibold text-base leading-snug group-hover:text-[#f97d08] transition-colors">
                    {product.name} in {areaData.name}, Delhi
                  </h3>

                  {/* Price */}
                  <p className="text-[#f97d08] font-bold text-base">{product.price}</p>

                  {/* Rating + delivery */}
                  <div className="flex items-center justify-between text-xs text-[#8a7060] mt-auto pt-3 border-t border-[#f0ebe4]">
                    <span>⭐ {product.rating} ({product.reviews})</span>
                    <span>🚚 {product.deliveryDays} days</span>
                  </div>

                  {/* CTA row */}
                  <span className="mt-2 text-sm font-semibold text-[#f97d08] flex items-center gap-1 group-hover:gap-2 transition-all">
                    View details
                    <span className="text-base leading-none">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="container-site section-padding max-w-5xl">
          <h2 className="font-display text-3xl text-[#1a0e00] mb-6">
            Best Corian Mandir in {areaData.name}
          </h2>
          <div className="space-y-5 text-[#8a7060] leading-8">
            <p>
              Vaishno Temple is a leading Corian Mandir Manufacturer in {areaData.name},
              Delhi offering premium temple solutions for homes, apartments, villas and offices.
            </p>
            <p>
              Every Corian Mandir is designed with precision CNC cutting, decorative jali
              patterns, integrated LED lighting and elegant finishes that create a peaceful
              spiritual atmosphere.
            </p>
            <p>
              We provide complete design consultation, manufacturing, transportation and
              installation services across {areaData.name} and nearby locations.
            </p>
            <p>
              Whether you need a compact wall-mounted mandir or a large customized temple,
              our team can create a design that perfectly matches your space and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="container-site section-padding">
          <h2 className="font-display text-3xl text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wall Mounted Mandirs",
                desc: "Space-saving premium Corian temple designs.",
              },
              {
                title: "LED Backlit Mandirs",
                desc: "Elegant illuminated Corian temple designs.",
              },
              {
                title: "Custom Temple Design",
                desc: "Fully personalized temple solutions.",
              },
            ].map((s) => (
              <div key={s.title} className="border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
                <p className="text-[#8a7060]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* ── Nearby Areas ── */}
      <section className="py-20 bg-white">
        <div className="container-site section-padding">
          <h2 className="font-display text-3xl mb-10">Nearby Areas We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {areas
              .filter((item) => item.slug !== areaData.slug)
              .slice(0, 12)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/corian-mandir-in-delhi/${item.slug}`}
                  className="border rounded-full px-5 py-2 text-sm text-[#8a7060] hover:border-[#f97d08] hover:text-[#f97d08] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="container-site section-padding max-w-4xl">
          <h2 className="font-display text-3xl mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: `Do you provide installation in ${areaData.name}?`,
                a: `Yes, we provide complete installation services across ${areaData.name} and nearby Delhi areas.`,
              },
              {
                q: "What is the cost of a Corian Mandir?",
                a: "Pricing depends on size, design, lighting and customization requirements.",
              },
              {
                q: "Do you offer customized designs?",
                a: "Yes, every Corian Mandir can be customized according to your available space and preferences.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-[#8a7060]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#1a0e00]">
        <div className="container-site section-padding text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            Get Your Custom Corian Mandir Today
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Schedule a free consultation and home visit for your Corian Mandir project
            in {areaData.name}, Delhi.
          </p>
          <a
            href="tel:+918826858845"
            className="inline-flex px-8 py-4 rounded-full bg-[#f97d08] text-white font-medium hover:bg-[#e06d00] transition-colors"
          >
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}