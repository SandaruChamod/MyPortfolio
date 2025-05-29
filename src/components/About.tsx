import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="relative py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-2xl transform rotate-3 blur-xl"></div>
              <img
                src="/IMG_20240808_191946_097-1.jpg"
                alt="Sandaru Kalapuge"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Sandaru Kalapuge</h3>
              <h4 className="text-xl font-medium text-primary-400 mb-6">Senior Software Engineer</h4>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Experienced in the development of scalable and maintainable frontend applications using modern web and
                mobile technologies. Contributed to client projects across the USA, Australia, and the Philippines, working
                collaboratively with cross-functional teams to deliver reliable solutions. While core expertise lies in frontend
                development, a solid understanding of backend technologies has been gained to support full-stack
                development and integration.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg">
                    <Mail className="text-primary-400" size={20} />
                  </div>
                  <a href="mailto:sandaruchamod97@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                    sandaruchamod97@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg">
                    <Globe className="text-primary-400" size={20} />
                  </div>
                  <span className="text-gray-300">Colombo, Sri Lanka</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/SandaruChamod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-800/50 text-white rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} className="mr-2" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/sandaru-kalapuge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-primary-600/50 text-white rounded-xl hover:bg-primary-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} className="mr-2" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;