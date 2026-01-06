
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ease-out ${onScreen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h2 className="text-[#D4AF37] font-bold text-lg mb-4">الحكاية بدأت من قلب التجربة</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">في بن شع بن.. مابنقولش، إنت اللي بتحكم.</h3>
            <p className="text-lg leading-relaxed text-gray-400 mb-6">
              في سوق مليان كلام، كلها بتقول إنها الأفضل، لكن في بن شع بن قررنا نسيب الفنجان هو اللي يتكلم. بدأت حكايتنا من قلب محلاتنا وخبرتنا الطويلة مع "الزبون الشريب".
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              اتعلمنا إن الأمانة وسر الخلطة هما الأساس. مابنقولش إننا أحسن ناس، إحنا بنقولك جرّب، وإنت اللي هتقول. الخبرة اللي بنيناها بننقلها لك لحد باب البيت بأعلى جودة، وأفضل سعر، وأصدق طعم.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-r border-[#D4AF37] pr-4">
                <span className="block text-3xl font-black text-white">100%</span>
                <span className="text-sm text-gray-500">جودة الخامات</span>
              </div>
              <div className="border-r border-[#D4AF37] pr-4">
                <span className="block text-3xl font-black text-white">+10</span>
                <span className="text-sm text-gray-500">سنوات خبرة</span>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${onScreen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-[#D4AF37] z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-[#D4AF37] z-0"></div>
            <img
              src="/images/blends/blend1.png"
              alt="Sh3bon Store Vibe"
              className="rounded-lg shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
