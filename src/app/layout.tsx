import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaishnotemple.in"),
  title: {
    default: "Vaishno Temple Kirti Nagar — Corian & Wooden Mandir Shop in Delhi",
    template: "%s | Vaishno Temple",
  },
  description:
    "Vaishno Temple crafts premium Corian and wooden Pooja Mandirs for homes and offices across India. Custom designs, divine craftsmanship, pan-India delivery.",

    
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" }, // fallback for old browsers
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
 
  manifest: "/site.webmanifest",
  keywords: [
    "corian mandir",
    "wooden mandir",
    "pooja mandir",
    "home temple",
    "custom mandir",
    "vaishno temple",
    "pooja ghar",
    "marble mandir",
  ],
  authors: [{ name: "Vaishno Temple", url: "https://vaishnotemple.in" }],
  creator: "Vaishno Temple",
  publisher: "Vaishno Temple",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vaishnotemple.in",
    siteName: "Vaishno Temple",
    title: "Vaishno Temple — Handcrafted Corian & Wooden Mandirs",
    description:
      "Premium handcrafted Corian and wooden Pooja Mandirs. Custom designs for every home. Pan-India delivery.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaishno Temple — Premium Mandirs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishno Temple — Handcrafted Corian & Wooden Mandirs",
    description:
      "Premium handcrafted Corian and wooden Pooja Mandirs. Custom designs for every home.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://vaishnotemple.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
