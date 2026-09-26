import React from 'react';
import { motion } from 'framer-motion';

const Instructor: React.FC = () => {
  return (
    <section id="instructor" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative Vector */}
      <motion.svg 
        className="absolute bottom-0 left-[-5%] w-72 h-72 text-bg-alt opacity-60 z-0 pointer-events-none"
        viewBox="0 0 200 200" 
        fill="currentColor"
        initial={{ rotate: -20, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
      >
        <path d="M50 0 C70 40 100 50 100 50 C100 50 70 60 50 100 C30 60 0 50 0 50 C0 50 30 40 50 0 Z" transform="scale(2)" />
      </motion.svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-bg-light/50 backdrop-blur-sm border border-gray-100 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center shadow-xl shadow-primary/5">
          <motion.div 
            className="w-full md:w-5/12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative group border-8 border-white">
              <motion.img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop"
                alt="Yoga Instructor"
                className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-7/12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-accent"></span>
              <span className="text-accent uppercase tracking-widest text-sm font-medium">
                Meet Your Guide
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-text-main mb-3">
              Dr. Achu Bharathan
            </h2>
            <p className="text-primary font-medium text-lg mb-8 tracking-wide">Lead Yoga Teacher & Founder</p>

            <div className="space-y-6 text-text-muted text-lg leading-relaxed mb-10">
              <p>
                Hello and welcome! My journey with yoga began 4 years ago, and it profoundly transformed my life. I founded Aadhiavedha Yoga to share the incredible healing and grounding power of this ancient practice with others.
              </p>
              <p>
                I am a certified RYT-500 instructor specializing in Hatha, Vinyasa, and restorative practices. My classes focus on mindful alignment, breath awareness, and creating a safe space for students to explore their inner landscapes.
              </p>
              <p>
                Whether we are flowing through a dynamic sequence or resting in stillness, my goal is to help you connect deeply with yourself and find harmony both on and off the mat.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <motion.div 
                className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-2xl text-primary">500+</p>
                  <p className="text-sm text-text-muted font-medium">Hours Trained</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-2xl text-primary">4+</p>
                  <p className="text-sm text-text-muted font-medium">Years Practice</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
