import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, LocaleString } from '../types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (content: LocaleString | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'jp' : 'en');
  };

  const t = (content: LocaleString | string) => {
    if (typeof content === 'string') return content;
    return content[language] || content.en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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