
import React, { useRef, useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import WhatsAppIcon from './icons/WhatsAppIcon';
import FacebookIcon from './icons/FacebookIcon';
import TelegramIcon from './icons/TelegramIcon';
import TikTokIcon from './icons/TikTokIcon';
import CoffeeMugIcon from './icons/CoffeeMugIcon';
import Logo3D from './Logo3D';

const socialLinks = [
    { href: "https://wa.me/message/BD7SGEG2EIPRF1", Icon: WhatsAppIcon, label: "واتساب", color: "hover:text-[#25D366]" },
    { href: "https://www.facebook.com/sh3bonn", Icon: FacebookIcon, label: "فيسبوك", color: "hover:text-[#1877F2]" },
    { href: "https://t.me/+0Aw9heZ4SJVlNmNk", Icon: TelegramIcon, label: "تليجرام", color: "hover:text-[#0088cc]" },
    { href: "https://tiktok.com/@sh3bonn", Icon: TikTokIcon, label: "تيك توك", color: "hover:text-white" }
];

const Contact: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(ref);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = encodeURIComponent(`رسالة من الموقع من: ${name}\n\n${message}`);
        window.open(`https://wa.me/message/BD7SGEG2EIPRF1?text=${text}`, '_blank');
        setName('');
        setMessage('');
    }

    return (
        <footer ref={ref} className="bg-[#050505] pt-24 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div className={`transition-all duration-1000 ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="mb-10 text-right">
                            {/* BRAND LOGO (3D Golden Animated) */}
                            <Logo3D variant="footer" />
                        </div>
                        <h2 className="text-[#D4AF37] font-bold text-3xl mb-6">ابعتلنا رسالة</h2>
                        <p className="text-gray-400 mb-8 max-w-lg">محتاج مساعدة في اختيار نوع البن؟ أو عندك استفسار عن الشحن؟ ابعتلنا رسالة وإحنا معاك في أي وقت.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="الاسم بالكامل"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                                required
                            />
                            <textarea
                                placeholder="اكتب استفسارك هنا..."
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                                required
                            ></textarea>
                            <button type="submit" className="w-full bg-[#D4AF37] text-black font-black py-4 px-8 rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] shadow-2xl">
                                إرسال عبر واتساب
                            </button>
                        </form>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-[#D4AF37] font-bold text-3xl mb-6 mt-12 md:mt-0">تابعنا على المنصات</h2>
                        <p className="text-gray-400 mb-8">كن أول من يعرف عن الخلطات الجديدة والعروض الحصرية ومسابقات المزاج العالي.</p>

                        <div className="grid grid-cols-2 gap-4">
                            {socialLinks.map(({ href, Icon, label, color }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl text-gray-400 transition-all ${color} hover:bg-white/10`}
                                >
                                    <Icon className="w-8 h-8" />
                                    <span className="font-bold">{label}</span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-12 p-8 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-2xl relative overflow-hidden group">
                            <div className="absolute -bottom-10 -left-10 opacity-10 rotate-12 transition-transform group-hover:rotate-0 duration-700">
                                <CoffeeMugIcon className="w-40 h-40 text-[#D4AF37]" />
                            </div>
                            <h4 className="text-white text-xl font-bold mb-3 relative z-10">فرعنا الرئيسي</h4>
                            <p className="text-gray-400 text-base leading-relaxed relative z-10 mb-6 font-bold">
                                بهتيم - شبرا الخيمة
                                <span className="block text-sm font-normal mt-2 opacity-80">والتوصيل متاح داخل القاهرة الكبرى فقط حالياً.</span>
                            </p>

                            {/* Relevant Picture for Branch/Location */}
                            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                <img
                                    src="/images/blends/blend4.png"
                                    alt="Sh3bon Branch Atmosphere"
                                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-3 right-3 text-white font-bold text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
                                    مفتوح الآن
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                        <CoffeeMugIcon className="w-5 h-5" />
                        <span>© 2025 بنّ شعبن. كلها بتقول!</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">سياسة الخصوصية</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">الشروط والأحكام</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
