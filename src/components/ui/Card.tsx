import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title:       string;
  description: string;
  href?:       string;
  icon?:       React.ReactNode;
  image?:      string;
  imageAlt?:   string;
  badge?:      string;
  className?:  string;
  variant?:    "default" | "category" | "feature";
}

export default function Card({
  title,
  description,
  href,
  icon,
  image,
  imageAlt,
  badge,
  className = "",
  variant = "default",
}: CardProps) {
  const baseClasses =
    "group relative rounded-sm overflow-hidden transition-all duration-500";

  const variantClasses = {
    default:
      "bg-white border border-stone-100 hover:border-[#f97d08]/30 hover:shadow-[0_8px_40px_rgba(249,125,8,0.10)] p-8",
    category:
      "bg-cream-50 border border-stone-100 hover:border-[#f97d08]/40 hover:shadow-[0_12px_48px_rgba(249,125,8,0.12)] p-0",
    feature:
      "bg-white hover:bg-[#fff8f0] border border-transparent hover:border-[#f97d08]/20 p-7",
  };

  const inner = (
    <>
      {variant === "category" ? (
        <CategoryInner
          title={title}
          description={description}
          icon={icon}
          image={image}
          imageAlt={imageAlt}
          badge={badge}
        />
      ) : (
        <DefaultInner title={title} description={description} icon={icon} />
      )}
    </>
  );

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}

function DefaultInner({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <>
      {icon && (
        <div className="mb-5 text-[#f97d08] text-3xl">{icon}</div>
      )}
      <h3 className="font-display text-xl font-semibold text-[#1a0e00] mb-3 leading-snug">
        {title}
      </h3>
      <p className="font-body text-sm text-[#8a7060] leading-relaxed">
        {description}
      </p>
    </>
  );
}

function CategoryInner({
  title,
  description,
  icon,
  image,
  imageAlt,
  badge,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  badge?: string;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Top visual area */}
      <div className="relative h-64 bg-gradient-to-br from-[#fff3e0] to-[#fdfaf5] flex items-center justify-center overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute w-48 h-48 mandala-ring opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute w-32 h-32 mandala-ring opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
        
        {/* Image or Icon */}
        {image ? (
          <Image
            src={image}
            alt={imageAlt || title}
            width={200}
            height={200}
            className="relative z-10 object-contain w-auto h-auto max-w-[180px] max-h-[180px] group-hover:scale-110 transition-transform duration-500"
            priority={false}
          />
        ) : (
          <span className="relative text-7xl z-10 group-hover:scale-110 transition-transform duration-500 block">
            {icon}
          </span>
        )}
        
        {badge && (
          <span className="absolute top-4 right-4 bg-[#f97d08] text-white text-xs font-body font-500 px-3 py-1 rounded-full tracking-wider uppercase">
            {badge}
          </span>
        )}
        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f97d08]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      {/* Text area */}
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="font-display text-2xl font-semibold text-[#1a0e00] mb-3">
          {title}
        </h3>
        <p className="font-body text-sm text-[#8a7060] leading-relaxed mb-5 flex-1">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-[#f97d08] font-body text-sm font-medium group-hover:gap-3 transition-all duration-300">
          Explore Collection
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </div>
  );
}
