import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar } from 'lucide-react';
import { articles } from '../data/articles';

const Articles: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="articles" className="relative py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Sharing my knowledge and experiences through technical writing on Medium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {articles.map((article, index) => {
            const [articleRef, articleInView] = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <motion.a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={articleRef}
                className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={articleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-primary-400 mb-4 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors">
                    <span>Read on Medium</span>
                    <ExternalLink size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;