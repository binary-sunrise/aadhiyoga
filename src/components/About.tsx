import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Vector Graphic */}
      <motion.svg 
        className="absolute top-10 right-[-10%] w-64 h-64 text-bg-alt opacity-50 z-0 pointer-events-none"
        viewBox="0 0 100 100" 
        fill="currentColor"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <path d="M50 0 C70 40 100 50 100 50 C100 50 70 60 50 100 C30 60 0 50 0 50 C0 50 30 40 50 0 Z" />
      </motion.svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] rounded-tl-[8rem] rounded-br-[8rem] overflow-hidden border-8 border-bg-light shadow-2xl relative group">
              <motion.img
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop"
                alt="Peaceful meditation setup"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Decorative dot pattern */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[radial-gradient(circle,var(--color-accent)_2px,transparent_2px)] [background-size:16px_16px] opacity-20 z-[-1]"></div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-accent"></span>
              <span className="text-accent uppercase tracking-widest text-sm font-medium">
                About Aadhiavedha Yoga
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-text-main mb-8 leading-tight">
              A sanctuary for your <span className="italic text-primary font-medium">mind, body,</span> and <span className="italic text-primary font-medium">spirit.</span>
            </h2>
            
            <motion.p 
              className="text-text-muted text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At Aadhiavedha Yoga, we believe that yoga is more than just physical postures; it is a profound journey of self-discovery and holistic well-being. Our approach is rooted in authentic traditions tailored for modern lifestyles.
            </motion.p>
            
            <motion.p 
              className="text-text-muted text-lg mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Whether you are taking your first breath on the mat or deepening an advanced practice, we provide a welcoming, nurturing environment where you can explore mindfulness, cultivate strength, and find true inner peace.
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="h-[2px] w-12 bg-primary"></div>
              <p className="font-medium text-text-main tracking-wide">Namaste.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
