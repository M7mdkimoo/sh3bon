
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const QualitySection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(ref);

    return (
        <section ref={ref} className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#151515]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-[#D4AF37] font-bold text-lg mb-2">التزامنا بالدقة</h2>
                <h3 className="text-4xl font-black text-white mb-16">جودة بنلمسها في كل تفصيلة</h3>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto text-right">
                    {/* Text (Left Side visually in RTL -> Order 2) */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300 md:order-2 ${onScreen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-black text-xl">١</div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">اختيار الحبة</h4>
                                <p className="text-gray-400 text-lg">خبرتنا السنين في محلاتنا خلتنا نعرف نختار أجود المحاصيل من إثيوبيا، كولومبيا، والبرازيل. بننتقي الحبة اللي تظبط المود وتدي أعلى تركيز.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-black text-xl">٢</div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">التحميص والطحن الطازج</h4>
                                <p className="text-gray-400 text-lg">القهوة روح، وعشان كدة بنحمص ونطحن طازة عند كل أوردر. بنحافظ على الزيوت العطرية والنكهة القوية اللي بتشمها أول ما تفتح الكيس.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-black text-xl">٣</div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">جودة 'كلها بتقول'</h4>
                                <p className="text-gray-400 text-lg">إحنا مابنقولش، إحنا بنسيب زباينا اللي جربونا على أرض الواقع هما اللي يقولوا. جودة براند عالمي، بروح وخبرة المطحنة المصرية الأصيلة.</p>
                            </div>
                        </div>
                    </div>

                    {/* Image (Right Side visually in RTL -> Order 1) */}
                    <div className={`transition-all duration-1000 md:order-1 ${onScreen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-[#D4AF37]/20 rounded-3xl blur-2xl group-hover:bg-[#D4AF37]/30 transition-all"></div>
                            {/* MOCKUP: Back Label Image */}
                            <img
                                src="/images/blends/blend2.png"
                                alt="Sh3bon Bag Quality"
                                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform transition-transform duration-500 group-hover:-rotate-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualitySection;
