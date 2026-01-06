
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import CoffeeSteamIcon from './icons/CoffeeSteamIcon';

const Catchphrase: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section ref={ref} className="py-32 bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <CoffeeSteamIcon className="w-1/4 text-[#D4AF37] animate-steam" />
        <CoffeeSteamIcon className="w-1/4 text-[#D4AF37] animate-steam animate-steam-delay-1" />
        <CoffeeSteamIcon className="w-1/4 text-[#D4AF37] animate-steam animate-steam-delay-2" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <p className={`text-[#D4AF37] font-bold text-lg mb-4 transition-all duration-700 ${onScreen ? 'opacity-100' : 'opacity-0'}`}>
           ثقة واطمئنان
        </p>
        <h2 className={`text-4xl md:text-6xl font-black text-white transition-all duration-1000 transform ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          مع شعبان <span className="text-[#D4AF37]">مزاجك</span> في أمان ☕
        </h2>
        <div className={`mt-6 h-1 w-24 bg-[#D4AF37] mx-auto transition-all duration-1000 delay-500 ${onScreen ? 'scale-x-100' : 'scale-x-0'}`}></div>
      </div>

      <style>{`
        .animate-steam-delay-1 { animation-delay: 3s; }
        .animate-steam-delay-2 { animation-delay: 6s; }
      `}</style>
    </section>
  );
};

export default Catchphrase;
