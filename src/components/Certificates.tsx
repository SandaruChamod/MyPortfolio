import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar } from 'lucide-react';
import { certificates } from '../data/certificates';

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="certificates" className="relative py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const [certRef, certInView] = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <motion.div
                key={cert.title}
                ref={certRef}
                className="group relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-500 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  {cert.image && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </>
                  )}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center space-x-2 bg-gray-900/90 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-500/30">
                      <Award size={16} className="text-primary-400" />
                      <span className="text-sm font-medium text-primary-400">{cert.issuer}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 relative z-20 bg-gradient-to-b from-gray-900/50 to-gray-900">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center text-gray-400 mt-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">Issued {cert.date}</span>
                  </div>
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-30"
                    aria-label={`View ${cert.title} certificate`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;