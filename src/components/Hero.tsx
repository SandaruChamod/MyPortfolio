import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero: React.FC<HeroProps> = ({ mousePosition }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/DSC09623-ED-3.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section id="home\" className="relative min-h-screen flex items-center text-white">
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-primary-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Sandaru Kalapuge
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl font-semibold mb-6 h-10 text-primary-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'Senior Software Engineer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'React Native Developer',
                  2000,
                ]}
                repeat={Infinity}
                wrapper="span"
              />
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Experienced in developing scalable frontend applications using modern web and 
              mobile technologies across global projects.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary-600 text-white font-medium rounded-full shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gray-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: imageLoaded ? 1 : 0, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Loading placeholder */}
              {!imageLoaded && (
                <div className="absolute inset-0 rounded-full bg-gray-800 animate-pulse"></div>
              )}
              
              {/* Subtle gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-primary-400/20 to-white/20 rounded-full blur-sm"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-white/5 to-white/10 p-1">
                <div className="absolute inset-1 rounded-full overflow-hidden">
                  <div className="w-full h-full">
                    <img 
                      src="/DSC09623-ED-3.jpg" 
                      alt="Sandaru Kalapuge"
                      className={`w-full h-full object-cover scale-105 transition-all duration-700 ease-out ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="eager"
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            delay: 1.5
          }
        }}
        whileHover={{ y: 5 }}
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;