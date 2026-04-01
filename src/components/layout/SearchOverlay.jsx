import React, { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Suggestion pool ─────────────────── */
const ALL_SUGGESTIONS = [
  'Footballs', 'Handballs', 'Futsal Balls', 'Gym Balls', 'Other Balls',
  'Match & Training Wear', 'Leisure Wear', 'Goalkeeper Wear',
  'Referee Wear', 'Baselayer', 'Accessories',
  'Shin Guards', 'Ball & Sports Bags', 'Resin Products',
  'Ball Equipment', 'Training Equipment', 'Referee Equipment',
  'Training Packages', 'Bibs & Captains Band',
  'Sports Supports', 'Sports Care',
  'Training Bands',
  'Goalkeeper Gloves',
  'Football', 'Handball', 'Futsal',
  'Kids Gear', 'Select Sport', 'Sponsorships', 'Catalogue',
  'Select Lab', 'About Select', 'Contact', 'Press & News',
];

const POPULAR = [
  'Footballs', 'Goalkeeper Gloves', 'Match & Training Wear',
  'Shin Guards', 'Handball', 'Select Lab',
];

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSuggestions([]);
      setActiveIdx(-1);
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setActiveIdx(-1);
    if (val.trim().length === 0) {
      setSuggestions([]);
      return;
    }
    const filtered = ALL_SUGGESTIONS.filter((s) =>
      s.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 7);
    setSuggestions(filtered);
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((p) => Math.min(p + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((p) => Math.max(p - 1, -1));
    } else if (e.key === 'Enter' && activeIdx >= 0) {
      pickSuggestion(suggestions[activeIdx]);
    }
  };

  const pickSuggestion = (s) => {
    setQuery(s);
    setSuggestions([]);
    console.log("Searching for:", s);
  };

  const showSuggestions = suggestions.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/40 backdrop-blur-md"
            onClick={onClose}
          />

          {/* ── Minimalist Search Panel (Dark Mode) ────────────────────── */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-0 left-0 right-0 z-[2010] bg-black shadow-2xl border-b border-white/5"
          >
            {/* Fluid 5% Gutter Sync */}
            <div className="w-full px-[5%] py-6 md:py-10">
              
              <div className="flex items-center justify-between gap-6 md:gap-12">
                
                {/* Clean Input Field */}
                <div className="flex-1 flex items-center gap-4 group">
                  <Search size={22} className="text-white/20 group-focus-within:text-[#F26522] transition-colors" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for products, gear, sports…"
                    className="flex-1 bg-transparent border-none outline-none text-white text-lg md:text-2xl font-medium placeholder:text-white/20"
                  />
                  {query && (
                    <button onClick={() => { setQuery(''); setSuggestions([]); }} className="text-white/20 hover:text-white transition-colors p-2">
                       <X size={20} />
                    </button>
                  )}
                </div>

                {/* Simple Close Button */}
                <button 
                  onClick={onClose} 
                  className="flex items-center gap-2 px-4 py-2 text-white/40 hover:text-white transition-colors font-semibold text-xs tracking-widest uppercase"
                >
                  <span>CLOSE</span>
                  <X size={16} />
                </button>
              </div>

              {/* Suggestions / Popular Rows */}
              <div className="mt-8 border-t border-white/5 pt-6">
                
                {showSuggestions ? (
                  <div className="flex flex-col gap-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                     <span className="text-white/20 font-bold text-[10px] tracking-[0.2em] uppercase mb-3">Top Matches</span>
                     {suggestions.map((s, i) => (
                        <button
                          key={s}
                          onClick={() => pickSuggestion(s)}
                          className={`flex items-center justify-between p-4 rounded-xl transition-all text-left ${
                            i === activeIdx ? 'bg-white text-black' : 'text-white/40 hover:bg-white/5 hover:text-white font-medium'
                          }`}
                        >
                           <span className="text-sm md:text-base">{s}</span>
                           <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                     ))}
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                     <div className="flex items-center gap-2 flex-shrink-0">
                       <TrendingUp size={16} className="text-white/20" />
                       <span className="text-white/20 font-bold text-[10px] tracking-[0.2em] uppercase">Popular Searches</span>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {POPULAR.map(term => (
                          <button 
                            key={term}
                            onClick={() => pickSuggestion(term)}
                            className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-white/50 text-[11px] font-bold hover:bg-white hover:text-black transition-all"
                          >
                            {term}
                          </button>
                        ))}
                     </div>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
