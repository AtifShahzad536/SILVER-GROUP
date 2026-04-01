import React from 'react';
import { motion } from 'framer-motion';

const MyTraining = () => {
  return (
    <section className="w-full px-[5%] py-12 bg-black">
      <div className="flex flex-col md:flex-row gap-[3%] items-stretch">
        
        {/* Left — Professional Training Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[500px] border-2 border-white/10 group">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
            alt="My Training"
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          
          {/* Architectural Corner Markers */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/40" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/40" />
        </div>

        {/* Right — PRO HUB Content Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full md:w-1/2 flex items-center justify-center px-8 md:px-[8%] py-16 overflow-hidden border-2 border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          {/* Mixed Brand Split Background (Clip-Path) */}
          <div className="absolute inset-0 bg-[#1E1B6E] z-0"></div>
          <div className="absolute inset-0 bg-[#F26522] z-0 shadow-2xl" style={{ clipPath: 'polygon(0 0, 45% 0, 0 45%)' }}></div>
          
          {/* Subtle Divider Line */}
          <div className="absolute bg-white/20 z-10" style={{ top: 0, left: '22.5%', width: '1px', height: '100%', transform: 'rotate(45deg)', transformOrigin: 'top' }}></div>

          <div className="relative z-20 text-center flex flex-col items-center">
            <span className="text-white font-black text-[10px] tracking-[0.4em] uppercase mb-4 opacity-60">
               Innovation Series
            </span>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 text-white leading-[0.9]">
              MY TRAINING
            </h2>

            <p className="text-xs md:text-sm font-black uppercase tracking-[0.15em] mb-8 leading-relaxed text-white/70 max-w-[85%]">
              OUR BRAND NEW CATEGORY WITH TRAINING GEAR FOR BOTH INDIVIDUAL AND TEAM WORKOUTS
            </p>

            <p className="text-sm text-white/80 leading-relaxed mb-8 font-medium max-w-[90%]">
              My Training has everything you need to get the most out of your workouts. Perfect for warm-ups, cool-downs, or strength training between team practices.
            </p>

            <p className="text-[10px] font-black tracking-[0.2em] mb-12 uppercase text-white opacity-40">
              SELECT is player's choice – elite training equipment.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#F26522] border-2 border-white text-white font-black text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-[#F26522] shadow-[0_20px_40px_-10px_rgba(242,101,34,0.4)]"
            >
              Discover the Collection
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyTraining;
