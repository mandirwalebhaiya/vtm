import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata = {
  title:
    "Korean Marble Mandir Shop in Kirti Nagar Delhi | SHREE VAISHNO TEMPLE",

  description:
    "Buy Korean Marble Mandir in Kirti Nagar Delhi. Custom designer mandirs with LED lighting, CNC carving, modern pooja units and PAN India installation by SHREE VAISHNO TEMPLE.",

  keywords: [
    "Korean Marble Mandir",
    "Korean Marble Mandir Shop in Kirti Nagar",
    "Korean Marble Mandir Delhi",
    "Designer Korean Marble Mandir",
    "Modern Korean Marble Mandir",
    "Custom Korean Marble Mandir",
    "Kirti Nagar Mandir Shop",
  ],
};

// ─── Local Business Schema ────────────────────────────────────────────────────
function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "KOREAN MARBLE MANDIR SHOP - SHREE VAISHNO TEMPLE",
          image: "https://www.vaishnotemple.in/logo.png",
          url: "https://www.vaishnotemple.in",
          telephone: "+918826858845",
          description:
            "Premium Korean Marble Mandir Manufacturer in Kirti Nagar Delhi.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kirti Nagar",
            addressRegion: "Delhi",
            postalCode: "110015",
            addressCountry: "IN",
          },
          areaServed: [
            "Delhi",
            "Noida",
            "Gurgaon",
            "Faridabad",
            "Ghaziabad",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1200",
          },
        }),
      }}
    />
  );
}

export default function Page() {
  return (
    <>

      <LocalBusinessSchema />
      
      <section className="relative pt-32 pb-20 bg-[#fdfaf5]">
        <div className="container-site section-padding max-w-5xl mx-auto text-center">

        <h1 className="font-display text-4xl md:text-6xl font-semibold">
  Korean Marble Mandir Shop in Kirti Nagar
</h1>

<p className="text-lg leading-relaxed text-[#8a7060]">
  Looking for a premium <strong>Korean Marble Mandir</strong> in
  Kirti Nagar? SHREE VAISHNO TEMPLE specializes in designing elegant
  custom pooja mandirs with 3D carving, decorative jali work,
  LED backlighting and seamless modern finishes.
</p>

        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site section-padding">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#f97d08]">
                5000+
              </h3>
              <p>Mandirs Installed</p>
            </div>

            <div className="border rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#f97d08]">
                15+
              </h3>
              <p>Years Experience</p>
            </div>

            <div className="border rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#f97d08]">
                4.8★
              </h3>
              <p>Google Rating</p>
            </div>

            <div className="border rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-[#f97d08]">
                Free
              </h3>
              <p>Home Visit</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fdfaf5]">
        <div className="container-site section-padding max-w-5xl">

          <h2 className="font-display text-3xl text-[#1a0e00] mb-6">
            Best Korean Marble Mandir Shop in Kirti Nagar Delhi
          </h2>

          <div className="space-y-6 text-[#8a7060] leading-8">

           <h2 className="font-display text-3xl mb-6">
Why Choose Our Korean Marble Mandir?
</h2>

<p>
At SHREE VAISHNO TEMPLE, we manufacture premium Korean Marble Mandirs
for apartments, villas and luxury homes. Every mandir is designed
according to your available space and interior theme.
</p>

<p>
Located in Kirti Nagar, Delhi's biggest furniture and interior market,
our showroom offers customized temple solutions for homeowners,
architects and interior designers across Delhi NCR.
</p>

<p>
Whether you need a wall-mounted Korean Marble Mandir, a backlit pooja
unit or a large floor-standing temple, our experienced craftsmen
deliver premium quality with precise finishing and professional
installation.
</p>

          </div>

          <h2 className="font-display text-3xl mt-16 mb-8">
  Popular Korean Marble Mandir Designs in Kirti Nagar
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {products.slice(0, 6).map((product) => (
    <Link
      key={product.slug}
      href={`/corian-mandir-in-delhi/kirti-nagar/${product.slug}`}
      className="group border rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all"
    >
      <div className="relative aspect-square overflow-hidden">

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-[#f97d08] text-white text-xs px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}

      </div>

      <div className="p-5">

        <h3 className="font-semibold text-lg text-[#1a0e00] mb-2">
          {product.shortName} in Kirti Nagar, Delhi
        </h3>

        <p className="text-sm text-[#8a7060] mb-3 line-clamp-2">
          {product.description}
        </p>

        <p className="font-semibold text-[#f97d08]">
          {product.price}
        </p>

      </div>
    </Link>
  ))}

</div>

          {/* <h2 className="font-display text-3xl mt-16 mb-6">
            Our Corian Mandir Designs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-2xl p-6 bg-white">
              <h3 className="font-semibold mb-3">
                Wall Mounted Mandirs
              </h3>
              <p>
                Elegant space-saving designs for modern apartments.
              </p>
            </div>

            <div className="border rounded-2xl p-6 bg-white">
              <h3 className="font-semibold mb-3">
                LED Backlit Mandirs
              </h3>
              <p>
                Premium illuminated temple designs with soft lighting.
              </p>
            </div>

            <div className="border rounded-2xl p-6 bg-white">
              <h3 className="font-semibold mb-3">
                Custom Corian Temples
              </h3>
              <p>
                Personalized designs created according to your space.
              </p>
            </div>

          </div> */}

          <h2 className="font-display text-3xl mt-16 mb-6">
            Why Choose SHREE VAISHNO TEMPLE?
          </h2>

          <ul className="space-y-4 text-[#8a7060]">
            <li>Premium Corian Material</li>
            <li>Custom Design Solutions</li>
            <li>Free Home Visit</li>
            <li>Professional Installation</li>
            <li>CNC Jali Work</li>
            <li>LED Backlit Temple Designs</li>
            <li>15+ Years Industry Experience</li>
            <li>5000+ Successful Installations</li>
          </ul>
          
          
          <h2 className="font-display text-3xl mt-16 mb-6">
            Visit Our Corian Mandir Shop in Kirti Nagar
          </h2>

          <p className="text-[#8a7060] leading-8">
            Visit Corian Marble Mandirs by SHREE VAISHNO TEMPLE and
            explore premium Corian temple designs crafted for modern
            homes. Our showroom in Kirti Nagar offers personalized
            consultation, design assistance and complete installation
            support. Whether you are renovating your pooja room or
            planning a new temple for your home, our team is ready
            to help you create a beautiful spiritual space.
          </p>

          <h2 className="font-display text-3xl mt-20 mb-8">
Frequently Asked Questions
</h2>

<div className="space-y-8">

<div>
<h3 className="font-semibold text-xl">
What is a Korean Marble Mandir?
</h3>

<p>
The term Korean Marble Mandir is commonly used by customers searching
for modern Corian-based designer mandirs with seamless finishes,
backlit panels and customized temple designs.
</p>
</div>

<div>
<h3 className="font-semibold text-xl">
Do you provide custom sizes?
</h3>

<p>
Yes. Every Korean Marble Mandir is manufactured according to your
available space, ceiling height and interior design.
</p>
</div>

<div>
<h3 className="font-semibold text-xl">
Do you deliver outside Delhi?
</h3>

<p>
Yes. We provide safe PAN India delivery and professional installation.
</p>

</div>
</div>

        </div>
      </section>
    </>
  );
}
