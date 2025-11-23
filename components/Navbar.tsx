import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Career', href: '#career' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating Pill Navbar - Desktop */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`hidden md:flex items-center gap-8 px-8 py-4 rounded-full glass-nav shadow-2xl pointer-events-auto transition-all duration-300 ${scrolled ? 'scale-100' : 'scale-105'}`}
        >
          <a href="#" className="text-lg font-serif font-bold text-white tracking-wider mr-4">
            YK.
          </a>

          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 border-l border-white/10 pl-4 ml-4">
             {/* Language Toggle */}
             <button 
               onClick={toggleLanguage}
               className="relative flex items-center justify-center w-12 h-6"
             >
               <span className={`absolute text-[10px] font-mono transition-all duration-300 ${language === 'en' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>EN</span>
               <span className={`absolute text-[10px] font-mono transition-all duration-300 ${language === 'jp' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>JP</span>
             </button>

            <a 
               href="#contact"
               className="px-5 py-2 bg-white text-dark text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors border border-transparent"
            >
              LET'S TALK
            </a>
          </div>
        </motion.header>
      </div>

      {/* Mobile Navbar - Fixed Top */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          <a href="#" className="text-xl font-serif font-bold text-white tracking-wider mix-blend-difference z-50">
            YK.
          </a>
          <div className="flex gap-4 z-50">
             <button 
                onClick={toggleLanguage}
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 text-xs font-mono"
              >
                {language.toUpperCase()}
              </button>
            <button 
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-dark flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-white/80 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;