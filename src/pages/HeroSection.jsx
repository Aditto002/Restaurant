import React from "react";
import CircularScrollButton from "../components/CircularScrollButton";
import FloatingInfoCard from "../components/FloatingInfoCard";

export default function HeroSection() {
  const handleMenuScroll = () => {
    // Logic to smoothly scroll down to the menu section
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden font-sans">
      
      {/* 1. Background Image & Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Placeholder luxury food image
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')",
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" /> {/* Dark gradient overlay */}

      {/* 2. Main Content (Perfectly Centered via Flexbox) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        
        {/* Top Tagline */}
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-gray-300">
          Certified Green Business
        </p>
        
        {/* Main Heading (Elegant Serif) */}
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif leading-tight mb-4 drop-shadow-lg max-w-4xl mx-auto">
          DISCOVER THE BEST INDIAN FOOD IN
        </h1>
        
        {/* Sub-Heading (Bold Sans-Serif) */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase mb-16 text-yellow-50 drop-shadow-md">
          Indienne Cuisine
        </h2>

        {/* 3. Reusable Circular Button */}
        <CircularScrollButton
          label="Menu"
          icon="↓"
          onClick={handleMenuScroll}
          className="mt-4"
        />
      </div>

      {/* 4. Reusable Floating Info Card (Pinned to Bottom Center) */}
      <FloatingInfoCard
        title="Restaurants"
        subtitle="Opening & Closing Hours"
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 w-max"
      />
      
    </section>
  );
}