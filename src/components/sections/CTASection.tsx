import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#1a0e00]" id="cta">
      {/* Background decorations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] mandala-ring opacity-[0.06]" />
        <div className="absolute w-[450px] h-[450px] mandala-ring opacity-[0.08]" />
        <div className="absolute w-[250px] h-[250px] mandala-ring opacity-[0.12]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f97d08]/8 blur-[100px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 section-padding container-site text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-[#f97d08] mb-4">
          Start Your Journey
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
          Ready to Bring the{" "}
          <span className="text-[#f97d08]">Divine</span>
          <br />
          into Your Home?
        </h2>
        <p className="font-body text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-12">
          Get a free design consultation and quote. Our team will help you choose
          the perfect mandir for your space, budget, and needs.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button href="/contact" size="lg">
            Get Free Design Consultation
          </Button>
          <Button
            href="http://wa.me/918826858845"
            size="lg"
            variant="outline"
            external
            className="border-white/30 text-white hover:bg-white hover:text-orange-500"
          >
            💬 Chat on WhatsApp
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: "✅", text: "Free home visit" },
            { icon: "🚚", text: "Free delivery" },
            { icon: "🔧", text: "Free installation" },
            { icon: "🛡️", text: "5-year warranty" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <span className="text-lg">{b.icon}</span>
              <span className="font-body text-sm text-white/50">{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f97d08]/30 to-transparent" />
    </section>
  );
}
