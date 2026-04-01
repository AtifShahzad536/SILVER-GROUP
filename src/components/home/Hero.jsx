import React from 'react';
import { motion } from 'framer-motion';

const VIDEO_URL =
  'https://www.select-sport.com/cdn/shop/videos/c/vp/a15a4f58c7c84e6a8ff37c206633d943/a15a4f58c7c84e6a8ff37c206633d943.HD-1080p-7.2Mbps-75294252.mp4?v=0';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black h-[31svh] md:h-[100svh]">

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_URL}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto md:h-full md:object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[8%] px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 w-full"
        >
          <h1 className="text-white font-bold tracking-widest uppercase text-center text-[11px] md:text-lg">
            OFFICIAL BALL SUPPLIER TO MAJOR LEAGUES WORLDWIDE
          </h1>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.97 }}
            className="relative px-6 py-3 md:px-10 md:py-5 bg-transparent text-white font-black tracking-widest uppercase text-[9px] md:text-sm transition-all duration-300 backdrop-blur-sm md:min-w-[320px] group border-2 border-white"
          >
            <span className="relative z-20 transition-transform block">
              Read about the Czech league and other top leagues
            </span>
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;