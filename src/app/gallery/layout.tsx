import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corian Mandir Photos & Gallery | Vaishno Temple",
  description:
    "Browse real photos of Corian and wooden Pooja Mandirs installed in homes across India. Get inspired for your own home temple.",
  alternates: { canonical: "https://vaishnotemple.in/gallery" },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
