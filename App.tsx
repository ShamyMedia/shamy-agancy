
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Hero />
          <WhyUs />
          <Services />
          <Process />
          <Pricing />
          <FAQ />
          <Testimonials />
        </main>
        <Footer />
        <WhatsAppBtn />
      </div>
    </LanguageProvider>
  );
};

export default App;
