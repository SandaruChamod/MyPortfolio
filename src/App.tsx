import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const FloatingBubble: React.FC<{ 
  size: string;
  color: string;
  left: string;
  top: string;
  duration: number;
  delay: number;
}> = ({ size, color, left, top, duration, delay }) => (
  <motion.div
    className={`absolute rounded-full backdrop-blur-sm ${color}`}
    style={{ width: size, height: size, left, top }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
      y: [-20, 20, -20],
      x: [-10, 10, -10],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');
      
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach((link) => {
        link.classList.remove('text-primary-600', 'font-semibold');
        
        if (link.getAttribute('href')?.includes(current)) {
          link.classList.add('text-primary-600', 'font-semibold');
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate random sparkle configurations
  const sparkles = Array.from({ length: 24 }, (_, i) => ({
    angle: (i * 360) / 24 + Math.random() * 30 - 15, // Random angle variation
    distance: Math.random() * 40 + 60, // Random distance between 60-100px
    size: Math.random() * 2 + 2, // Random size between 2-4px
    duration: Math.random() * 0.5 + 1.5, // Random duration between 1.5-2s
    delay: Math.random() * 0.3, // Random delay up to 0.3s
  }));

  return (
    <div className="min-h-screen font-sans bg-gray-900 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-gray-900 to-gray-900"></div>
        
        {/* Large Gradient Orbs */}
        <motion.div 
          className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-primary-600/20 via-primary-400/10 to-transparent rounded-tl-full blur-3xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute left-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-secondary-500/20 via-secondary-400/10 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Bubbles */}
        <FloatingBubble size="180px" color="bg-primary-400/20" left="5%" top="20%" duration={8} delay={0} />
        <FloatingBubble size="140px" color="bg-secondary-400/20" left="80%" top="15%" duration={7} delay={1} />
        <FloatingBubble size="160px" color="bg-primary-500/20" left="70%" top="60%" duration={9} delay={2} />
        <FloatingBubble size="120px" color="bg-secondary-500/20" left="15%" top="70%" duration={6} delay={1.5} />
        <FloatingBubble size="200px" color="bg-primary-600/20" left="40%" top="80%" duration={8} delay={0.5} />
        <FloatingBubble size="150px" color="bg-secondary-600/20" left="60%" top="25%" duration={7} delay={2.5} />
      </div>

      {/* Enhanced Cursor Effect */}
      <motion.div 
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)"
        }}
      >
        {/* Main glow */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            transform: "translate(-50%, -50%)",
            filter: "blur(100px)",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 50%, rgba(99,102,241,0) 100%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Randomized sparkles */}
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary-400/30 to-primary-500/30 backdrop-blur-sm"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              borderRadius: "50%",
              rotate: `${sparkle.angle}deg`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              x: [0, sparkle.distance * Math.cos(sparkle.angle * Math.PI / 180)],
              y: [0, sparkle.distance * Math.sin(sparkle.angle * Math.PI / 180)]
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: [0.4, 0, 0.6, 1]
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero mousePosition={mousePosition} />
        <About mousePosition={mousePosition} />
        <Skills />
        <Experience />
        <Projects />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;