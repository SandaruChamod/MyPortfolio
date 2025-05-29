import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { experience, education } from '../data/experience';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="relative py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            My professional journey and academic achievements that have shaped my expertise in software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-primary-500/20 p-3 rounded-full">
                <Briefcase size={28} className="text-primary-400" />
              </div>
              <h3 className="text-3xl font-bold text-white ml-4">Work Experience</h3>
            </div>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700/50">
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-2xl font-bold text-white">{exp.company}</h4>
                    <div className="flex items-center text-gray-300">
                      <MapPin size={18} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {exp.positions.map((position, posIndex) => (
                      <motion.div
                        key={posIndex}
                        className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-4 before:w-4 before:h-4 before:bg-primary-600 before:rounded-full before:shadow-md"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: posIndex * 0.2 }}
                      >
                        <div className="bg-gray-700/30 rounded-lg p-6">
                          <h5 className="text-xl font-semibold text-white mb-2">{position.title}</h5>
                          <div className="flex items-center text-primary-400">
                            <Calendar size={16} className="mr-2" />
                            <span className="font-medium">{position.period}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-secondary-500/20 p-3 rounded-full">
                <GraduationCap size={28} className="text-secondary-400" />
              </div>
              <h3 className="text-3xl font-bold text-white ml-4">Education</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700/50">
                  <h4 className="text-2xl font-bold text-white mb-3">{edu.degree}</h4>
                  <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center text-gray-400 mb-6">
                    <MapPin size={18} className="mr-2" />
                    <span>{edu.location}</span>
                    <span className="mx-2">•</span>
                    <Calendar size={18} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <motion.div
                      className="mt-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-gradient-to-r from-secondary-500/20 to-primary-500/20 p-6 rounded-xl border border-secondary-500/30 backdrop-blur-sm">
                        <div className="flex items-center mb-4">
                          <Award className="text-secondary-400 mr-2" size={24} />
                          <h6 className="text-lg font-semibold text-secondary-400">Academic Achievements</h6>
                        </div>
                        <div className="space-y-3">
                          {edu.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              className="flex items-center bg-gray-800/40 p-4 rounded-lg border border-secondary-500/20"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + achIndex * 0.1 }}
                            >
                              <div className="w-3 h-3 bg-secondary-500 rounded-full mr-4 animate-pulse"></div>
                              <p className="text-white font-medium">{achievement}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;