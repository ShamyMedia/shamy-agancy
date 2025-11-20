import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import CustomWork from './components/CustomWork';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from './data';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F5F3FF] min-h-screen relative">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Solutions />
        <CustomWork />
        <Pricing />
      </main>
      <Footer />

      {/* Floating WhatsApp Button (Sticky FAB) - Z-Index increased to 60 */}
      <a 
        href={CONTACT_INFO.whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] group flex items-center gap-2"
        aria-label="تواصل معنا على واتساب"
      >
        <MessageCircle size={28} fill="white" className="text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold">
          تواصل معنا
        </span>
      </a>
    </div>
  );
};

export default App;