import React from 'react';

const Ticker = () => {
  const items = Array(12).fill("PLAYER'S CHOICE");

  return (
    <div 
      className="relative w-full border-y border-white/10 py-3 overflow-hidden flex whitespace-nowrap bg-[#F26522] shadow-[0_0_50px_rgba(242,101,34,0.1)]"
    >
      <div className="relative z-20 ticker-scroll flex items-center">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="text-[10px] md:text-xs font-black tracking-[0.4em] mx-12 text-white pointer-events-none uppercase"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {items.map((item, index) => (
          <span 
            key={`dup-${index}`} 
            className="text-[10px] md:text-xs font-black tracking-[0.4em] mx-12 text-white pointer-events-none uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
