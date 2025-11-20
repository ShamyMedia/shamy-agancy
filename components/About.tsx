import React from 'react';
import { CONTACT_INFO, IMAGES } from '../data';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${IMAGES.aboutBg}')` }}
    >
      {/* Expert UI Fix: Gradient Overlay instead of flat color for Depth & Premium Feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6A3EEA]/95 to-[#4c1d95]/90"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-white leading-tight">مين هو شامي ميديا؟</h2>
          <div className="text-lg md:text-2xl text-white/95 mb-12 leading-relaxed font-medium space-y-8">
            <p>
              شامي ميديا وكالة تصميم وبرمجة بسيطة هدفها واحد:
              <strong className="block mt-3 text-purple-200 text-2xl md:text-3xl">نخلّي شغلك يظهر بشكل محترم… ويتقدّم على المنافسين.</strong>
            </p>
            <p className="text-base md:text-xl text-gray-100">
              بنشتغل على تصميم لوجوهات، هويات كاملة، بوستات سوشيال، مطبوعات…
              وكمان بنقدّم <span className="font-bold text-white underline decoration-purple-400 underline-offset-4">حلول جاهزة</span> للمطاعم والعيادات ومكاتب السفر.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl inline-block border border-white/20 mb-12 shadow-xl transform hover:scale-105 transition-transform duration-500">
             <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              كل ده بأسلوب بسيط يناسب السوق… وبنتعامل بوضوح من أول لحظة.
            </p>
          </div>
          
          <div>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#6A3EEA] font-bold py-4 px-12 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg ring-4 ring-white/30"
            >
              تحدث مع خبير
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;