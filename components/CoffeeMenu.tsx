
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import WhatsAppIcon from './icons/WhatsAppIcon';

const blends = [
  {
    id: 'sh3bon',
    name: 'شع بن (الأصالة)',
    composition: 'حبشي + هندي بلانتيشن + روبيستا',
    description: 'السر في التوازن؛ بن حبشي للرائحة، هندي للقوام، وروبيستا للوش المثالي. خلطة يومية صُممت لتعطيك المذاق الأصيل الذي تعودت عليه.',
    prices: [
      { weight: '125جم', plain: 80, spiced: 85 },
      { weight: '250جم', plain: 150, spiced: 160 },
      { weight: '500جم', plain: 305, spiced: 320 },
    ],
    accent: '#D4AF37', // Unified Gold
    textColor: 'black',
    image: '/images/blends/blend1.png'
  },
  {
    id: 'mazag',
    name: 'مشروع مزاج (التركيز)',
    composition: 'كولومبي + جواتيمالي + هندي بلانتيشن',
    description: 'لعشاق النكهات الواضحة والتركيز العالي. كولومبي فاخر مع لمسات الجواتيمالي لتعطيك مذاقاً ناعماً وحموضة متزنة.',
    prices: [
      { weight: '125جم', plain: 85, spiced: 90 },
      { weight: '250جم', plain: 160, spiced: 170 },
      { weight: '500جم', plain: 320, spiced: 340 },
    ],
    accent: '#D4AF37', // Unified Gold
    textColor: 'black',
    image: '/images/blends/blend2.png'
  },
  {
    id: 'wahsh',
    name: 'ليفل الوحش (السيطرة)',
    composition: 'برازيلي سانتوس + جواتيمالي + أرابيكا 100%',
    description: 'القمة في عالم القهوة. برازيلي سانتوس الفاخر مع أرابيكا منتقاة بعناية. طعم حاد، ريحة جبارة، وتأثير لا يضاهى في الصحصحة.',
    prices: [
      { weight: '125جم', plain: 110, spiced: 115 },
      { weight: '250جم', plain: 210, spiced: 220 },
      { weight: '500جم', plain: 420, spiced: 440 },
    ],
    accent: '#D4AF37', // Unified Gold
    textColor: 'black',
    image: '/images/blends/blend3.png'
  }
];

const CoffeeMenu: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, 0.05);

  const getWhatsAppLink = (blendName: string) => {
    const text = encodeURIComponent(`أهلاً بن شع بن، محتاج أستفيد بخصم الافتتاح وأطلب أوردر لخلطة: ${blendName}\n\nالوزن المطلوب:\nالكمية:\nالعنوان:`);
    return `https://wa.me/message/BD7SGEG2EIPRF1?text=${text}`;
  };

  return (
    <section id="menu" ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] font-bold text-lg mb-2">قائمة المذاق الرفيع</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">اختر مزاجك الخاص ☕</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blends.map((blend, idx) => (
            <div
              key={blend.id}
              className={`luxury-card rounded-3xl overflow-hidden flex flex-col transition-all duration-1000 ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="h-80 relative overflow-hidden bg-black/40 p-4">
                <img
                  src={blend.image}
                  alt={blend.name}
                  className="w-full h-full object-contain transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                <div
                  className="absolute top-6 right-6 px-4 py-1 rounded-full text-xs font-black shadow-2xl"
                  style={{ backgroundColor: blend.accent, color: blend.textColor }}
                >
                  {blend.id === 'wahsh' ? 'الأكثر طلباً' : blend.id === 'mazag' ? 'المفضل' : 'الأكثر مبيعاً'}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-2xl font-black mb-1 text-white">{blend.name}</h4>
                <p className="text-sm text-gray-500 mb-4 italic font-bold">{blend.composition}</p>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                  {blend.description}
                </p>

                {/* Pricing Grid */}
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-3 gap-2 mb-2 border-b border-white/10 pb-2 text-xs font-bold text-gray-500">
                    <div>الوزن</div>
                    <div>سادة <span className="text-[#D4AF37] text-[10px] block font-normal">(خصم 10%)</span></div>
                    <div>محوج <span className="text-[#D4AF37] text-[10px] block font-normal">(خصم 10%)</span></div>
                  </div>
                  {blend.prices.map((p) => (
                    <div key={p.weight} className="grid grid-cols-3 gap-2 items-center py-2 border-b border-white/5 last:border-0">
                      <div className="font-bold text-gray-300 text-sm">{p.weight}</div>
                      <div className="font-bold text-white">{p.plain}ج</div>
                      <div className="font-black text-[#D4AF37] text-lg glow-gold">{p.spiced}ج</div>
                    </div>
                  ))}
                </div>

                {/* Spiced Guarantee */}
                <div className="mb-6 bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-3 rounded-lg">
                  <p className="text-gray-300 text-xs leading-relaxed">
                    <span className="text-[#D4AF37] font-bold">💡 ضمان التحويجة:</span> التحويجة عندنا مش مجرد إضافات؛ إحنا بنستخدم أفخر أنواع الحبهان والمستكة والتحويجة الخاصة ببن شعبن. التحويجة بتنزل طازة وبناءً على طلب العميل لضمان نكهة قوية ومذاق لا يُنسى.
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(blend.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-4 rounded-xl flex items-center justify-center gap-2 font-black transition-all hover:scale-[1.02] shadow-xl hover:shadow-[#D4AF37]/20 bg-[#D4AF37] text-black"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  اطلب الآن
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-center group">
            <img src="https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?q=80&w=1999&auto=format&fit=crop" alt="Arabic Coffee" className="w-32 h-32 object-cover rounded-full border-2 border-[#D4AF37]/50 mb-4 shadow-2xl grayscale group-hover:grayscale-0 transition-all" />
            <p className="text-[#D4AF37] font-bold">أصالة المذاق العربي</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center max-w-xl shadow-2xl">
            <p className="text-gray-300">
              <span className="text-[#D4AF37] font-bold">ملحوظة:</span> الأسعار المذكورة هي أسعار العروض الحالية. الشحن مجاني لأي طلب يتخطى وزنه الـ 1000 جرام.
            </p>
          </div>
          <div className="text-center group">
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop" alt="Coffee Beans Roasting" className="w-32 h-32 object-cover rounded-full border-2 border-[#D4AF37]/50 mb-4 shadow-2xl grayscale group-hover:grayscale-0 transition-all" />
            <p className="text-[#D4AF37] font-bold">تحميص احترافي طازج</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;
