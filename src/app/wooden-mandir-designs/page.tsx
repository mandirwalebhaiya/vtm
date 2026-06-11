"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const BASE_URL =
  "https://corian-mandir-kirti-nagar.vaishnotemple.in";

export default function WoodenMandirDesignsPage() {
  const [images, setImages] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 👉 Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      let allImages: any[] = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const res = await fetch(
          `${BASE_URL}/wp-json/wp/v2/media?per_page=10&page=${page}`
        );

        const data = await res.json();
        totalPages = Number(res.headers.get("X-WP-TotalPages"));

        allImages = [...allImages, ...data];
        page++;
      }

      setImages(allImages);
    };

    fetchImages();
  }, []);

   // 🔥 👉 ADD FILTER HERE (THIS IS THE ANSWER)
  const woodenImages = images.filter((img: any) => {
    const url = img.source_url?.toLowerCase() || "";
    const alt = img.alt_text?.toLowerCase() || "";

    return url.includes("wooden") || alt.includes("wooden");
  });

  
  return (
    <div className="pt-24 p-6">
    
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {woodenImages.map((img: any,index) => (
          <div
            key={img.id}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(img.source_url)}
          >
            <Image
              src={img.source_url}
              alt={img.alt_text || "Mandir"}
              width={400}
              height={400}
              className="w-full h-[220px] object-cover rounded-lg"
              priority={index === 0} // 👈 ADD THIS LINE
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

            {/* WhatsApp Button */}
            <a
              href={getWhatsAppLink(img.source_url)}
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevent modal open
              className="absolute bottom-3 left-3 right-3 
              bg-green-600 text-white text-sm py-2 rounded-lg text-center 
              opacity-0 group-hover:opacity-100 transition"
            >
              Get Price
            </a>
          </div>
        ))}
      </div>

      {/* FULL SCREEN MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Full Image */}
            <Image
              src={selectedImage}
              alt="Full Mandir"
              width={800}
              height={800}
              className="w-full h-auto rounded-lg"
            />

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink(selectedImage)}
              target="_blank"
              className="block mt-4 bg-green-600 text-white text-center py-3 rounded-lg"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// import Image from "next/image";
// import { getWhatsAppLink } from "@/lib/whatsapp";

// // 👉 Your WordPress domain
// const BASE_URL =
//   "https://corian-mandir-kirti-nagar.vaishnotemple.in";

// // 👉 Fetch images from WordPress
// async function getImages() {
//   const res = await fetch(
//     `${BASE_URL}/wp-json/wp/v2/media`,
//     {
//       cache: "no-store",
//     }
//   );

//   return res.json();
// }

// export default async function Gallery2Page() {
//   const images = await getImages();

//   return (
//     <div className="p-6">
//       {/* Heading */}
//       <h1 className="text-2xl md:text-3xl font-bold mb-6">
//         Mandir Gallery
//       </h1>

//       {/* Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//         {images.map((img: any) => (
//           <div
//             key={img.id}
//             className="relative group border rounded-lg overflow-hidden shadow-sm"
//           >
//             {/* Image */}
//             <Image
//               src={img.source_url}
//               alt={img.alt_text || "Mandir Design"}
//               width={400}
//               height={400}
//               className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-300"
//             />

//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

//             {/* WhatsApp Button */}
//             <a
//               href={getWhatsAppLink(img.source_url)}
//               target="_blank"
//               className="absolute bottom-3 left-3 right-3 
//               bg-green-600 hover:bg-green-700 
//               text-white text-sm font-semibold 
//               py-2 rounded-lg text-center 
//               opacity-0 group-hover:opacity-100 
//               transition duration-300"
//             >
//               Get Price on WhatsApp
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
