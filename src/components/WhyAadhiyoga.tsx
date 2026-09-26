import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyAadhiyoga: React.FC = () => {
  const benefits = [
    'Personalized guidance and attention',
    'Holistic approach to mind-body wellness',
    'Beginner-friendly and inclusive sessions',
    'Flexible options: Online and In-person',
    'Focus on breathwork and mindfulness',
    'Experienced and certified instruction',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="py-28 bg-primary text-white relative overflow-hidden">
      {/* Background abstract shape */}
      <motion.svg
        className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-5 pointer-events-none text-white"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      >
        <path
          fill="currentColor"
          d="M45.7,-76.3C58.9,-69.1,69.1,-55.3,77.3,-40.5C85.5,-25.7,91.7,-9.9,90.4,5.4C89.1,20.7,80.3,35.5,70.1,48.4C59.9,61.3,48.3,72.3,34.4,78.2C20.5,84.1,4.3,84.9,-10.8,81.4C-25.9,77.9,-39.9,70,-51.7,59.3C-63.5,48.6,-73.1,35.1,-79.3,19.8C-85.5,4.5,-88.3,-12.6,-83.4,-27.9C-78.5,-43.2,-65.9,-56.7,-51.5,-64.1C-37.1,-71.5,-20.9,-72.8,-4.2,-67.7C12.5,-62.6,29.1,-51.1,45.7,-76.3Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="text-accent uppercase tracking-widest text-sm font-medium">
              The Difference
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            Why choose <br/> <span className="font-medium mt-2 block">Aadhiavedha Yoga?</span>
          </h2>
          <p className="text-primary-light text-lg mb-10 leading-relaxed text-balance text-white/80">
            We believe that yoga is for everyone. Our approach strips away the intimidation, focusing on what truly matters: your personal growth, peace of mind, and physical well-being.
          </p>

          <motion.ul 
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {benefits.map((benefit, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-center space-x-4">
                <div className="bg-accent/20 p-1 rounded-full text-accent flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-lg text-white/95">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
            <motion.img
              src="https://images.unsplash.com/photo-1644612105654-b6b0a941ecde?q=80&w=1170&auto=format&fit=crop"
              alt="Yoga practice outdoors"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply group-hover:bg-primary/20 transition-colors duration-500" />
            
            {/* Outline decorative border */}
            <div className="absolute inset-4 border border-white/30 rounded-[2.5rem] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAadhiyoga;
