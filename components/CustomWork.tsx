import React from 'react';
import { CONTACT_INFO, IMAGES } from '../data';

const CustomWork: React.FC = () => {
  return (
    <section id="custom-work" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F3FF] overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[600px]">
          
          {/* Left Column (Stacked Images) */}
          <div className="flex flex-col gap-8 h-full">
            <div className="animate-on-scroll flex-1" style={{ transitionDelay: '0ms' }}>
              <img 
                src={IMAGES.customWork.img1} 
                alt="Creative collaboration" 
                className="rounded-lg shadow-lg object-cover w-full h-full min-h-[280px]"
              />
            </div>
            <div className="animate-on-scroll flex-1" style={{ transitionDelay: '150ms' }}>
              <img 
                src={IMAGES.customWork.img2} 
                alt="Team discussion" 
                className="rounded-lg shadow-lg object-cover w-full h-full min-h-[280px]"
              />
            </div>
          </div>
          
          {/* Right Column (Large Image) */}
          <div className="h-full min-h-[500px] lg:min-h-[600px] animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <img 
                src={IMAGES.customWork.main} 
                alt="Digital workspace" 
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
          </div>
        </div>

        {/* Overlay Box Container - Centered */}
        <div className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center pointer-events-none mt-8 lg:mt-0 z-10">
            <div 
                className="bg-black/85 backdrop-blur-sm text-white p-12 md:p-16 text-center shadow-2xl pointer-events-auto max-w-lg mx-auto animate-on-scroll rounded-xl border border-white/10"
                style={{ transitionDelay: '450ms' }}
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">عايز شغل مخصوص ليك؟</h2>
                <p className="text-gray-200 mb-10 text-lg leading-relaxed">
                    لو ليك فكرة معينة… أو محتاج نظام كامل معمول على نشاطك بالضبط —
                    كلّمني وهنبني لك حل خاص بيك خطوة بخطوة.
                </p>
                <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white font-bold py-3 px-10 rounded-md hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                    اطلب عرض سعر مجاني
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CustomWork;