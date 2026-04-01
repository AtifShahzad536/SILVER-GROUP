import React, { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationDrawer = ({ isOpen, onClose, data }) => {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const { categories = [] } = data || {};

  useEffect(() => {
    if (!isOpen) setExpandedIdx(null);
  }, [isOpen]);

  const toggleCategory = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/70 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* COMPACT DRAWER CONTAINER */}
      <div className={`fixed top-0 left-0 h-[100dvh] bg-[#0A0A0A] z-[120] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform flex flex-col border-r border-white/5 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-[380px] max-w-[90vw]`}>
        
        {/* DUAL-BRAND SIDE RIBBON */}
        <div className="absolute top-0 left-0 bottom-0 w-[4px] flex flex-col z-[130]">
           <div className="flex-1 bg-[#F26522]" />
           <div className="flex-1 bg-[#1E1B6E]" />
        </div>

        {/* HEADER AREA */}
        <div className="p-8 flex items-center justify-between border-b border-white/5">
           <span className="text-white font-black text-xs tracking-[0.4em] uppercase opacity-40">
             Menu
           </span>
           <button 
             onClick={onClose}
             className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#F26522] hover:border-[#F26522] active:scale-90 group"
           >
             <X size={18} className="stroke-[3]" />
           </button>
        </div>

        {/* COMPACT ACCORDION CONTENT */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pt-6 px-4">
           <ul className="flex flex-col">
              {categories.map((cat, idx) => {
                const isObj = typeof cat === 'object';
                const name = isObj ? cat.name : cat;
                const subCats = isObj && cat.subCategories ? cat.subCategories : [];
                const hasSub = subCats.length > 0;
                const isExpanded = expandedIdx === idx;

                return (
                  <li key={idx} className="mb-2">
                    <button
                      onClick={() => hasSub ? toggleCategory(idx) : null}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                        isExpanded ? 'bg-white/5' : 'hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className={`text-[15px] font-black tracking-widest uppercase transition-all duration-300 ${
                        isExpanded ? 'text-[#F26522] scale-105 origin-left' : 'text-white/60 group-hover:text-white'
                      }`}>
                        {name}
                      </span>
                      {hasSub && (
                        <div className={`transition-transform duration-500 ${isExpanded ? 'rotate-180 text-[#F26522]' : 'text-white/20'}`}>
                           <ChevronDown size={18} className="stroke-[3]" />
                        </div>
                      )}
                    </button>

                    {/* NESTED SUB-MENU */}
                    <AnimatePresence>
                      {isExpanded && hasSub && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="py-2 pl-4 flex flex-col gap-1">
                             {subCats.map((sub, sIdx) => (
                               <li key={sIdx}>
                                 <button className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-[#F26522]/10 group transition-colors">
                                    <div className="w-8 h-8 flex-shrink-0 bg-white/5 rounded-md flex items-center justify-center p-1 group-hover:bg-[#F26522]/20 transition-colors">
                                       <img 
                                         src={sub.image} 
                                         alt={sub.name} 
                                         className="w-full h-full object-contain" 
                                       />
                                    </div>
                                    <span className="text-[13px] font-bold text-white/40 group-hover:text-white transition-colors tracking-wide">
                                      {sub.name}
                                    </span>
                                 </button>
                               </li>
                             ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
           </ul>
        </div>

        {/* MINIMALIST FOOTER */}
        <div className="p-8 border-t border-white/5 bg-white/[0.01]">
           <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <span className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">
                    Heritage • 75 Years
                 </span>
                 <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1E1B6E]" />
                 </div>
              </div>
              <p className="text-[10px] text-white/30 leading-relaxed font-medium">
                Legendary craft from Denmark, powering the beautiful game since 1947.
              </p>
           </div>
        </div>

      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
      `}</style>
    </>
  );
};

export default NavigationDrawer;
