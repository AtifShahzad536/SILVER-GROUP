import { motion } from 'framer-motion';

export default function SustainabilitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-[2%] py-12">
      <div className="flex flex-col md:flex-row h-auto md:h-[650px] w-full border-x border-white/10">

        {/* Left Pane - Environmental Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/2 h-[400px] md:h-full group cursor-pointer border-r-2 border-white overflow-hidden"
        >
          <img
            src="https://www.select-sport.com/cdn/shop/files/SUSTAINABILITY_63f2ee20-eb83-493b-b6af-f2e2e7971375.jpg?v=1720425234&width=1200"
            alt="Environmental Transition"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-transparent transition-colors duration-500" />

          <div className="absolute bottom-12 left-12 right-12 z-10">
            <h3 className="text-white font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
              ENVIRONMENTAL <br /> TRANSITION
            </h3>
            <div className="w-20 h-1.5 bg-[#F26522] shadow-lg" />
          </div>
        </motion.div>

        {/* Central Floating Diamond Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50] hidden md:block">
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 45 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 15, delay: 0.5 }}
            className="relative w-64 h-64 border-2 border-white shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden bg-black group/hub"
          >
            {/* Inner Split Design (Rotated back to align text) */}
            <div className="absolute inset-[-50%] -rotate-45 flex flex-col items-center justify-center p-8 text-center text-white">
              {/* Two-Tone Background */}
              <div className="absolute inset-0 bg-[#F26522] z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
              <div className="absolute inset-0 bg-[#1E1B6E] z-0" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>

              {/* Divider Line */}
              <div className="absolute inset-0 bg-white/40 z-10" style={{ clipPath: 'polygon(0 0, 2px 0, 100% 100%, calc(100% - 2px) 100%)' }}></div>

              <div className="relative z-20 flex flex-col items-center">
                <p className="font-black text-[10px] tracking-[0.3em] mb-2">COMMITMENT</p>
                <h4 className="font-bold text-base leading-tight mb-6 max-w-[140px]">ECO-PERFORMANCE INNOVATION</h4>
                <button className="bg-white text-black font-black text-[10px] tracking-widest px-5 py-2 hover:bg-black hover:text-white transition-all duration-300">
                  READ MORE
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Pane - Select Lab */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full md:w-1/2 h-[400px] md:h-full group cursor-pointer overflow-hidden"
        >
          <img
            src="https://www.select-sport.com/cdn/shop/files/SELECT_lab.jpg?v=1742389828&width=1200"
            alt="Select Lab"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-transparent transition-colors duration-500" />

          <div className="absolute top-12 left-12 md:left-auto md:right-12 z-10 text-left md:text-right">
            <div className="relative inline-block px-8 py-4 overflow-hidden mb-4 border-2 border-white shadow-2xl">
              {/* Split-Diagonal Badge Design */}
              <div className="absolute inset-0 bg-[#F26522]" style={{ clipPath: 'polygon(0 0, 65% 0, 35% 100%, 0% 100%)' }}></div>
              <div className="absolute inset-0 bg-[#1E1B6E]" style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 35% 100%)' }}></div>
              <span className="relative z-10 text-white font-black text-2xl uppercase tracking-[0.25em]">SILVER LAB</span>
            </div>
            <p className="text-white/80 font-medium text-sm md:text-base tracking-wide max-w-[400px] md:ml-auto">
              Pushing the boundaries of sports tech <br className="hidden md:block" />
              through sustainable engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
