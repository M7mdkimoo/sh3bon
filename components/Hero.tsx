
import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import Logo3D from './Logo3D';

interface HeroProps {
  scrollPosition: number;
}

const Hero: React.FC<HeroProps> = ({ scrollPosition }) => {
  return (
    <section
      className="min-h-[95vh] flex items-center justify-center relative text-white px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background with subtle coffee bean texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')`,
          transform: `scale(${1 + scrollPosition * 0.0001})`,
          filter: 'brightness(0.2)'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

      <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div
          className="text-center md:text-right transition-all duration-1000 ease-out md:col-start-2 md:row-start-1" // Reorder for desktop if needed, or just force alignment
          style={{ opacity: Math.max(0, 1 - scrollPosition / 600) }}
        >
          <div className="mb-6 flex justify-center md:justify-end w-full"> {/* Strict End Alignment */}
            {/* BRAND LOGO */}
            <div className="relative z-20 w-48 md:w-[280px]">
              <Logo3D variant="hero" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in-down leading-tight">
            كلها <span className="text-[#D4AF37] text-shadow-gold">بتقول!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto md:ml-auto md:mr-0 leading-relaxed animate-fade-in-up">
            في بن شع بن.. مابنقولش، إنت اللي بتحكم. الخبرة اللي بنيناها بننقلها لك لحد باب البيت بأعلى جودة.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 animate-fade-in-up">
            <a href="#menu" className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-black text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl">
              اكتشف الخلطات
            </a>
            <a href="https://wa.me/message/BD7SGEG2EIPRF1" target="_blank" rel="noopener noreferrer" className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-black text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2">
              <WhatsAppIcon className="w-6 h-6" />
              اطلب الآن
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center animate-fade-in-right relative group perspective-1000 md:col-start-1 md:row-start-1">
          <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[100px] rounded-full scale-75 animate-pulse"></div>
          {/* HERO MOCKUP: Shopping Bag (Real Life 3D Effect) */}
          <img
            src="/images/blends/blend4.png"
            alt="Sh3bon Shopping Bag"
            className="w-full max-w-lg relative z-10 transition-transform duration-700 ease-out group-hover:rotate-y-12 group-hover:scale-110 group-hover:-translate-y-4 rounded-3xl"
            style={{
              mixBlendMode: 'multiply', // Hides white background on dark theme
              filter: 'contrast(1.1) drop-shadow(0 25px 50px rgba(0,0,0,0.6))',
              transformStyle: 'preserve-3d'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s forwards; opacity: 0; }
        .animate-fade-in-right { animation: fade-in-right 1.2s ease-out 0.5s forwards; opacity: 0; }
        
        .animate-float {
            animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
