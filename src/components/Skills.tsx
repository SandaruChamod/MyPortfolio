import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { groupedSkills } from '../data/skills';

const SkillCard: React.FC<{ name: string; category: string; delay: number }> = ({ 
  name, 
  category,
  delay 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categoryStyles = {
    frontend: {
      background: "bg-gradient-to-r from-primary-500/10 to-primary-600/10",
      border: "border-primary-500/20",
      hover: "hover:border-primary-500/40 hover:bg-primary-500/20",
      text: "text-primary-400"
    },
    backend: {
      background: "bg-gradient-to-r from-secondary-500/10 to-secondary-600/10",
      border: "border-secondary-500/20",
      hover: "hover:border-secondary-500/40 hover:bg-secondary-500/20",
      text: "text-secondary-400"
    },
    mobile: {
      background: "bg-gradient-to-r from-accent-500/10 to-accent-600/10",
      border: "border-accent-500/20",
      hover: "hover:border-accent-500/40 hover:bg-accent-500/20",
      text: "text-accent-400"
    },
    tools: {
      background: "bg-gradient-to-r from-emerald-500/10 to-emerald-600/10",
      border: "border-emerald-500/20",
      hover: "hover:border-emerald-500/40 hover:bg-emerald-500/20",
      text: "text-emerald-400"
    },
    ai: {
      background: "bg-gradient-to-r from-purple-500/10 to-purple-600/10",
      border: "border-purple-500/20",
      hover: "hover:border-purple-500/40 hover:bg-purple-500/20",
      text: "text-purple-400"
    }
  };

  const style = categoryStyles[category];

  return (
    <motion.div
      ref={ref}
      className={`relative px-3 py-2 rounded-lg backdrop-blur-sm border ${style.background} ${style.border} 
        transform transition-all duration-300 hover:scale-105 ${style.hover} group w-full`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center justify-between relative group">
        <span 
          className={`text-xs font-medium ${style.text} transition-colors duration-300 group-hover:text-white truncate`}
          title={name} // Native HTML tooltip
        >
          {name}
        </span>
        
        {/* Custom tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap border border-gray-700 shadow-xl z-50">
          {name}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-b border-r border-gray-700 rotate-45"></div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory: React.FC<{ 
  title: string; 
  skills: { name: string; category: string }[]; 
  delay: number;
}> = ({ title, skills, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            category={skill.category}
            delay={delay + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="relative py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            I've developed expertise in a wide range of technologies throughout my career, 
            constantly expanding my skillset to deliver high-quality solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={groupedSkills.frontend} delay={0.2} />
          <SkillCategory title="Backend Development" skills={groupedSkills.backend} delay={0.4} />
          <SkillCategory title="Mobile Development" skills={groupedSkills.mobile} delay={0.6} />
          <SkillCategory title="Tools & Technologies" skills={groupedSkills.tools} delay={0.8} />
          <SkillCategory title="AI Tools" skills={groupedSkills.ai} delay={1.0} />
        </div>
      </div>
    </section>
  );
};

export default Skills;