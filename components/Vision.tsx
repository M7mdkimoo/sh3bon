import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Vision: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section ref={ref} className="py-20 md:py-32 relative bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
            background: 'radial-gradient(circle at 50% 50%, #A77142, transparent 70%)',
            animation: 'pulse 8s infinite ease-in-out',
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ease-out transform ${onScreen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <h2 className="text-4xl font-bold mb-6 text-[#F5F5DC]">رؤيتنا</h2>
                <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-300">
                هدفنا إننا نعيد تعريف مزاج القهوة. مع كل فنجان من بنّ شعبن، بنزرع لحظة صفا، ونخلي اليوم يبدأ بطاقة وراحة بال.
                </p>
            </div>
        </div>
        {/* FIX: Replaced <style jsx> with <style> to fix parsing error in standard React projects. */}
        <style>{`
            @keyframes pulse {
                0%, 100% { transform: scale(0.8); opacity: 0.1; }
                50% { transform: scale(1.2); opacity: 0.3; }
            }
        `}</style>
    </section>
  );
};

export default Vision;
