
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const coffeeVarieties = [
  {
    name: 'بن برازيلي',
    taste: 'متوازن وناعم، فيه لمسة شوكولاتة وكاكاو.',
    feature: 'مثالي للإسبريسو والمزاج الكلاسيك. الأكثر شيوعًا في مصر بفضل نعومة الطعم وقلة الحموضة.',
  },
  {
    name: 'بن كولومبي',
    taste: 'غني ومخملي بنغمة كراميل خفيفة.',
    feature: 'رايق وسهل يتقبل إضافات زي اللبن أو الكريمة. المفضل في الكافيهات الراقية وسلاسل القهوة.',
  },
  {
    name: 'بن يمني',
    taste: 'قوي وعطري، فيه نغمة توابل شرقية.',
    feature: 'أصيل وتاريخي لمحبي المزاج العالي والقهوة الثقيلة.',
  },
  {
    name: 'بن حبشي',
    taste: 'فاكهي بنغمة خفيفة من الحمضيات والزهور.',
    feature: 'لمحبي الطعم المختلف والمميز، مناسب للتركي أو الفلتر.',
  },
  {
    name: 'بن غواتيمالي',
    taste: 'متوسط الحموضة، فيه نغمة كاكاو وسكر بني.',
    feature: 'مثالي لخلطات البن لأنه بيدي توازن مثالي بين النكهات.',
  },
  {
    name: 'بن هندي',
    taste: 'قوي وجاف، فيه طابع ترابي ودخاني.',
    feature: 'ممتاز لخلطات الإسبريسو لأنه بيدي جسم ثقيل وطعم ثابت.',
  },
];

type CoffeeType = typeof coffeeVarieties[0];

const CoffeeCard: React.FC<{ type: CoffeeType, isVisible: boolean, delay: number }> = ({ type, isVisible, delay }) => {
  return (
    <div 
      className="bg-[#2a221a]/80 backdrop-blur-sm rounded-2xl shadow-lg transform transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(60px) rotateX(-30deg)',
        transformOrigin: 'bottom',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        border: '1px solid rgba(167, 113, 66, 0.2)'
      }}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#A77142] mb-4">{type.name} ☕</h3>
        <dl>
            <dt className="font-bold text-gray-200">الطعم:</dt>
            <dd className="mb-3 text-gray-300">{type.taste}</dd>
            <dt className="font-bold text-gray-200">الميزة:</dt>
            <dd className="text-gray-300">{type.feature}</dd>
        </dl>
      </div>
    </div>
  );
};

const CoffeeTypes: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, 0.1);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
        <div 
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1552346986-1a74a1b0b3b1?q=80&w=2070&auto=format&fit=crop')`,
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.3)',
            }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-[#A77142] transition-opacity duration-1000 ${onScreen ? 'opacity-100' : 'opacity-0'}`}>
                أنواع البنّ عند شعبن — كل نوع وليه مزاجه ☕
            </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            {coffeeVarieties.map((type, index) => (
                <CoffeeCard key={type.name} type={type} isVisible={onScreen} delay={index * 150} />
            ))}
            </div>
            <p className={`text-center mt-16 text-xl text-gray-300 transition-opacity duration-1000 delay-500 ${onScreen ? 'opacity-100' : 'opacity-0'}`}>
            كل نوع ليه حكاية، لكن النهاية دايمًا واحدة — مزاج مضبوط ودماغ رايقة مع بن شعبن ☕.
            </p>
        </div>
    </section>
  );
};

export default CoffeeTypes;
