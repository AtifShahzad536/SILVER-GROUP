import React from 'react';

const PartnerMegaMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-[80px] z-[40] bg-black/80 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-[#0A0A0A] z-[500] transition-all duration-300 origin-top overflow-hidden border-b border-white/20 ${isOpen ? 'opacity-100 max-h-[800px] shadow-2xl' : 'opacity-0 max-h-0 pointer-events-none'}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 py-12">
          <div className="grid grid-cols-12 gap-8 items-start">

            <div className="col-span-12 md:col-span-4 flex flex-col gap-8 md:pl-28">
              <h3 className="text-xl font-bold tracking-wider text-white">SPONSORSHIPS</h3>
              <ul className="flex flex-col gap-4 font-medium text-[13px] text-white/50 tracking-wide">
                <li><a href="#" className="hover:text-sports-primary transition-colors">Sponsorships - Football</a></li>
                <li><a href="#" className="hover:text-sports-primary transition-colors">Sponsorships - Handball</a></li>
                <li><a href="#" className="hover:text-sports-primary transition-colors">Sponsorships - Futsal</a></li>
              </ul>
            </div>

            {/* EVERYTHING FOR YOUR CLUB Column (Col span 4) */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
              <h3 className="text-xl font-black tracking-wider leading-relaxed text-white">EVERYTHING FOR<br />YOUR CLUB</h3>
            </div>

            {/* Visual Column (Col span 4) */}
            <div className="col-span-12 md:col-span-4 flex justify-end md:pr-10">
              <div className="w-[300px] h-[300px] rounded-sm overflow-hidden shadow-lg bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop"
                  alt="Jerseys"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerMegaMenu;
