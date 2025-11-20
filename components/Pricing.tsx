import React from 'react';
import { PACKAGES, CONTACT_INFO } from '../data';
import { CheckCircle2, Utensils, Stethoscope, Bus, Palette, ShieldCheck, ArrowLeft } from 'lucide-react';

interface PackageProps {
    name: string;
    icon: string;
    features: string[];
    price: string;
    featured?: boolean;
    delay: number;
}

const PricingCard: React.FC<PackageProps> = ({ name, icon, features, price, featured, delay }) => {
    
    // Mapping icons based on data keys
    const packageIcons: Record<string, React.ReactNode> = {
        restaurant: <Utensils size={28} strokeWidth={2.5} className={featured ? "text-white" : "text-[#6A3EEA]"} />,
        clinic: <Stethoscope size={28} strokeWidth={2.5} className={featured ? "text-white" : "text-[#6A3EEA]"} />,
        travel: <Bus size={28} strokeWidth={2.5} className={featured ? "text-white" : "text-[#6A3EEA]"} />,
        design: <Palette size={28} strokeWidth={2.5} className={featured ? "text-white" : "text-[#6A3EEA]"} />,
    };

    return (
        <div className={`bg-white p-8 md:p-10 rounded-3xl border relative flex flex-col h-full animate-on-scroll transition-all duration-300 
            ${featured 
                ? 'border-[#6A3EEA] border-2 ring-4 ring-purple-500/10 shadow-2xl scale-100 lg:scale-105 z-10' 
                : 'border-transparent shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`} 
            style={{transitionDelay: `${delay}ms`}}>
            
            {featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6A3EEA] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap tracking-wide animate-pulse-subtle z-20">
                    الأكثر طلباً 🔥
                </div>
            )}

            <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${featured ? 'bg-[#6A3EEA] shadow-purple-200' : 'bg-[#F5F3FF]'}`}>
                    {packageIcons[icon]}
                </div>
                <h4 className="text-2xl font-extrabold text-gray-900">{name}</h4>
            </div>
            
            <div className="mb-10 pb-8 border-b border-gray-100">
                 <span className="text-sm text-gray-500 block mb-3 font-bold">ابتداءً من</span>
                 <span className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{price}</span>
            </div>
            
            {/* Features List */}
            <ul className="space-y-5 text-gray-700 mb-12 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <div className={`ml-3 mt-1 flex-shrink-0 ${featured ? 'text-[#6A3EEA]' : 'text-emerald-600'}`}>
                            <CheckCircle2 size={22} strokeWidth={2.5} />
                        </div>
                        <span className={`text-lg leading-loose ${featured ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            
            <div className="mt-auto">
                <a 
                    href={`${CONTACT_INFO.whatsappLink}?text=مهتم بحجز باقة ${name}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-5 rounded-2xl font-bold transition-all duration-300 text-lg shadow-md hover:shadow-lg active:scale-95 group
                    ${featured 
                        ? 'bg-gradient-to-r from-[#6A3EEA] to-[#5a32c4] text-white hover:shadow-purple-500/30' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                    احجز نسختك الآن
                    <ArrowLeft size={20} className={`transition-transform duration-300 group-hover:-translate-x-1 ${featured ? 'text-white' : 'text-gray-600'}`} />
                </a>
                {/* Trust Signal - Optimized for Conversion Psychology with Stronger Border/Shadow */}
                <div className="flex items-center justify-center gap-2 mt-5 bg-emerald-50/90 backdrop-blur-sm py-3.5 px-4 rounded-xl border border-emerald-300 shadow-md hover:bg-emerald-100 transition-colors hover:shadow-lg group-hover:border-emerald-400">
                    <ShieldCheck size={20} className="text-emerald-700" strokeWidth={2.5} />
                    <p className="text-center text-xs md:text-sm font-extrabold text-emerald-900 tracking-wide">
                        دفع لمرة واحدة - لا توجد مصاريف خفية
                    </p>
                </div>
            </div>
        </div>
    );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">باقاتنا وأسعارنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-loose font-medium">
            لأننا عارفين إن كل نشاط ليه احتياجاته.. قسّمنا الباقات عشان تختار اللي يناسبك وتدفع في اللي محتاجه بس.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 max-w-7xl mx-auto items-start lg:pt-8 px-2">
            {PACKAGES.map((pkg, i) => (
                <PricingCard key={i} {...pkg} delay={i * 100} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;