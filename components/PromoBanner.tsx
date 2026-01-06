
import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#D4AF37] text-black py-2 px-4 shadow-xl overflow-hidden animate-slide-banner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 font-bold text-sm md:text-base text-center">
        <span className="flex items-center gap-2">
          <span className="bg-black text-white px-2 py-0.5 rounded text-xs animate-pulse">لفترة محدودة</span>
          خصم 10% على جميع العبوات بمناسبة الافتتاح أونلاين!
        </span>
        <span className="hidden md:inline text-black/40">|</span>
        <span>🎁 شحن مجاني لأول أوردر داخل القاهرة</span>
        <span className="hidden md:inline text-black/40">|</span>
        <span>🚚 الشحن مجاني دائماً عند طلب 1 كيلو أو أكثر</span>
      </div>
    </div>
  );
};

export default PromoBanner;
