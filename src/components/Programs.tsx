import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Wind, Heart, User, ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Beginner Yoga',
    description: 'Perfect for those new to yoga. Focus on basic postures, alignment, and conscious breathing.',
    icon: Leaf,
  },
  {
    title: 'Hatha Yoga',
    description: 'A gentle paced class that focuses on static postures and mindful breathing to build strength and flexibility.',
    icon: Sun,
  },
  {
    title: 'Pranayama & Meditation',
    description: 'Guided breathwork and meditation techniques to calm the mind, reduce stress, and enhance clarity.',
    icon: Wind,
  },
  {
    title: 'Vinyasa Flow',
    description: 'Dynamic movement linked with breath. A more rigorous practice to build heat and endurance.',
    icon: Heart,
  },
  {
    title: 'Personal Sessions',
    description: 'One-on-one sessions tailored specifically to your body, goals, and experience level.',
    icon: User,
  },
];

const Programs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="programs" className="py-28 bg-bg-alt relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-primary/20" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="text-accent uppercase tracking-widest text-sm font-medium">
              Our Offerings
            </span>
            <span className="w-8 h-[1px] bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-text-main mb-6">
            Yoga Programs
          </h2>
          <p className="text-text-muted text-lg text-balance">
            Discover a variety of classes designed to support you at every stage of your wellness journey.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10 group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-bg-alt rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <program.icon size={30} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-text-main">{program.title}</h3>
              <p className="text-text-muted leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>
              
              <div className="mt-auto">
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-primary transition-colors group/link">
                  Learn more
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
