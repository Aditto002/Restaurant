import { useState } from "react";
import MenuCard from "./MenuCard";
import { initialMenus } from "../data/menuData";

export default function MenuShowcase() {
  // State represents the current positions: [Left, Center, Right]
  const [slots, setSlots] = useState([
    initialMenus[0],
    initialMenus[1],
    initialMenus[2],
  ]);

  const handleSwap = (clickedIndex) => {
    // If the center card (index 1) is clicked, do nothing.
    if (clickedIndex === 1) return;

    // Create a new array to trigger a React re-render
    const newSlots = [...slots];

    // Swap the clicked side card with the center card
    const temp = newSlots[1];
    newSlots[1] = newSlots[clickedIndex];
    newSlots[clickedIndex] = temp;

    // The unclicked index remains completely untouched.
    setSlots(newSlots);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 flex flex-col items-center justify-center font-serif overflow-hidden relative">
      
      {/* Subtle luxury background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black z-0 pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-xs md:text-sm tracking-[0.4em] text-yellow-600 uppercase mb-3 font-sans">
          Flavors for Royalty
        </h2>
        <h1 className="text-4xl md:text-6xl font-normal tracking-wide mb-6 uppercase text-yellow-50">
          Indienne Cuisine
          <br className="hidden md:block" /> Special Day Menu
        </h1>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-yellow-600"></div>
          <span className="text-yellow-600 text-xl">✦</span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-yellow-600"></div>
        </div>
      </div>

      {/* Shared Element Layout Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-7xl">
        {slots.map((menuItem, index) => {
          // Explicitly define the center position
          const isCenter = index === 1;

          return (
            <MenuCard
              key={menuItem.id} // Standard React key mapping
              menu={menuItem}
              isActive={isCenter}
              onClick={() => handleSwap(index)}
            />
          );
        })}
      </div>

      {/* Action CTA */}
      <div className="mt-20 relative z-10">
        <button className="px-10 py-4 bg-transparent border border-yellow-600/50 text-yellow-500 rounded-sm hover:bg-yellow-600 hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-sm font-sans cursor-pointer">
          Regular Menu
        </button>
      </div>
    </section>
  );
}