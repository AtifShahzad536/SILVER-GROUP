import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    year: "1947",
    title: "THE BEGINNING",
    subtitle: "SELECT IS BORN",
    description:
      "In 1947, Eigil Nielsen founded SELECT Sport. As a former professional goalkeeper for the Danish national team, Eigil had strong opinions on ball quality and set out to create the best ball in the world.",
    image: "/football/select_fodbold_1947.avif",
  },
  {
    year: "1951",
    title: "EXPANDING HORIZONS",
    subtitle: "FIRST EXPORT",
    description:
      "SELECT began exporting balls internationally in 1951, marking the beginning of its global presence in the world of sport. Quality craftsmanship crossed borders for the first time.",
    image: "/football/Select_fodbold_1951_9c89cd36-273c-4fbf-83af-98a97ae4f3af.webp",
  },
  {
    year: "1962",
    title: "FIRST FOOTBALL WITH 32 PANELS",
    subtitle: "A REVOLUTION IN DESIGN",
    description:
      "In 1962, SELECT introduced one of the greatest inventions in football history — the 32-panel ball. With 32 panels (20 hexagons and 12 pentagons), SELECT managed to create the roundest ball ever. The 32-panel design means that the ball meets wind resistance later in its flight through the air, thus maintaining a stable high speed for a longer period of time. This provides a stable and more predictable flight.",
    image: "/football/Select_fodbold_1962_cd927d76-7d9c-490d-82cd-8531602753e5.webp",
  },
  {
    year: "1972",
    title: "FIRST HANDBALL WITH 32 PANELS",
    subtitle: "SHAPING THE GAME",
    description:
      "In 1972, SELECT entered the world of handball in earnest when the first 32-panel ball was launched. This innovation changed the sport forever and set a new standard for handball manufacturing worldwide.",
    image: "/football/Select_harndbold_1972.webp",
  },
  {
    year: "1974",
    title: "WORLD CUP OFFICIAL",
    subtitle: "GLOBAL RECOGNITION",
    description:
      "SELECT balls were used in major international tournaments in 1974, cementing the brand's reputation as the gold standard in ball manufacturing at the highest levels of competition.",
    image: "/football/Select_fodbold_1951_9c89cd36-273c-4fbf-83af-98a97ae4f3af.webp",
  },
  {
    year: "2012",
    title: "TECHNOLOGICAL INNOVATION",
    subtitle: "NEW ERA BEGINS",
    description:
      "SELECT introduced cutting-edge materials and manufacturing techniques in 2012, combining decades of craft knowledge with modern technology to produce balls of unparalleled quality and performance.",
    image: "/football/Select_Brillant_Super_iBall_fodbold_2022_061cbe02-ff5c-4b13-b07d-6a81a0bb2298.webp",
  },
  {
    year: "2018",
    title: "SUSTAINABILITY FOCUS",
    subtitle: "PLAYING FOR THE PLANET",
    description:
      "In 2018, SELECT committed to sustainable production practices. The company began integrating eco-friendly materials into its manufacturing process without compromising on the legendary SELECT quality.",
    image: "/football/Futsal_-_Talento__colour_white_blue.jpg",
  },
  {
    year: "2021",
    title: "DIGITAL TRANSFORMATION",
    subtitle: "SMART SPORT",
    description:
      "SELECT embraced digital innovation in 2021, launching connected ball technologies and expanding its digital presence to bring the brand closer to athletes and fans around the world.",
    image: "/football/Gymball_-_2kg___colour_black.jpg",
  },
  {
    year: "2022",
    title: "75 YEARS OF EXCELLENCE",
    subtitle: "A LEGACY CELEBRATED",
    description:
      "SELECT celebrated 75 years of ball-making excellence in 2022. From a small Danish workshop to a global leader, the journey has been defined by innovation, quality, and an unrelenting passion for the beautiful game.",
    image: "/football/Brillant_Super_UZ_Allsvenskan__colour_white_red (1).jpg",
  },
];

export default function HistorySlider() {
  const [current, setCurrent] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef(null);

  const next = () => { setCurrent((prev) => (prev + 1) % slides.length); setIsExpanded(false); };
  const prev = () => { setCurrent((prev) => (prev - 1 + slides.length) % slides.length); setIsExpanded(false); };
  const goTo = (index) => { setCurrent(index); setIsExpanded(false); };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] bg-[#0A0A0A] overflow-hidden">

      {/* Background Watermark Year */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <AnimatePresence mode="wait">
          <motion.h2
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="text-[30vw] font-black text-white"
          >
            {slides[current].year}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-[2%] py-16 flex flex-col items-center h-full min-h-[inherit]">

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center flex-1">

          {/* Floating Image (Zero Borders) */}
          <div className="relative flex justify-center py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full max-w-[500px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full h-auto object-contain transition-transform duration-1000"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Clean Typography Container */}
          <div className="flex flex-col items-start max-w-[650px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#F26522] font-black text-sm tracking-[0.3em] uppercase mb-4">
                  HISTORICAL HERITAGE • {slides[current].year}
                </p>
                <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-5xl uppercase tracking-tight leading-none mb-4 md:mb-8">
                  {slides[current].title}
                </h1>
                
                <div className="relative mb-8">
                  <p className={`text-slate-400 font-medium text-sm md:text-lg leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                    {slides[current].description}
                  </p>
                  {slides[current].description.length > 150 && (
                     <button 
                       onClick={() => setIsExpanded(!isExpanded)}
                       className="text-[#F26522] font-black text-[10px] uppercase tracking-widest mt-2 hover:underline"
                     >
                       {isExpanded ? 'Show Less [-]' : 'Read More [+]'}
                     </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Solid Arrow Navigation */}
            <div className="flex items-center space-x-6 mt-4">
              <button
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#F26522] hover:border-[#F26522] hover:scale-110 active:scale-95 group"
              >
                <FiChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#F26522] hover:border-[#F26522] hover:scale-110 active:scale-95 group"
              >
                <FiChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Year Row (No bars, no lines) */}
        <div className="w-full mt-16 overflow-x-auto scrollbar-hide py-4 border-t border-white/5">
          <div className="flex justify-between items-center min-w-max gap-8 px-4 md:px-0">
            {slides.map((s, i) => (
              <button
                key={s.year}
                onClick={() => goTo(i)}
                className={`text-sm md:text-base font-black transition-all duration-500 tracking-widest ${i === current ? 'text-[#F26522] scale-125' : 'text-white/20 hover:text-white/50'
                  }`}
              >
                {s.year}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
