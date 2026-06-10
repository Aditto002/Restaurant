import React from "react";

const ContactBanner = ({
  addressLine1 = "ADDRESS: 7 BOULEVARD DE LA LIBERATION,",
  addressLine2 = "05000 GAP, FRANCE",
  phoneLabel = "PHONE:",
  phoneNumber = "06 05 75 24 71",
  emailLabel = "EMAIL:",
  emailAddress = "IS05@HOTMAIL.COM",
  className = "",
}) => {
  return (
    <div
      className={`bg-[#784E26] text-white font-bold uppercase font-sans
        rounded-r-[2.5rem] md:rounded-r-[3.5rem] rounded-l-none
        grid grid-cols-1 md:grid-cols-3 items-center justify-between
        w-full px-6 md:px-12 py-8 md:py-4 gap-8 md:gap-4 shadow-2xl ${className}`.trim()}
    >
      {/* LEFT COLUMN: Address Block */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left text-sm md:text-base tracking-wide leading-relaxed">
        <span>{addressLine1}</span>
        <span>{addressLine2}</span>
      </div>

      {/* CENTER COLUMN: Storefront Icon + Phone Block */}
      <div className="flex flex-col items-center justify-center relative">
        {/* Customized Line-Art Storefront SVG matching your design */}
        <svg
          className="w-20 h-20 text-black/90 mb-1"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Top Fork & Spoon Sign Circle */}
          <circle cx="50" cy="22" r="10" strokeWidth="2.5" />
          {/* Fork Lines */}
          <line x1="47" y1="17" x2="47" y2="23" strokeWidth="1.5" />
          <line x1="45" y1="17" x2="45" y2="20" strokeWidth="1.5" />
          <line x1="49" y1="17" x2="49" y2="20" strokeWidth="1.5" />
          {/* Spoon Line */}
          <path d="M53 16.5 C55 16.5, 55 21, 53 21 Z" fill="currentColor" />
          <line x1="53" y1="21" x2="53" y2="25" strokeWidth="1.5" />
          
          {/* Roof / Awning */}
          <polygon points="25,52 75,52 68,36 32,36" strokeWidth="2.5" />
          <line x1="39" y1="36" x2="35" y2="52" />
          <line x1="50" y1="36" x2="50" y2="52" />
          <line x1="61" y1="36" x2="65" y2="52" />
          
          {/* Building Body & Window */}
          <path d="M29,52 L29,82 L71,82 L71,52" strokeWidth="2.5" />
          <rect x="37" y="60" width="26" height="14" strokeWidth="2" />
          <line x1="42" y1="71" x2="58" y2="63" strokeWidth="1.5" /> {/* Window reflection line */}
          
          {/* Ground Foundation Line */}
          <line x1="21" y1="82" x2="79" y2="82" strokeWidth="3" />
        </svg>

        {/* Phone number nested beautifully over the bottom architecture baseline */}
        <div className="text-sm md:text-base tracking-wide z-10 bg-[#784E26] px-2 whitespace-nowrap">
          <span className="opacity-90">{phoneLabel} </span>
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="underline underline-offset-4 decoration-white decoration-2 hover:text-white/80 transition-all"
          >
            {phoneNumber}
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: Email Block */}
      <div className="flex items-center justify-center md:justify-end text-center md:text-right text-sm md:text-base tracking-wide whitespace-nowrap">
        <p>
          <span className="opacity-90">{emailLabel} </span>
          <a
            href={`mailto:${emailAddress}`}
            className="underline underline-offset-4 decoration-white decoration-2 hover:text-white/80 transition-all"
          >
            {emailAddress}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;