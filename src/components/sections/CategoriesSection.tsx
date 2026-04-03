import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { CATEGORIES_META } from "@/lib/products";

export default function CategoriesSection() {
  return (
    <section className="py-24 md:py-32 bg-white" id="products">
      <div className="section-padding container-site">
        <SectionHeading
          eyebrow="Our Collections"
          title="Choose Your Mandir"
          subtitle="Two distinct collections, each crafted with the same devotion. Find the perfect mandir that resonates with your home's soul."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(CATEGORIES_META).slice(0, 2).map(([key, cat]) => (
            <Card
              key={key}
              title={cat.title}
              description={cat.description}
              image={cat.image}
              imageAlt={cat.imageAlt}
              href={`/products/${key}`}
              badge={key === "corian" ? "Best Seller" : undefined}
              variant="category"
            />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <p className="font-body text-sm text-[#8a7060]">
            Also available:{" "}
            <a href="/products/marble" className="text-[#f97d08] animated-underline">
              Marble Mandirs
            </a>
            ,{" "}
            <a href="/products/custom" className="text-[#f97d08] animated-underline">
              Custom Designs
            </a>
            , and{" "}
            <a href="/products/office" className="text-[#f97d08] animated-underline">
              Office/Commercial Mandirs
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
