import React from 'react';
import { motion } from 'framer-motion';

export default function GoalkeeperGlovesSection() {
  return (
    <section className="w-full bg-black py-16 px-[2%]">
      <div className="w-full flex flex-col md:flex-row gap-[3%] items-stretch">
        
        {/* Left - Elite Spec Card */}
        <div
          className="relative flex-1 flex flex-col items-start justify-center text-left px-10 py-20 border-2 border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Mixed Brand Split Background (Clip-Path) */}
          <div className="absolute inset-0 bg-[#1E1B6E] z-0"></div>
          <div className="absolute inset-0 bg-[#F26522] z-0 shadow-2xl" style={{ clipPath: 'polygon(0 0, 45% 0, 0 45%)' }}></div>
          
          {/* Subtle Divider Line */}
          <div className="absolute bg-white/20 z-10" style={{ top: 0, left: '22.5%', width: '1px', height: '100%', transform: 'rotate(45deg)', transformOrigin: 'top' }}></div>

          <div className="relative z-20">
            <span className="text-white/40 font-black text-[10px] tracking-[0.5em] uppercase mb-4 block">
              Professional Gear
            </span>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] mb-8 tracking-tighter">
              2024 GOALKEEPER
              <br />
              <span className="text-white/40">GLOVES</span>
            </h2>

            <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-[90%]">
              We proudly present our 2024 glove collection, crafted to meet every
              goalkeeper's needs. Regardless of weather conditions or skill
              level, we have the perfect glove for you.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#F26522] border-2 border-white text-white font-black text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(242,101,34,0.4)] hover:bg-white hover:text-[#F26522]"
            >
              See all gloves
            </motion.button>
          </div>
        </div>

        {/* Right - Cinematic Product Video */}
        <div className="flex-1 min-h-[500px] relative overflow-hidden border-2 border-white/10 group">
          <video
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://www.select-sport.com/cdn/shop/videos/c/vp/05b072ff0f6547d0ac4a35024391ff3f/05b072ff0f6547d0ac4a35024391ff3f.HD-1080p-7.2Mbps-22875215.mp4?v=0" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          
          {/* Architectural Elements */}
          <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
             <div className="w-12 h-[2px] bg-white/40" />
             <div className="w-6 h-[2px] bg-white/40" />
          </div>
        </div>

      </div>
    </section>
  );
}