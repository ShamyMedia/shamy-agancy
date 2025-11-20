import React from 'react';
import { CONTACT_INFO, IMAGES } from '../data';
import { MessageCircle, ArrowLeft, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${IMAGES.heroBg}')` }}
    >
      {/* Darker Overlay with Purple Tint for Branding and Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-black/80 to-black/90"></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-on-scroll is-visible py-8 md:py-12">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 tracking-wide drop-shadow-2xl leading-tight">
            خلّي شغلك يظهر أحسن… <br className="hidden md:block"/> ويتنظم… ويكبر.
            {/* Sub Headline - Green for Psychology (Growth/Success) */}
            <span className="block text-emerald-400 mt-3 md:mt-4 text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-md">
              كل ده بحلول جاهزة ومصمّمة على نشاطك.
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed md:leading-loose drop-shadow-md">
            سواء عندك مطعم، عيادة، مكتب سفر… أو حتى شغل تصميم محتاج يتعمل بسرعة — شامي ميديا بتقدّم لك 
            {/* Added whitespace-nowrap to prevent the badge from breaking into two lines */}
            <span className="inline-flex items-center justify-center bg-[#F3E8FF] text-[#6A3EEA] px-3 py-0.5 md:px-4 md:py-1 rounded-xl font-extrabold mx-2 shadow-lg border border-[#D8B4FE] transform hover:scale-105 transition-transform duration-300 relative -bottom-0.5 align-middle text-base md:text-lg gap-1 whitespace-nowrap">
              <Sparkles size={16} className="text-[#6A3EEA]" />
              حل جاهز
            </span> 
            يشيل عنك التعب: تصميم × برمجة × إعداد كامل… كله في مكان واحد.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#6A3EEA] text-white font-bold py-4 px-10 rounded-xl hover:bg-[#5a32c4] transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(106,62,234,0.5)] hover:shadow-[0_0_30px_rgba(106,62,234,0.7)] text-lg flex items-center justify-center gap-3 animate-pulse-slow group"
            >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                عايز تبدأ؟ كلّمني واتساب
            </a>
            {/* Improved Secondary CTA: Increased opacity and blur for better UX */}
            <a
                href="#solutions"
                className="w-full sm:w-auto bg-white/20 backdrop-blur-2xl border border-white/80 text-white font-bold py-3.5 px-10 rounded-xl hover:bg-white hover:text-[#6A3EEA] transition-all duration-300 text-lg hover:shadow-lg hover:shadow-white/20 flex items-center justify-center gap-2 group"
            >
                شوف الخدمات الجاهزة
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;