import React from "react";
import MenuItem from "../components/MenuItem";
import { menuItems } from "../data/menuCategories";

export default function DeliciousMenu() {
  return (
    <section className="bg-[#111111] min-h-screen py-24 px-6 relative overflow-hidden flex flex-col items-center">
      
      {/* Optional: Subtle Background pattern simulation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/food.png')] mix-blend-overlay"></div>

      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#c29b57] text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase mb-4">
            Special Selection
          </p>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-[1px] bg-[#c29b57]/40"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#c29b57] bg-transparent"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c29b57]"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#c29b57] bg-transparent"></div>
            <div className="w-8 h-[1px] bg-[#c29b57]/40"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide">
            Delicious Menu
          </h2>
        </div>

        {/* Menu Grid Container */}
        <div className="w-full relative">
          
          {/* Center Vertical Divider (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-800/80 -translate-x-1/2"></div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 w-full max-w-5xl mx-auto">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-gray-300 text-sm font-light tracking-wide">
            During winter daily from <span className="text-[#c29b57] font-medium">7:00 pm</span> to <span className="text-[#c29b57] font-medium">9:00 pm</span>
          </p>
          
          <button className="px-8 py-3 border border-[#c29b57] text-[#c29b57] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#c29b57] hover:text-black transition-all duration-300">
            View All Menu
          </button>
        </div>

      </div>
    </section>
  );
}