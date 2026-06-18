export type ProductCategory = "corian" | "wooden" | "marble" | "custom";

export interface Product {
  id:          string;
  name:        string;
  category:    ProductCategory;
  tagline:     string;
  description: string;
  features:    string[];
  sizes:       string[];
  priceFrom:   string;
  badge?:      string;
  emoji:       string;
  image:       string;
  imageAlt:    string;
  popular?:    boolean;
}

export const PRODUCTS: Product[] = [
  // ── CORIAN ────────────────────────────────────────────────────────────────
  {
    id:          "corian-classic-white",
    name:        "Classic White Corian Mandir",
    category:    "corian",
    tagline:     "Timeless purity in premium Corian",
    description: "Our most popular design — a clean, all-white Corian mandir with subtle carved arches and LED-ready niches. Perfect for modern homes.",
    features:    ["Non-porous surface", "Easy to clean", "LED lighting ready", "Vastu-compliant design", "Moisture-resistant"],
    sizes:       ["2×1.5 ft", "3×2 ft", "4×2.5 ft", "Custom"],
    priceFrom:   "₹1,80,000",
    badge:       "Best Seller",
    emoji:       "🤍",
    image:       "/products/corian/corian-mandir-1.svg",
    imageAlt:    "Classic White Corian Mandir - Pristine white finish with subtle carved arches",
    popular:     true,
  },
  {
    id:          "corian-royal-mandir",
    name:        "Royal Corian Mandir",
    category:    "corian",
    tagline:     "Regal arches inspired by Mughal temples",
    description: "Multi-tier Corian mandir with sweeping arched niches, gold-inlay borders, and a built-in drawer for puja items.",
    features:    ["Multi-tier design", "Gold inlay accents", "Built-in storage drawer", "Marble-look finish", "10-year durability"],
    sizes:       ["4×3 ft", "5×3.5 ft", "Custom"],
    priceFrom:   "₹1,34,000",
    badge:       "Premium",
    emoji:       "🏛️",
    image:       "/products/corian/corian-mandir-2.svg",
    imageAlt:    "Royal Arch Corian Mandir - Multi-tier design with sweeping arches and gold inlay borders",
  },
  {
    id:          "corian-mini-home",
    name:        "Corian Mandir with Doors",
    category:    "corian",
    tagline:     "Compact elegance for apartments",
    description: "Space-saving wall-mounted Corian mandir ideal for 1BHK and 2BHK apartments. Includes backlit panel and deep shelf.",
    features:    ["Wall-mounted", "Space-saving design", "Backlit panel", "Easy installation", "Apartment-friendly"],
    sizes:       ["1.5×1 ft", "2×1.5 ft"],
    priceFrom:   "₹1,19,500",
    emoji:       "🏠",
    image:       "/products/corian/corian-mandir-3.svg",
    imageAlt:    "Mini Home Corian Mandir - Wall-mounted compact design for apartments with backlit panel",
  },

  // ── WOODEN ────────────────────────────────────────────────────────────────
  {
    id:          "wooden-teak-heritage",
    name:        "Teak Heritage Mandir",
    category:    "wooden",
    tagline:     "Pure teak, hand-carved, heirloom quality",
    description: "A statement mandir crafted from Grade-A Burma teak. Intricate hand-carved jaali panels, brass fittings, and a rich honey finish.",
    features:    ["Grade-A Burma teak", "Hand-carved jaali", "Brass fittings", "Honey/walnut finish", "Generational durability"],
    sizes:       ["3×2 ft", "4×3 ft", "5×4 ft", "Custom"],
    priceFrom:   "₹28,000",
    badge:       "Heirloom",
    emoji:       "🌿",
    image:       "/products/wooden/wooden-white-mandir.jpg",
    imageAlt:    "Teak Heritage Mandir - Hand-carved from Grade-A Burma teak with intricate jaali panels and brass fittings",
    popular:     true,
  },
  {
    id:          "wooden-sheesham-royal",
    name:        "Sheesham Royal Mandir",
    category:    "wooden",
    tagline:     "Robust sheesham with royal detailing",
    description: "Solid sheesham wood mandir with pillar columns, stepped shikhara top, and multiple deity platforms.",
    features:    ["Solid sheesham wood", "Pillar columns", "Stepped shikhara top", "Multiple platforms", "Antique polish option"],
    sizes:       ["3×2.5 ft", "4×3 ft", "Custom"],
    priceFrom:   "₹19,500",
    emoji:       "🏯",
    image:       "/products/wooden/wooden-brown-mandir.jpg",
    imageAlt:    "Sheesham Royal Mandir - Solid sheesham wood with pillar columns and stepped shikhara top",
  },
  {
    id:          "wooden-mango-compact",
    name:        "Mango Wood Compact Mandir",
    category:    "wooden",
    tagline:     "Eco-friendly, warm, and affordable",
    description: "Sustainable mango wood mandir with clean lines and warm natural grain. Great entry-level choice for first-time homeowners.",
    features:    ["Sustainable mango wood", "Natural grain finish", "Lightweight", "Easy assembly", "Budget-friendly"],
    sizes:       ["2×1.5 ft", "5×3 ft"],
    priceFrom:   "₹18,500",
    badge:       "Value Pick",
    emoji:       "🌳",
    image:       "/products/wooden/wooden-door-mandir.jpg",
    imageAlt:    "Mango Wood Compact Mandir - Eco-friendly design with natural grain finish, lightweight and affordable",
  },

  // ── MARBLE ────────────────────────────────────────────────────────────────
  {
    id:          "marble-white-makrana",
    name:        "White Makrana Marble Mandir",
    category:    "marble",
    tagline:     "The same marble as the Taj Mahal",
    description: "Exquisite Makrana white marble mandir with hand-chiselled floral motifs and a gleaming polished surface.",
    features:    ["Makrana white marble", "Hand-chiselled motifs", "Mirror polish", "Eternally cool to touch", "Temple-grade material"],
    sizes:       ["3×2 ft", "4×3 ft", "Custom"],
    priceFrom:   "₹45,000",
    badge:       "Luxury",
    emoji:       "⬜",
    image:       "/products/marble/makrana-marble-mandir.webp",
    imageAlt:    "White Makrana Marble Mandir - Exquisite marble with hand-chiselled floral motifs and mirror polish",
  },

  // ── CUSTOM ────────────────────────────────────────────────────────────────
  {
    id:          "custom-design-1",
    name:        "Fully Custom Mandir",
    category:    "custom",
    tagline:     "Your vision, our craftsmanship",
    description: "Design your dream mandir from scratch. Choose material, size, color, carving style, lighting, and storage. We build exactly what you imagine.",
    features:    ["Any material", "Any size", "3D design preview", "Dedicated craftsman", "60-day turnaround"],
    sizes:       ["Any size"],
    priceFrom:   "₹85,000",
    badge:       "Bespoke",
    emoji:       "✏️",
    image:       "/products/custom/customized-corian-mandir.jpg",
    imageAlt:    "Fully Custom Mandir - Bespoke design service with your choice of materials, sizes, and styles",
  },
   {
    id:          "custom-design-2",
    name:        "Customized Corian Mandir with Round Solid Pillars",
    category:    "custom",
    tagline:     "Your vision, our craftsmanship",
    description: "Design your dream mandir from scratch. Choose material, size, color, carving style, lighting, and storage. We build exactly what you imagine.",
    features:    ["Any material", "Any size", "3D design preview", "Dedicated craftsman", "60-day turnaround"],
    sizes:       ["Any size"],
    priceFrom:   "₹95,000",
    badge:       "Bespoke",
    emoji:       "✏️",
    image:       "/products/custom/customise-corian-mandir-2.svg",
    imageAlt:    "Fully Custom Mandir - Bespoke design service with your choice of materials, sizes, and styles",
  },
    {
    id:          "custom-design-3",
    name:        "Fully Custom Corian Mandir with Elephant Pillars",
    category:    "custom",
    tagline:     "Your vision, our craftsmanship",
    description: "Design your dream mandir from scratch. Choose material, size, color, carving style, lighting, and storage. We build exactly what you imagine.",
    features:    ["Any material", "Any size", "3D design preview", "Dedicated craftsman", "60-day turnaround"],
    sizes:       ["Any size"],
    priceFrom:   "₹1,15,000",
    badge:       "Bespoke",
    emoji:       "✏️",
    image:       "/products/custom/customise-corian-mandir-3.svg",
    imageAlt:    "Fully Custom Mandir - Bespoke design service with your choice of materials, sizes, and styles",
  },
];

export const CATEGORIES_META = {
  corian: {
    title:       "Corian Mandirs",
    description: "Ultra-durable, moisture-resistant, pristine white Corian mandirs for the modern home.",
    emoji:       "🤍",
    image:       "/categories/corian.png",
    imageAlt:    "Corian Mandir collection - Modern white finish",
  },
  wooden: {
    title:       "Wooden Mandirs",
    description: "Handcrafted from premium teak, sheesham, and mango wood with rich natural character.",
    emoji:       "🌿",
    image:       "/categories/wooden.webp",
    imageAlt:    "Wooden Mandir collection - Handcrafted teak and wood designs",
  },
  marble: {
    title:       "Marble Mandirs",
    description: "Luxurious stone mandirs handcrafted from the finest Indian marble.",
    emoji:       "⬜",
    image:       "/categories/marble.webp",
    imageAlt:    "Marble Mandir collection - Premium stone designs",
  },
  custom: {
    title:       "Custom Designs",
    description: "Bespoke mandirs designed and built to your exact specifications.",
    emoji:       "✏️",
    image:       "/categories/custom.webp",
    imageAlt:    "Custom Mandir design service - Build your dream mandir",
  },
};

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
