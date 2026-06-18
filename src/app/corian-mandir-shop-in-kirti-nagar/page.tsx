import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata = {
  title:
    "Corian Mandir Shop in Kirti Nagar Delhi | SHREE VAISHNO TEMPLE",

  description:
    "Visit the leading Corian Mandir Shop in Kirti Nagar Delhi. Custom Corian Temple Designs, CNC Jali Work, LED Backlit Mandirs and Professional Installation by Corian Marble Mandirs by SHREE VAISHNO TEMPLE.",

  keywords: [
    "Corian Mandir Shop in Kirti Nagar",
    "Corian Mandir in Kirti Nagar",
    "Corian Temple in Kirti Nagar",
    "Corian Marble Mandir Delhi",
    "Corian Mandir Manufacturer Delhi",
    "Corian Temple Design Kirti Nagar",
    "Corian Marble Mandirs by SHREE VAISHNO TEMPLE",
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
          "@type": "LocalBusiness",
          name: "Vaishno Temple – Corian Mandir Manufacturer",
          description: `Corian mandir Shop in Kirti Nagar, Delhi.`,
          url: "https://www.vaishnotemple.in",
          telephone: "+918826858845",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kirti Nagar",
            addressRegion: "Delhi",
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

export default function Page() {
  return (
    <>

      <LocalBusinessSchema />
      
      <section className="relative pt-32 pb-20 bg-[#fdfaf5]">
        <div className="container-site section-padding max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-[#f97d08] text-xs mb-4">
            Premium Corian Temple Manufacturer
          </p>

          <h1 className="font-display text-4xl md:text-6xl font-semibold text-[#1a0e00] mb-6">
            Corian Mandir Shop in Kirti Nagar
          </h1>

          <p className="text-lg text-[#8a7060] leading-relaxed">
            Welcome to Corian Marble Mandirs by SHREE VAISHNO TEMPLE,
            a trusted Corian Mandir Shop in Kirti Nagar known for
            premium temple designs, custom craftsmanship and
            professional installation services across Delhi NCR.
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
            Best Corian Mandir Shop in Kirti Nagar Delhi
          </h2>

          <div className="space-y-6 text-[#8a7060] leading-8">

            <p>
              If you are searching for a premium Corian Mandir Shop in
              Kirti Nagar, you will find a wide collection of elegant
              temple designs at Corian Marble Mandirs by SHREE VAISHNO
              TEMPLE. Our team specializes in designing and manufacturing
              beautiful Corian temples that combine traditional spiritual
              aesthetics with modern craftsmanship.
            </p>

            <p>
              Located in Kirti Nagar, one of Delhi's most prominent
              furniture and interior design hubs, we serve homeowners,
              architects, interior designers and builders looking for
              high-quality Corian temple solutions. Every mandir is
              manufactured using premium Corian material, ensuring a
              seamless finish, durability and long-lasting beauty.
            </p>

            <p>
              Over the years, our Corian Mandir Shop in Kirti Nagar has
              become a preferred destination for customers who want
              customized temple designs, decorative CNC jali work,
              backlit panels and luxury pooja units. Whether you need
              a compact wall-mounted temple or a large floor-standing
              mandir, our experts can create a design that perfectly
              fits your home.
            </p>

          </div>

          <h2 className="font-display text-3xl mt-16 mb-8">
  Popular Corian Mandir Designs in Kirti Nagar
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

        </div>
      </section>
    </>
  );
}
