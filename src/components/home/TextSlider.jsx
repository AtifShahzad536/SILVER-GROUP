import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TextSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      quote: "NO ONE SHOULD BE PREVENTED FROM ENJOYING KICKING A GOOD BALL",
      author: "EIGIL NIELSEN, FOUNDER OF SELECT"
    },
    {
      quote: "THE WORLD'S FIRST FOOTBALL WITH 32 PANELS WAS INVENTED BY SELECT IN 1962",
      author: "EIGIL NIELSEN, FOUNDER OF SELECT"
    },
    {
      quote: "A GOOD FOOTBALL IS ESSENTIAL FOR A GOOD GAME. THAT'S WHY WE FOCUS ON QUALITY",
      author: "EIGIL NIELSEN, FOUNDER OF SELECT"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="relative w-full bg-[#0A0A0A] overflow-hidden border-b border-white/10">
      
      {/* Branded Split-Bar Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-[4px] flex z-20">
         <div className="h-full bg-[#F26522]" style={{ flex: '0 0 50%', clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}></div>
         <div className="h-full bg-[#1E1B6E]" style={{ flex: '0 0 50%', marginLeft: '-5%', clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 flex flex-col items-center justify-center min-h-[350px]">
        
        {/* Quote Content */}
        <div className="relative w-full text-center mb-8">
           <span className="text-4xl md:text-5xl font-serif text-white/20 absolute -top-8 left-0 md:left-12">“</span>
           
           <AnimatePresence mode="wait">
             <motion.div
               key={currentSlide}
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -10 }}
               transition={{ duration: 0.4, ease: 'easeOut' }}
               className="px-8 md:px-24"
             >
               <h3 className="text-white font-black text-xl md:text-3xl uppercase tracking-tight leading-snug mb-6 max-w-[850px] mx-auto">
                 {slides[currentSlide].quote}
               </h3>
               <div className="flex items-center justify-center space-x-3">
                 <div className="w-8 h-[1.5px] bg-[#F26522] opacity-50" />
                 <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest">
                   {slides[currentSlide].author}
                 </p>
                 <div className="w-8 h-[1.5px] bg-[#1E1B6E] opacity-50" />
               </div>
             </motion.div>
           </AnimatePresence>

           <span className="text-4xl md:text-5xl font-serif text-white/20 absolute -bottom-8 right-0 md:right-12">”</span>
        </div>

        {/* Navigation - Solid Color Minimalist Arrows */}
        <div className="flex items-center space-x-8">
          
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#F26522] hover:border-[#F26522] hover:scale-110 active:scale-95 group"
          >
            <FaChevronLeft className="text-sm group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          {/* Navigation Dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full h-1.5 ${
                  index === currentSlide 
                  ? 'w-6 bg-[#F26522]' 
                  : 'w-1.5 bg-white/10 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#F26522] hover:border-[#F26522] hover:scale-110 active:scale-95 group"
          >
            <FaChevronRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </section>
  );
}
