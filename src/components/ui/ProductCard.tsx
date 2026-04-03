import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product:   Product;
  showBadge?: boolean;
}

export default function ProductCard({ product, showBadge = true }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.category}/${product.id}`}
      className="group relative bg-white border border-stone-100 rounded-sm overflow-hidden hover:border-[#f97d08]/30 hover:shadow-[0_12px_48px_rgba(249,125,8,0.10)] transition-all duration-500 flex flex-col"
    >
      {/* Visual top */}
      <div className="relative h-52 bg-gradient-to-br from-[#fff8f0] to-[#fdfaf5] flex items-center justify-center overflow-hidden">
        {/* Rings */}
        <div className="absolute w-36 h-36 border border-[#f97d08]/15 rounded-full group-hover:border-[#f97d08]/30 transition-colors duration-500" />
        <div className="absolute w-24 h-24 border border-[#f97d08]/20 rounded-full" />
        
        {/* Image with fallback to emoji */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={200}
            height={200}
            className="object-contain w-auto h-auto max-w-[150px] max-h-[150px] group-hover:scale-110 transition-transform duration-500"
            priority={false}
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f97d08]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Badges */}
        {showBadge && product.badge && (
          <span className="absolute top-3 right-3 bg-[#f97d08] text-white text-[10px] font-body font-medium px-2.5 py-1 rounded-full tracking-wider uppercase">
            {product.badge}
          </span>
        )}
        {product.popular && !product.badge && (
          <span className="absolute top-3 left-3 bg-[#1a0e00]/80 text-white text-[10px] font-body px-2.5 py-1 rounded-full tracking-wider uppercase">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#f97d08] mb-1">
          {product.category} mandir
        </p>
        <h3 className="font-display text-xl font-semibold text-[#1a0e00] leading-snug mb-2">
          {product.name}
        </h3>
        <p className="font-body text-xs text-[#8a7060] italic mb-3">{product.tagline}</p>
        <p className="font-body text-sm text-[#4a3520] leading-relaxed mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>

        {/* Sizes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.sizes.slice(0, 3).map((s) => (
            <span
              key={s}
              className="font-body text-[10px] border border-stone-200 text-[#8a7060] px-2 py-0.5 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between border-t border-stone-100 pt-4">
          <div>
            <p className="font-body text-[10px] text-[#8a7060] uppercase tracking-wide">Starting from</p>
            <p className="font-display text-xl font-semibold text-[#f97d08]">{product.priceFrom}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[#f97d08] font-body text-sm font-medium group-hover:gap-3 transition-all duration-300">
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
