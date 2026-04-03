import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const PILLARS = [
  { icon: "🙏", title: "Devotion-First Design", desc: "Every mandir is designed with Vastu principles and sacred geometry." },
  { icon: "🔨", title: "Master Craftsmen",       desc: "Our artisans carry decades of tradition in every chisel and curve." },
  { icon: "✨", title: "Premium Materials",       desc: "Only the finest Corian, teakwood, and marble — ethically sourced." },
];

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-[#fdfaf5]" id="about">
      <div className="section-padding container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: decorative visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full mandala-ring opacity-15 animate-spin-slow" />
                <div className="absolute w-4/5 h-4/5 mandala-ring opacity-20" />
                <div className="absolute w-3/5 h-3/5 mandala-ring opacity-30" />
              </div>
              {/* Center temple icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-[#f97d08]/10 blur-2xl rounded-full" />
                  <span className="relative text-[8rem] leading-none block animate-glow-pulse">
                    🛕
                  </span>
                </div>
              </div>
              {/* Corner accents */}
              {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos,i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-10 h-10 border-[#f97d08]/30 ${
                    i < 2 ? "border-t-2" : "border-b-2"
                  } ${i % 2 === 0 ? "border-l-2" : "border-r-2"}`}
                />
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Our Story"
              title={"Crafting Sacred\nSpaces Since 2015"}
              centered={false}
            />
            <p className="font-body text-base text-[#4a3520] leading-relaxed mb-5">
              At <strong className="font-semibold text-[#1a0e00]">Vaishno Temple</strong>, we believe
              that every home deserves a divine corner — a space where the family
              gathers in prayer, peace, and gratitude.
            </p>
            <p className="font-body text-base text-[#8a7060] leading-relaxed mb-10">
              Founded in Delhi, our master craftsmen blend ancient temple
              architecture with modern materials like Corian to create mandirs
              that are timeless, durable, and breathtakingly beautiful. Each
              piece is a labour of devotion.
            </p>

            {/* Pillars */}
            <div className="space-y-5 mb-10">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#1a0e00]">{p.title}</h3>
                    <p className="font-body text-sm text-[#8a7060] mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/about">Read Our Story</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
