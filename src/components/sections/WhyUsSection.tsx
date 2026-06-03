import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const FEATURES = [
  {
    icon: "🎨",
    title: "100% Custom Design",
    description:
      "Every mandir is designed to your specifications — size, finish, features, and Vastu alignment.",
  },
  {
    icon: "🏠",
    title: "Home Visit & Measurement",
    description:
      "Our team visits your home, takes measurements, and suggests the best placement and design.",
  },
  {
    icon: "🚚",
    title: "Pan-India Delivery",
    description:
      "We deliver and install anywhere in India — Mumbai, Bangalore, Hyderabad, Chennai, and beyond.",
  },
  {
    icon: "🔧",
    title: "Professional Installation",
    description:
      "Trained installers set up your mandir perfectly — with electrical fittings if needed.",
  },
  {
    icon: "📐",
    title: "Vastu Compliant",
    description:
      "All our designs are vetted by Vastu experts for positive energy and auspicious placement.",
  },
  {
    icon: "🛡️",
    title: "5-Year Warranty",
    description:
      "Every Vaishno Temple mandir comes with a 5-year warranty on craftsmanship and materials.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#fdfaf5]" id="why-us">
      <div className="section-padding container-site">
        <SectionHeading
          eyebrow="Why Vaishno Temple"
          title="Crafted with Care,\nDelivered with Trust"
          subtitle="We don't just build mandirs — we create divine experiences. Here's why 10,000+ families choose us."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, idx) => (
            <div
              key={f.title}
              className="group bg-white rounded-sm p-7 border border-stone-100 hover:border-[#f97d08]/30 hover:shadow-[0_8px_40px_rgba(249,125,8,0.08)] transition-all duration-500"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="font-display text-xl font-semibold text-[#1a0e00] mb-2">
                {f.title}
              </h3>
              <p className="font-body text-sm text-[#8a7060] leading-relaxed">
                {f.description}
              </p>
              {/* Bottom accent bar */}
              <div className="mt-5 h-0.5 w-0 bg-[#f97d08] group-hover:w-12 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Testimonial strip */}
        <div className="mt-16 bg-white border border-[#f97d08]/15 rounded-sm p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f97d08] to-transparent" />
          <span className="font-devanagari text-5xl text-[#f97d08]/20 block mb-4">"</span>
          <p className="font-display text-xl md:text-2xl italic text-[#1a0e00] leading-relaxed mb-6">
            The Corian mandir from Vaishno Temple has transformed our home. The
            craftsmanship is extraordinary — it looks like it belongs in a
            temple.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f97d08]/10 flex items-center justify-center">
              <span>🙏</span>
            </div>
            <div className="text-left">
              <p className="font-body text-sm font-medium text-[#1a0e00]">Priya Sharma</p>
              <p className="font-body text-xs text-[#8a7060]">New Delhi</p>
            </div>
            <div className="flex gap-0.5 text-[#f97d08] ml-2">
              {[...Array(5)].map((_, i) => <span key={i} className="text-sm">★</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
