import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Yuya Kawasome. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built with React, Tailwind & Passion.</p>
      </div>
    </footer>
  );
};

export default Footer;