import React from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?:    string;
  variant?: Variant;
  size?:    Size;
  className?: string;
  onClick?: () => void;
  type?:    "button" | "submit" | "reset";
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#f97d08] text-white hover:bg-[#e06200] shadow-[0_4px_24px_rgba(249,125,8,0.30)] hover:shadow-[0_6px_32px_rgba(249,125,8,0.45)] active:scale-[0.98]",
  outline:
    "border border-[#f97d08] text-[#f97d08] hover:bg-[#f97d08] hover:text-white",
  ghost:
    "text-[#f97d08] hover:bg-saffron-50 underline-offset-4 hover:underline",
};

const sizeStyles: Record<Size, string> = {
  sm:  "text-sm px-5 py-2.5 tracking-wide",
  md:  "text-base px-7 py-3.5 tracking-wide",
  lg:  "text-base px-9 py-4 tracking-widest uppercase",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-500 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97d08]";

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
