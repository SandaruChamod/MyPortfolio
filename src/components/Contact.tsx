import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import QRCode from 'react-qr-code';
import { config } from '../config';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="relative py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-2/3 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-500/20 p-3 rounded-xl">
                  <Mail className="text-primary-400" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a 
                    href={`mailto:${config.social.email}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {config.social.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-500/20 p-3 rounded-xl">
                  <MapPin className="text-primary-400" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-500/20 p-3 rounded-xl">
                  <Linkedin className="text-primary-400" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                  <a 
                    href={config.social.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    linkedin.com/in/sandaru-kalapuge
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-500/20 p-3 rounded-xl">
                  <Github className="text-primary-400" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">GitHub</h4>
                  <a 
                    href={config.social.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    github.com/SandaruChamod
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/3 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Scan My Portfolio</h3>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6 mx-auto max-w-[220px]">
              <QRCode value={config.websiteUrl} size={180} />
            </div>
            
            <p className="text-gray-300 text-center">
              Scan this QR code to visit my portfolio website on your mobile device.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;