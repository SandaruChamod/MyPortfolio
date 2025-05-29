import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="relative py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore some of my recent projects that showcase my expertise in software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const [projectRef, projectInView] = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <motion.div
                key={project.title}
                ref={projectRef}
                className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                      style={{ backgroundColor: '#0b0f1e' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1e] via-[#0b0f1e]/5 to-transparent opacity-60"></div>
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-primary-900/50 text-primary-400 text-sm font-medium rounded-full border border-primary-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gray-700/50 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <Github size={18} className="mr-2" />
                      <span>View Code</span>
                    </a>
                    
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-primary-600/50 text-white rounded-xl hover:bg-primary-600 transition-all duration-300 group"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;