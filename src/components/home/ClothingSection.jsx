import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hotspots = [
  {
    id: 1,
    left: "17.5%",
    top: "50%",
    title: "Training Jacket",
    description: "Windproof training jacket with hood. Perfect for cold weather warm-ups and outdoor sessions.",
    color: "Charcoal / Black",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    left: "28.5%",
    top: "47%",
    title: "Club Zip Hoodie",
    description: "Full-zip sweatshirt with Select branding. Ideal for training days and travel.",
    color: "Dark Grey",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    left: "39.5%",
    top: "42%",
    title: "Player Track Top",
    description: "Lightweight zip-up training top in vivid blue. Moisture-wicking fabric keeps you dry.",
    color: "Royal Blue",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    left: "62.5%",
    top: "58%",
    title: "Junior Kit Set",
    description: "Complete junior kit for young players — shirt, shorts & socks included in bold blue.",
    color: "Blue / White",
    sizes: ["YS", "YM", "YL", "YXL"],
  },
  {
    id: 5,
    left: "86%",
    top: "48%",
    title: "GK Jersey",
    description: "Goalkeeper jersey in high-visibility green with padded elbows and grip wristbands.",
    color: "Keeper Green",
    sizes: ["S", "M", "L", "XL"],
  },
];

export default function ClothingShowcase() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <section className="relative w-full bg-black px-[2%] py-12">
      <div
        className="relative w-full overflow-hidden border-2 border-white/5"
        style={{ paddingBottom: "49.95%" }}
      >
        {/* Background image */}
        <img
          src="https://www.select-sport.com/cdn/shop/files/New_Check-out-our-products_clothing.jpg?v=1704362014&width=2200"
          alt="Clothing Collection"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          draggable={false}
        />

        {/* Dark overlay for technical look */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Main Heritage Header */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center z-20 text-center w-full px-4">
          <span className="text-[#F26522] font-black text-[10px] md:text-sm tracking-[0.5em] uppercase mb-2">
            Professional Series
          </span>
          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-8xl tracking-tighter uppercase leading-none mb-8 drop-shadow-2xl">
            CLOTHING
          </h1>
          <button className="px-10 py-3 bg-[#F26522] border-2 border-white text-white font-black text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-[#F26522] hover:scale-110 active:scale-95 shadow-2xl">
            SEE MORE
          </button>
        </div>

        {/* Architectural Hotspots */}
        {hotspots.map((spot) => {
          const isActive = activeId === spot.id;
          return (
            <div
              key={spot.id}
              className="absolute"
              style={{ left: spot.left, top: spot.top, transform: "translate(-50%, -50%)", zIndex: 10 }}
            >
              {/* Crosshair Target Button */}
              <button
                onClick={() => toggle(spot.id)}
                className={`
                    relative w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center
                    transition-all duration-500 focus:outline-none group
                    ${isActive ? "scale-125" : "hover:scale-110"}
                  `}
              >
                {/* Architectural Circles */}
                <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 scale-75 ${isActive ? 'border-[#F26522] scale-100 opacity-100' : 'border-white opacity-40 group-hover:opacity-100'
                  }`} />

                {/* Central Target Dot */}
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-[#F26522] shadow-[0_0_15px_rgba(242,101,34,0.8)]' : 'bg-white opacity-60 group-hover:opacity-100'
                  }`} />

                {/* Pulsing Outer Indicator */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" />
                )}
              </button>

              {/* Spec-Sheet Popup */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    className="absolute z-30 bg-[#0A0A0A] border-2 border-white shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] overflow-hidden w-[220px] md:w-[300px]"
                    style={getPopupPosition(spot)}
                  >
                    {/* Branded Header Accent */}
                    <div className="h-[4px] w-full bg-[#F26522]" />

                    <div className="p-4 md:p-6 flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[#F26522] font-black text-[8px] md:text-[10px] tracking-[0.3em] uppercase">
                          SELECT SPEC
                        </span>
                        <span className="text-white/20 font-black text-[10px]">
                          {spot.id.toString().padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-white font-black text-lg md:text-2xl tracking-tighter uppercase leading-tight">
                        {spot.title}
                      </h3>

                      <p className="text-white/50 font-medium text-[10px] md:text-[12px] leading-relaxed">
                        {spot.description}
                      </p>

                      {/* Technical Detail Row */}
                      <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                        <span className="text-white/30 font-black text-[8px] uppercase tracking-widest">
                          Available Sizes
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {spot.sizes.map((s) => (
                            <span key={s} className="px-2 py-1 border border-white/20 text-white/40 font-black text-[9px] uppercase hover:border-[#F26522] hover:text-[#F26522] transition-colors cursor-pointer">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function getPopupPosition(spot) {
  const leftPct = parseFloat(spot.left);
  const topPct = parseFloat(spot.top);
  const vertical = topPct > 55 ? { bottom: "calc(100% + 20px)" } : { top: "calc(100% + 20px)" };
  const horizontal = leftPct > 70 ? { right: "0" } : leftPct < 30 ? { left: "0" } : { left: "50%", transform: "translateX(-50%)" };
  return { ...vertical, ...horizontal };
}