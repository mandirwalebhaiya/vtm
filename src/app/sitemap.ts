import { MetadataRoute } from "next";
import { areas } from "@/data/areas";
import { products } from "@/data/products";
import { noidaAreas } from "@/data/noidaAreas";

const BASE_URL = "https://vaishnotemple.in";

export default function sitemap(): MetadataRoute.Sitemap {

  // ─── Main static pages ───────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // ─── Delhi main city page ────────────────────────────────────────────
  const cityPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/corian-mandir-in-delhi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/corian-mandir-in-noida`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/corian-mandir-in-gurugram`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },    
  ];

  
  
  // ─── Kirti Nagar Shop main  page ────────────────────────────────────────────
  const shopPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/corian-mandir-shop-in-kirti-nagar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];


  // ─── Area pages (10 areas) ───────────────────────────────────────────
  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${BASE_URL}/corian-mandir-in-delhi/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ─── Product pages (10 areas × 12 products = 120 pages) ─────────────
  const productPages: MetadataRoute.Sitemap = areas.flatMap((area) =>
    products.map((product) => ({
      url: `${BASE_URL}/corian-mandir-in-delhi/${area.slug}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );


    // ─── Area pages (10 areas) ───────────────────────────────────────────
  const noidaAreaPages: MetadataRoute.Sitemap = noidaAreas.map((noidaArea) => ({
    url: `${BASE_URL}/corian-mandir-in-noida/${noidaArea.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ─── Product pages (10 areas × 12 products = 120 pages) ─────────────
  const noidaProductPages: MetadataRoute.Sitemap = noidaAreas.flatMap((noidaArea) =>
    products.map((product) => ({
      url: `${BASE_URL}/corian-mandir-in-noida/${noidaArea.slug}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );


  return [
    ...staticPages,
    ...cityPage,
    ...areaPages,
    ...productPages,
    ...shopPage,
    ...noidaAreaPages,
    ...noidaProductPages,
  ];
}