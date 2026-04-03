import type { Metadata } from "next";
import HeroSection      from "@/components/sections/HeroSection";
import AboutSection     from "@/components/sections/AboutSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import WhyUsSection     from "@/components/sections/WhyUsSection";
import CTASection       from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Vaishno Temple Kirti Nagar — Premium Corian & Wooden Mandirs for Home",
  description:
    "Buy Corian and wooden Pooja Mandirs direct from the manufacturer. Custom sizes, Vastu-compliant designs, free installation. Trusted by 10,000+ families. vaishnotemple.in",
  alternates: {
    canonical: "https://vaishnotemple.in",
  },
  openGraph: {
    title: "Vaishno Temple — Premium Corian & Wooden Mandirs for Home",
    description:
      "Handcrafted Corian and wooden Pooja Mandirs. Custom designs, Vastu-compliant, pan-India delivery.",
    url: "https://vaishnotemple.in",
  },
};

// JSON-LD structured data for local business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vaishno Temple Kirti Nagar",
  url: "https://vaishnotemple.in",
  logo: "https://vaishnotemple.in/logo.png",
  image: "https://vaishnotemple.in/og-image.jpg",
  description:
    "Premium handcrafted Corian and wooden Pooja Mandirs for homes and offices across India.",
  telephone: "+91-8826858845",
  email: "info@vaishnotemple.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, Shop No.4, Plot No. 12, Block A-1, Whs Kirti Nagar Industrial Area",
    addressLocality: "West Delhi",
    addressRegion: "Delhi",
    postalCode: "110015",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6139",
    longitude: "77.2090",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  priceRange: "₹₹–₹₹₹",
  sameAs: [
    "https://www.instagram.com/vaishnotemple",
    "https://www.facebook.com/vaishnotemple",
    "https://www.youtube.com/vaishnotemple",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
