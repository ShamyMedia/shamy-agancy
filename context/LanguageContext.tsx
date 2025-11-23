import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { contentData } from '../data';
import { Content } from '../types';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  content: Content;
  toggleLanguage: () => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const content = contentData[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    
    // Update font family based on language
    if (language === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Outfit', sans-serif";
    }
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};