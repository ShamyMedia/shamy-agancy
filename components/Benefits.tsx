import React from 'react';
import { BENEFITS_DATA } from '../data';
import { Zap, PackageCheck, Wallet, Headset, Palette } from 'lucide-react';

const BenefitIcon: React.FC<{ type: string }> = ({ type }) => {
  // Mapping data types to Lucide Icons
  // Expert Tweak: Increased strokeWidth to 2.5 to match the heavy 'Cairo' font weight
  const icons: Record<string, React.ReactNode> = {
    speed: <Zap className="w-full h-full" strokeWidth={2.5} />,
    ready: <PackageCheck className="w-full h-full" strokeWidth={2.5} />,
    price: <Wallet className="w-full h-full" strokeWidth={2.5} />,
    support: <Headset className="w-full h-full" strokeWidth={2.5} />,
    design: <Palette className="w-full h-full" strokeWidth={2.5} />,
  };

  return (
    <div className="w-10 h-10 flex items-center justify-center">
      {icons[type] || <Zap className="w-full h-full" strokeWidth={2.5} />}
    </div>
  );
};

const BenefitCard: React.FC<{ icon: string; title: string; description: string; delay?: number }> = ({ icon, title, description, delay }) => (
  <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-purple-50 hover:border-purple-200 animate-on-scroll h-full flex flex-col items-start text-right group hover:-translate-y-2" style={{ transitionDelay: `${delay}ms`}}>
    {/* Updated Icon Container */}
    <div className="mb-8 p-4 rounded-2xl bg-[#F5F3FF] text-[#6A3EEA] group-hover:bg-[#6A3EEA] group-hover:text-white transition-all duration-300 shadow-sm ring-1 ring-purple-100 group-hover:ring-purple-400">
        <BenefitIcon type={icon} />
    </div>
    <h3 className="text-2xl font-extrabold mb-5 text-gray-900 group-hover:text-[#6A3EEA] transition-colors">{title}</h3>
    <p className="text-gray-600 text-lg leading-loose font-medium">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 px-6 bg-[#F5F3FF]">
      <div className="container mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">ليه ناس كتير بتختار <span className="text-[#6A3EEA] relative inline-block">شامي ميديا<svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg></span>؟</h2>
          <p className="text-gray-600 text-xl leading-loose font-medium">لأننا مش مجرد مصممين.. إحنا شركاء نجاح فاهمين السوق وعارفين أنت محتاج إيه بالظبط.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {BENEFITS_DATA.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;