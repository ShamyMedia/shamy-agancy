
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const Pricing: React.FC = () => {
  const { content, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('social'); // Default tab

  // Fallback for categories
  const categories = content.pricing.categories || [
    { id: 'social', label: 'Social' }, 
    { id: 'restaurant', label: 'Restaurant' }
  ];
  
  const filteredItems = content.pricing.items.filter(item => item.category === activeTab);

  // Animation variants for the container
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05 
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const getWhatsAppLink = (planTitle: string, categoryLabel: string) => {
    const text = language === 'ar'
      ? `مرحباً شامي ميديا، أنا مهتم بباقة ${planTitle} (${categoryLabel}) وأريد معرفة المزيد.`
      : `Hi Shamy Media, I'm interested in the ${planTitle} plan (${categoryLabel}) and would like to know more.`;
    return `https://wa.me/201006404614?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-12 md:py-20 bg-white relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-primary-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">
            {language === 'ar' ? 'استثمار ذكي' : 'Smart Investment'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {content.pricing.title}
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            {content.pricing.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 border ${
                activeTab === cat.id
                  ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/30 scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-primary-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards Container */}
        {/* Reduced min-height to 450px to fix the large gap, while still preventing severe layout jumps */}
        <div className="min-h-[450px]"> 
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center max-w-6xl mx-auto items-start"
            >
              {filteredItems.map((plan) => (
                <motion.div 
                  key={plan.id}
                  variants={itemVariants}
                  layout="position"
                  className={`relative rounded-2xl p-6 flex flex-col transition-colors duration-300 h-full ${
                    plan.recommended 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-primary-900/20 ring-2 ring-primary-500/50 md:-mt-4 md:pb-10 order-first md:order-none z-10' 
                      : 'bg-white text-slate-900 border border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-200'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-lg whitespace-nowrap">
                      <Sparkles size={12} />
                      {language === 'ar' ? 'الأكثر مبيعاً' : 'Most Popular'}
                    </div>
                  )}

                  <div className="mb-6 pt-2 text-center">
                    <h3 className={`text-lg font-bold mb-2 ${plan.recommended ? 'text-primary-300' : 'text-slate-500'}`}>
                      {plan.title}
                    </h3>
                    <div className="flex flex-col items-center">
                      <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                      {plan.period && <span className={`text-sm font-medium mt-1 ${plan.recommended ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>}
                    </div>
                  </div>

                  <div className={`w-full h-px mb-6 ${plan.recommended ? 'bg-white/10' : 'bg-slate-100'}`}></div>

                  <div className="flex-grow space-y-4 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-0.5 rounded-full flex-shrink-0 ${plan.recommended ? 'bg-secondary text-white' : 'bg-green-100 text-green-600'}`}>
                            <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={`text-sm leading-tight ${plan.recommended ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={getWhatsAppLink(plan.title, categories.find(c => c.id === activeTab)?.label || '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-center transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-auto ${
                      plan.recommended 
                        ? 'bg-secondary hover:bg-secondary-hover text-white shadow-lg shadow-secondary/25' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {language === 'ar' ? 'اطلب الباقة' : 'Choose Plan'}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
