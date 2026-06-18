import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { gurugramAreas } from "@/data/gurugramAreas";

type Props = {
  params: Promise<{
    area: string;
  }>;
};

export async function generateStaticParams() {
  return gurugramAreas.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { area } = await params;

  const areaData = gurugramAreas.find(
    (item) => item.slug === area
  );

  if (!areaData) return {};

  return {
    title: `Corian Mandir Manufacturer in ${areaData.name} Gurugram | Custom Temple Design`,
    description: `Premium Corian Mandir Manufacturer in ${areaData.name}, Gurugram. Custom Corian Temple Design, CNC Jali Work, LED Backlit Mandirs and Professional Installation.`,
    keywords: [
      `Corian Mandir in ${areaData.name}`,
      `Corian Temple in ${areaData.name}`,
      `Corian Mandir Manufacturer in ${areaData.name}`,
      `${areaData.name} Corian Mandir`,
      `Corian Temple Design ${areaData.name}`,
    ],
  };
}

export default async function AreaPage({
  params,
}: Props) {
  const { area } = await params;

  const areaData = gurugramAreas.find(
    (item) => item.slug === area
  );

  if (!areaData) {
    notFound();
  }

  return (
    <>
      {/* Schema */}
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
              addressRegion: "Gurugram",
              addressCountry: "India",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#fdfaf5] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#f97d08]/10 blur-[80px] rounded-full" />

        <div className="container-site section-padding relative z-10">

          <nav className="text-sm text-[#8a7060] mb-8">
            <Link
              href="/corian-mandir-in-gurugram"
              className="hover:text-[#f97d08]"
            >
              Gurugram
            </Link>
            {" / "}
            <span className="text-[#1a0e00]">
              Corian Mandir in Gurugram {areaData.name}
            </span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[0.3em] text-[#f97d08] text-xs mb-4">
              Premium Corian Temple Designs
            </p>

            <h1 className="font-display text-4xl md:text-6xl font-semibold text-[#1a0e00] mb-6">
              Corian Mandir Manufacturer in {areaData.name}, Gurugram
            </h1>

            <p className="text-[#8a7060] text-lg leading-relaxed">
              Looking for a premium Corian Mandir in {areaData.name},
              Gurugram? We design and manufacture customized Corian
              temples with elegant CNC jali work, LED backlighting,
              marble finishes and professional installation services.
            </p>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-site section-padding">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#f97d08]">
                5000+
              </h3>
              <p className="text-[#8a7060]">
                Mandirs Installed
              </p>
            </div>

            <div className="border rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#f97d08]">
                15+
              </h3>
              <p className="text-[#8a7060]">
                Years Experience
              </p>
            </div>

            <div className="border rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#f97d08]">
                100%
              </h3>
              <p className="text-[#8a7060]">
                Custom Designs
              </p>
            </div>

            <div className="border rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#f97d08]">
                Free
              </h3>
              <p className="text-[#8a7060]">
                Home Visit
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="container-site section-padding max-w-5xl">

          <h2 className="font-display text-3xl text-[#1a0e00] mb-6">
            Best Corian Mandir in {areaData.name}
          </h2>

          <div className="space-y-5 text-[#8a7060] leading-8">

            <p>
              Vaishno Temple is a leading Corian Mandir Manufacturer
              in {areaData.name}, Gurugram offering premium temple
              solutions for homes, apartments, villas and offices.
            </p>

            <p>
              Every Corian Mandir is designed with precision CNC
              cutting, decorative jali patterns, integrated LED
              lighting and elegant finishes that create a peaceful
              spiritual atmosphere.
            </p>

            <p>
              We provide complete design consultation, manufacturing,
              transportation and installation services across
              {areaData.name} and nearby locations.
            </p>

            <p>
              Whether you need a compact wall-mounted mandir or a
              large customized temple, our team can create a design
              that perfectly matches your space and requirements.
            </p>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container-site section-padding">

          <h2 className="font-display text-3xl text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Wall Mounted Mandirs
              </h3>
              <p className="text-[#8a7060]">
                Space-saving premium Corian temple designs.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                LED Backlit Mandirs
              </h3>
              <p className="text-[#8a7060]">
                Elegant illuminated Corian temple designs.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Custom Temple Design
              </h3>
              <p className="text-[#8a7060]">
                Fully personalized temple solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="container-site section-padding">

          <h2 className="font-display text-3xl mb-10">
            Nearby Areas We Serve
          </h2>

          <div className="flex flex-wrap gap-3">

            {gurugramAreas
              .filter((item) => item.slug !== areaData.slug)
              .slice(0, 12)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/corian-mandir-in-gurugram/${item.slug}`}
                  className="border rounded-full px-5 py-2 hover:border-[#f97d08]"
                >
                  {item.name}
                </Link>
              ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-site section-padding max-w-4xl">

          <h2 className="font-display text-3xl mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-semibold mb-2">
                Do you provide installation in {areaData.name}?
              </h3>
              <p className="text-[#8a7060]">
                Yes, we provide complete installation services across
                {areaData.name} and nearby Gurugram areas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What is the cost of a Corian Mandir?
              </h3>
              <p className="text-[#8a7060]">
                Pricing depends on size, design, lighting and
                customization requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Do you offer customized designs?
              </h3>
              <p className="text-[#8a7060]">
                Yes, every Corian Mandir can be customized according
                to your available space and preferences.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a0e00]">
        <div className="container-site section-padding text-center">

          <h2 className="font-display text-4xl text-white mb-6">
            Get Your Custom Corian Mandir Today
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Schedule a free consultation and home visit for your
            Corian Mandir project in {areaData.name}, Gurugram.
          </p>

          <a
            href="tel:+918826858845"
            className="inline-flex px-8 py-4 rounded-full bg-[#f97d08] text-white font-medium"
          >
            Call Now
          </a>

        </div>
      </section>
    </>
  );
}
