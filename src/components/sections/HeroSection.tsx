// import Button from "@/components/ui/Button";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-pattern"
//       aria-label="Hero"
//     >
//       {/* Decorative background mandala rings */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="w-[900px] h-[900px] mandala-ring opacity-[0.06]" />
//         <div className="absolute w-[650px] h-[650px] mandala-ring opacity-[0.08]" />
//         <div className="absolute w-[430px] h-[430px] mandala-ring opacity-[0.10]" />
//         <div className="absolute w-[240px] h-[240px] mandala-ring opacity-[0.15]" />
//       </div>

//       {/* Radial glow from top */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f97d08]/10 blur-[80px] rounded-full pointer-events-none" />

//       {/* Content */}
//       <div className="relative z-10 section-padding container-site text-center pt-36 pb-24">
//         {/* Devanagari top */}
//         <p
//           className="font-devanagari text-[#f97d08] text-xl mb-6 animate-fade-in"
//           style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
//         >
//           🕉 जय माता दी — हर घर में हो एक मंदिर 🕉
//         </p>

//         {/* Eyebrow */}
//         <p
//           className="font-body text-xs tracking-[0.3em] uppercase text-[#8a7060] mb-5 animate-fade-up"
//           style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
//         >
//           Handcrafted with Devotion · Pan-India Delivery
//         </p>

//         {/* H1 */}
//         <h1
//           className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#1a0e00] leading-[1.05] tracking-tight mb-6 animate-fade-up"
//           style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
//         >
//           Sacred{" "}
//           <span className="relative inline-block">
//             <span className="text-[#f97d08]">Mandirs</span>
//             <svg
//               className="absolute -bottom-2 left-0 w-full"
//               viewBox="0 0 300 12"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M2 10 C 60 2, 240 2, 298 10"
//                 stroke="#f97d08"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 fill="none"
//                 opacity="0.5"
//               />
//             </svg>
//           </span>
//           <br />
//           for Every Home
//         </h1>

//         {/* Subheadline */}
//         <p
//           className="font-body text-lg md:text-xl text-[#4a3520] max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
//           style={{ animationDelay: "0.45s", opacity: 0, animationFillMode: "forwards" }}
//         >
//           Premium Corian and wooden Pooja Mandirs — custom-designed to bring
//           divine grace to your home, office, or temple.
//         </p>

//         {/* CTAs */}
//         <div
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up"
//           style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
//         >
//           <Button href="/products" size="lg">
//             Explore Mandirs
//           </Button>
//           <Button href="/contact" size="lg" variant="outline">
//             Get Free Quote
//           </Button>
//         </div>

//         {/* Trust stats */}
//         <div
//           className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up"
//           style={{ animationDelay: "0.75s", opacity: 0, animationFillMode: "forwards" }}
//         >
//           {[
//             { value: "10,000+", label: "Happy Families" },
//             { value: "18+ Yrs",  label: "Of Craftsmanship" },
//             { value: "All India", label: "Delivery" },
//           ].map((stat) => (
//             <div key={stat.label} className="text-center">
//               <p className="font-display text-2xl md:text-3xl font-semibold text-[#f97d08]">
//                 {stat.value}
//               </p>
//               <p className="font-body text-xs text-[#8a7060] mt-1 tracking-wide">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll hint */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
//         <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[#8a7060]">Scroll</p>
//         <div className="w-px h-10 bg-gradient-to-b from-[#f97d08]/60 to-transparent" />
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const images = [
  "/hero/mandir1.jpg",
  "/hero/mandir2.jpg",
  "/hero/mandir3.jpg",
  // "/hero/mandir4.jpg",
  // "/hero/mandir5.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Mandir Background"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[4000ms] ${
              index === current
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/70" /> * */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[3px]" />
      </div> 

      {/* <div className="absolute inset-0 z-0">
  {images.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        index === current ? "opacity-100" : "opacity-0"
      }`}
    > */}
      {/* Image */}
      {/* <img
        src={img}
        alt="Mandir Background"
        className="w-full h-full object-cover scale-110"
      /> */}

      {/* 🔥 STRONG OVERLAY (this fixes your issue) */}
      {/* <div className="absolute inset-0 bg-black/70" />
    </div>
  ))}
</div> */}


      {/* ✨ Mandala Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div className="w-[900px] h-[900px] mandala-ring opacity-[0.05]" />
        <div className="absolute w-[650px] h-[650px] mandala-ring opacity-[0.07]" />
        <div className="absolute w-[430px] h-[430px] mandala-ring opacity-[0.09]" />
        <div className="absolute w-[240px] h-[240px] mandala-ring opacity-[0.12]" />
      </div>

      {/* 🌟 Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 pb-20">

        {/* Top Line */}
        <p className="text-[#f97d08] text-lg-bold md:text-xl mb-6">
          {/* 🕉 Har ghar me ek shant jagah… jahan dil ko sukoon mile 🕉 */}
          🕉 | जय माता दी — हर घर में हो एक मंदिर | 🕉
        </p>

        {/* Eyebrow */}
        <p className="text-xs tracking-[0.3em] uppercase text-gray-700 mb-5">
          Handcrafted with Devotion · Pan-India Delivery
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-gray-700 leading-tight mb-6">
          Unique{" "}
          <span className="text-[#f97d08] relative">
            Mandirs
            <span className="block h-[2px] bg-[#f97d08] mt-1 w-full opacity-70"></span>
          </span>
          for Every Home
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mandir sirf ek structure nahi hota…
          yeh ghar ki positivity ka source hota hai.  
          Aur hum wahi banate hain — dil se.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <Button href="/products" size="lg">
            Explore Mandirs
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            Get Free Quote
          </Button>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: "10,000+", label: "Khush Ghar Parivaar" },
            { value: "10+ Yrs", label: "Vishwas Ke Saal" },
            { value: "All India", label: "Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-[#f97d08]">
                {stat.value}
              </p>
              <p className="text-xs text-gray-700 mt-1 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60 z-10">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600">
          Scroll
        </p>
        <div className="w-px h-8 bg-gradient-to-b from-[#f97d08]/60 to-transparent" />
      </div>
    </section>
  );
}