import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const { content, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-dark text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-600/20 rounded-full blur-[80px] md:blur-[120px] -mr-20 -mt-20"></div>
         <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-secondary/10 rounded-full blur-[60px] md:blur-[100px] -ml-20 -mb-20"></div>
         {/* Grid Pattern overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-start"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-primary-100 px-4 py-1.5 rounded-full font-medium text-xs md:text-sm mb-6">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
               {language === 'ar' ? 'وكالة رقمية متكاملة' : 'Full-Service Digital Agency'}
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              {content.hero.headline}
            </h1>
            
            <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {content.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://wa.me/201006404614" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-secondary/20 transition-all transform hover:-translate-y-1"
              >
                <MessageCircle size={22} />
                {content.hero.primaryCta}
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
              >
                {content.hero.secondaryCta}
                <ArrowIcon size={20} />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary" />
                    {language === 'ar' ? 'دعم فني ٢٤/٧' : '24/7 Support'}
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary" />
                    {language === 'ar' ? 'ضمان استعادة الأموال' : 'Money Back Guarantee'}
                </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full mt-6 lg:mt-0"
          >
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary opacity-30 blur-2xl rounded-[2rem] group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <img 
                src="https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/solution-design.jpg" 
                alt="Digital Agency Team" 
                className="relative rounded-2xl shadow-2xl border border-white/10 object-cover h-[300px] sm:h-[400px] md:h-[550px] w-full"
              />
              
              {/* Floating Badge 1 - Hidden on very small screens */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="hidden sm:block absolute top-8 -left-4 md:-left-12 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 max-w-[200px] z-20"
              >
                 <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                        <CheckCircle2 size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium uppercase">{language === 'ar' ? 'مشاريع ناجحة' : 'Projects Done'}</p>
                        <p className="text-xl font-bold text-gray-800">450+</p>
                    </div>
                 </div>
              </motion.div>

              {/* Floating Badge 2 (Chart) - Hidden on very small screens */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="hidden sm:block absolute -bottom-8 -right-4 md:-right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 w-[220px] z-20"
              >
                <div className="flex justify-between items-end mb-2">
                    <div>
                        <p className="text-xs text-gray-500">{language === 'ar' ? 'نمو المبيعات' : 'Sales Growth'}</p>
                        <p className="text-lg font-bold text-secondary">+240%</p>
                    </div>
                    <div className="flex gap-1 items-end h-10">
                        <div className="w-2 bg-gray-200 h-4 rounded-t-sm"></div>
                        <div className="w-2 bg-gray-200 h-6 rounded-t-sm"></div>
                        <div className="w-2 bg-secondary/50 h-8 rounded-t-sm"></div>
                        <div className="w-2 bg-secondary h-full rounded-t-sm"></div>
                    </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;