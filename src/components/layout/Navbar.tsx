"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Products",   href: "/products" },
  { label: "Gallery",    href: "/gallery" },
  { label: "About Us",   href: "/about" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      {/* Top strip */}
      <div className="bg-[#f97d08] text-white text-center text-xs font-body tracking-widest py-1.5 px-4">
        <span className="font-devanagari">🕉 जय माता दी 🕉</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;Pan-India Delivery Available&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="tel:+918826858845" className="underline underline-offset-2">
          +91-8826858845
        </a>
      </div>

      <nav className="section-padding container-site flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🛕</span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold text-[#1a0e00] tracking-tight">
              Vaishno Temple
            </span>
            <span className="font-body text-[10px] text-[#f97d08] tracking-[0.2em] uppercase">
              vaishnotemple.in
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm text-[#4a3520] hover:text-[#f97d08] animated-underline transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button href="/contact" size="sm" variant="outline">
            Get Quote
          </Button>
          <Button href="http://wa.me/918826858845" size="sm" external>
            WhatsApp Us
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#1a0e00] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1a0e00] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1a0e00] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 bg-white border-t border-stone-100 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="section-padding py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-base text-[#4a3520] hover:text-[#f97d08] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 flex flex-col gap-3">
            <Button href="/contact" variant="outline" size="sm">
              Get Free Quote
            </Button>
            <Button href="http://wa.me/918826858845" size="sm" external>
              WhatsApp Us
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
