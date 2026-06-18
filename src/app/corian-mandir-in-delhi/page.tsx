import Link from "next/link";
import { areas } from "@/data/areas";

// export const metadata = {
//   title: "Corian Mandir Manufacturer in Delhi",
//   description:
//     "Premium Corian Mandir Manufacturer in Delhi with custom temple design and installation.",
// };

export const metadata = {
  title:
    "Corian Mandir Manufacturer in Delhi | Custom Corian Temple Design",

  description:
    "Leading Corian Mandir Manufacturer in Delhi. Premium Corian Temple Designs, CNC Jali Work, Backlit Mandirs, Home Installation and Free Consultation.",

  keywords: [
    "Corian Mandir Manufacturer in Delhi",
    "Corian Mandir Delhi",
    "Corian Temple Design Delhi",
    "Corian Mandir Shop Delhi",
    "Corian Temple Manufacturer Delhi",
  ],
};

export default function DelhiPage() {
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
            areaServed: "Delhi NCR",
            serviceType: "Corian Mandir Manufacturer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressRegion: "Delhi",
              addressCountry: "India",
            },
          }),
        }}
      />
{/* Hero Section */} 

<section className="relative pt-32 pb-20 bg-[#fdfaf5] overflow-hidden"> <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#f97d08]/10 blur-[90px] rounded-full" />

    <div className="container-site section-padding relative z-10">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-[#f97d08] uppercase tracking-[0.3em] text-xs mb-4">
          Delhi's Trusted Manufacturer
        </p>

        <h1 className="font-display text-4xl md:text-6xl font-semibold text-[#1a0e00] leading-tight mb-6">
          Corian Mandir Manufacturer in Delhi
        </h1>

        <p className="text-[#6d5c4c] text-lg leading-relaxed max-w-3xl mx-auto">
          Looking for a premium Corian Mandir Manufacturer in Delhi?
          We design and manufacture custom Corian Mandirs with
          modern backlighting, CNC jali work, premium Corian sheets,
          and professional installation across Delhi NCR.
        </p>

      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="py-20 bg-white">
    <div className="container-site section-padding max-w-6xl mx-auto">

      <h2 className="font-display text-3xl mb-8 text-[#1a0e00]">
        Premium Corian Mandir Design Services in Delhi
      </h2>

      <div className="space-y-6 text-[#4a3520] leading-8">

        <p>
          A Corian Mandir is more than just a temple. It becomes the
          spiritual center of your home. At Vaishno Temple, we create
          elegant Corian Mandir designs that combine traditional devotion
          with modern craftsmanship.
        </p>

        <p>
          As a leading Corian Mandir Manufacturer in Delhi, we have
          successfully delivered custom mandirs for apartments,
          villas, builder floors, offices, and luxury residences
          across Delhi NCR. Every design is customized according to
          available space, deity requirements, storage needs, and
          interior aesthetics.
        </p>

        <p>
          Whether you need a wall-mounted Corian Mandir, backlit
          Corian Temple, CNC jali mandir, or a fully customized
          luxury pooja unit, our team handles everything from design
          consultation to final installation.
        </p>

      </div>
    </div>
  </section>

  {/* Stats */}
  <section className="py-20 bg-[#fdfaf5]">
    <div className="container-site section-padding">
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-8 text-center border border-stone-100">
          <h3 className="text-4xl font-bold text-[#f97d08]">5000+</h3>
          <p>Mandirs Delivered</p>
        </div>

        <div className="bg-white p-8 text-center border border-stone-100">
          <h3 className="text-4xl font-bold text-[#f97d08]">15+</h3>
          <p>Years Experience</p>
        </div>

        <div className="bg-white p-8 text-center border border-stone-100">
          <h3 className="text-4xl font-bold text-[#f97d08]">100%</h3>
          <p>Custom Designs</p>
        </div>

        <div className="bg-white p-8 text-center border border-stone-100">
          <h3 className="text-4xl font-bold text-[#f97d08]">24×7</h3>
          <p>Customer Support</p>
        </div>

      </div>
    </div>
  </section>

  {/* Areas */}
  <section className="py-20 bg-white">
    <div className="container-site section-padding">

      <h2 className="font-display text-3xl mb-10 text-center">
        Areas We Serve Across Delhi
      </h2>

      <div className="grid md:grid-cols-4 gap-5">

        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/corian-mandir-in-delhi/${area.slug}`}
            className="border border-stone-200 bg-[#fdfaf5] hover:border-[#f97d08] p-5 transition-all duration-300 rounded-sm"
          >
            Corian Mandir in {area.name}
          </Link>
        ))}

      </div>

    </div>
  </section>


  {/* FAQ */}
  <section className="py-20 bg-[#fdfaf5]">
    <div className="container-site section-padding max-w-4xl mx-auto">

      <h2 className="font-display text-3xl mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8">

        <div>
          <h3 className="font-semibold text-xl mb-2">
            What is the cost of a Corian Mandir in Delhi?
          </h3>
          <p>
            The cost depends on size, lighting, CNC work,
            and customization. Most projects start from
            ₹15,000 and can go above ₹1 lakh for luxury designs.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">
            Do you provide installation?
          </h3>
          <p>
            Yes. We provide complete delivery and installation
            services across Delhi NCR.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">
            Can I get a custom design?
          </h3>
          <p>
            Absolutely. Every Corian Mandir can be customized
            according to your space and requirements.
          </p>
        </div>

      </div>

    </div>
  </section>
</>
);
}
