'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

// Gallery items — with image paths
const GALLERY_ITEMS = [
  { id: 1, category: "corian",  label: "Classic White Corian Mandir — Delhi",     image: "/gallery/corian-delhi.jpg", size: "tall" },
  { id: 2, category: "wooden",  label: "Teak Heritage Mandir — Mumbai",            image: "/gallery/wooden-mandir-mumbai.jpg", size: "square" },
  { id: 3, category: "corian",  label: "Royal Arch Corian — Bangalore",            image: "/gallery/corian-bangalore.jpg", size: "square" },
  { id: 4, category: "wooden",  label: "Sheesham Royal Mandir — Hyderabad",        image: "/gallery/wooden-mandir-doors.webp", size: "square" },
  { id: 5, category: "marble",  label: "Makrana Marble Mandir — Jaipur",           image: "/gallery/marble-jaipur.jpg", size: "tall" },
  { id: 6, category: "corian",  label: "Mini Home Corian — Pune",                  image: "/gallery/corian-pune.jpg", size: "tall" },
  { id: 7, category: "wooden",  label: "Mango Wood Compact — Ahmedabad",           image: "/gallery/wooden-mandir-kirti-nagar.webp", size: "tall" },
  { id: 8, category: "corian",  label: "Office Corian Mandir — Gurgaon",           image: "/gallery/corian-gurgaon.jpg", size: "square" },
  { id: 9, category: "custom",  label: "Custom 7ft Floor Mandir — Chennai",        image: "/gallery/custom-corian-mandir.jpg", size: "tall" },
  { id: 10, category: "corian", label: "Corian Ganesh Carved Design Mandir — Kirti Nagar",              image: "/gallery/corian-mandir-ganesh-design.webp", size: "tall" },
  { id: 11, category: "corian", label: "Backlit Corian Panel Mandir — Noida",      image: "/gallery/corian-noida.jpg", size: "tall" },
  { id: 12, category: "marble", label: "Lotus Carved Marble — Varanasi",           image: "/gallery/marble-varanasi.jpg", size: "square" },
  { id: 13, category: "corian", label: "Shivji Corian Mandir — Kirti Nagar",       image: "/gallery/corian-mandir-kirti-nagar.jpg", size: "square" },
  { id: 14, category: "corian", label: "Bansuri Corian Mandir — Janakpuri",        image: "/gallery/corian-mandir-janakpuri.jpg", size: "square" },
  { id: 14, category: "corian", label: "Rounded Corner Corian Mandir — Janakpuri",        image: "/gallery/corian-mandir-tilak-nagar.webp", size: "tall" },
  { id: 15, category: "corian", label: "Best Corian Mandir — Kirti Nagar",        image: "/gallery/best-corian-mandir-kirti-nagar.webp", size: "tall" },
];

const FILTER_TABS = ["All", "Corian", "Wooden", "Marble", "Custom"];

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter items based on selected tab
  const filteredItems = useMemo(() => {
    if (selectedFilter === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(
      (item) => item.category === selectedFilter.toLowerCase()
    );
  }, [selectedFilter]);
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#fdfaf5] overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#f97d08]/6 blur-[70px] rounded-full pointer-events-none" />
        <div className="section-padding container-site relative z-10">
          <nav className="font-body text-xs text-[#8a7060] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#f97d08] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1a0e00]">Gallery</span>
          </nav>
          <SectionHeading
            eyebrow="Real Installations"
            title="Our Mandir Designs, In Homes Across India"
            subtitle="Every mandir you see here was crafted and installed by our team. Real homes, real families, real devotion."
            centered={false}
          />
        </div>
      </section>

      {/* Filter tabs — interactive with state */}
      <section className="sticky top-[88px] z-30 bg-white border-b border-stone-100 shadow-sm">
        <div className="section-padding container-site">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`flex-shrink-0 font-body text-sm px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                  selectedFilter === tab
                    ? "bg-[#f97d08] text-white"
                    : "text-[#4a3520] hover:bg-[#fff8f0] hover:text-[#f97d08] border border-stone-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-style gallery grid */}
      <section className="py-16 bg-white">
        <div className="section-padding container-site">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {filteredItems.map((item) => {
              const heightClass =
                item.size === "tall"   ? "h-80"  :
                item.size === "wide"   ? "h-52"  : "h-64";
              return (
                <div
                  key={item.id}
                  className="break-inside-avoid group relative overflow-hidden rounded-sm border border-stone-100 hover:border-[#f97d08]/30 hover:shadow-[0_8px_36px_rgba(249,125,8,0.10)] transition-all duration-500 cursor-pointer"
                >
                  {/* Image placeholder */}
                  <div
                    className={`${heightClass} bg-gradient-to-br from-[#fff8f0] to-[#fdfaf5] flex items-center justify-center relative overflow-hidden`}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#1a0e00]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-end p-4">
                      <p className="font-body text-xs text-white/80 text-center leading-snug">
                        {item.label}
                      </p>
                    </div>
                  </div>
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-[#f97d08] font-body text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-[#8a7060]">No items found for this category.</p>
            </div>
          )}

          {/* Load more */}
          {filteredItems.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Photos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Share your mandir section */}
      <section className="py-16 bg-[#fdfaf5] border-t border-stone-100">
        <div className="section-padding container-site">
          <div className="bg-white border border-[#f97d08]/15 rounded-sm p-10 md:p-16 text-center max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f97d08] to-transparent" />
            <span className="text-4xl block mb-4">📸</span>
            <h2 className="font-display text-3xl font-semibold text-[#1a0e00] mb-3">
              Share Your Vaishno Temple Mandir
            </h2>
            <p className="font-body text-sm text-[#8a7060] leading-relaxed mb-6">
              Tag us on Instagram{" "}
              <a href="https://instagram.com/vaishnotemple" className="text-[#f97d08]">
                @vaishnotemple
              </a>{" "}
              and get featured in our gallery. We love seeing mandirs in their forever homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="https://instagram.com/vaishnotemple" external>
                Follow on Instagram
              </Button>
              <Button href="/contact" variant="outline">
                Submit Your Photo
              </Button>
            </div>
          </div>
        </div>
      </section>
           
    </>
  );
}
