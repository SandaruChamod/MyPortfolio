import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative text-white py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              Sandaru<span className="text-primary-400">Kalapuge</span>
            </h3>
            <p className="text-gray-400">Senior Software Engineer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {currentYear} Sandaru Kalapuge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;