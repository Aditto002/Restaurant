import React from "react";

export default function MenuItem({ item }) {
  return (
    <div className="flex items-start gap-5 group">
      {/* Thumbnail Image */}
      <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Content Container */}
      <div className="flex-grow flex flex-col justify-center pt-1">
        {/* Top Row: Title, Badge, Dashed Line, Price */}
        <div className="flex items-baseline justify-between w-full mb-1.5">
          <div className="flex items-center gap-3">
            <h3 className="text-white font-serif text-lg tracking-wide group-hover:text-[#c29b57] transition-colors">
              {item.name}
            </h3>
            
            {/* Optional Badge (Seasonal/New) */}
            {item.badge && (
              <span className="bg-[#c29b57]/10 text-[#c29b57] text-[10px] tracking-widest px-1.5 py-0.5 uppercase border border-[#c29b57]/20">
                {item.badge}
              </span>
            )}
          </div>

          {/* Flex-grow Dashed Line */}
          <div className="flex-grow border-b border-dashed border-gray-700 mx-4 relative top-[-4px]"></div>

          <span className="text-[#c29b57] font-serif text-lg">
            {item.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed max-w-[85%] font-sans font-light">
          {item.description}
        </p>
      </div>
    </div>
  );
}