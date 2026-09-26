import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-bg-light">
      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.svg
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] opacity-20 text-primary"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96.1,-18.1,96.2,-2.7C96.3,12.6,90.8,28.1,81.3,40.9C71.8,53.7,58.3,63.9,43.9,71.5C29.5,79.1,14.7,84.1,-0.6,85.1C-15.9,86.1,-31.8,83,-45.4,75.2C-59.1,67.3,-70.6,54.7,-78.9,40.1C-87.2,25.5,-92.3,8.9,-90.7,-7.2C-89,-23.3,-80.7,-38.8,-70.1,-51.5C-59.5,-64.1,-46.6,-73.9,-32.7,-80.7C-18.8,-87.5,-4.4,-91.3,9.7,-91.6C23.7,-91.8,47.4,-88.4,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </motion.svg>
        
        <motion.svg
          className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] opacity-30 text-accent-light"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M39.9,-65.7C52.6,-57.4,64.4,-47.9,73.1,-35.8C81.8,-23.7,87.4,-9.1,85.8,5C84.2,19.2,75.4,32.9,64.6,44.1C53.8,55.3,41,64,26.9,70.5C12.8,77,-2.6,81.2,-17.4,78.8C-32.2,76.4,-46.4,67.3,-58.2,56C-70.1,44.7,-79.6,31.2,-84.4,16.2C-89.2,1.2,-89.3,-15.3,-82.7,-29.4C-76.1,-43.5,-62.8,-55.1,-48.6,-62.9C-34.4,-70.6,-19.3,-74.4,-4.3,-73.7C10.7,-73,27.2,-74.1,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-accent"></div>
            <span className="text-accent uppercase tracking-widest text-sm font-medium">Awaken Your Spirit</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-[5rem] font-light text-text-main leading-[1.1] mb-8">
            Find your balance with <br />
            <span className="font-medium text-primary block mt-2">Aadhiavedha Yoga</span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-text-muted mb-10 text-balance leading-relaxed max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover a holistic approach to wellness through mindful movement, breathwork, and deep relaxation. Start your personal journey today.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-primary text-white text-center font-medium rounded-full hover:bg-primary-light transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
            >
              Explore Yoga
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#programs"
              className="px-8 py-4 bg-transparent text-text-main text-center font-medium rounded-full border border-primary/20 hover:border-primary hover:bg-primary/5 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
            <motion.img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
              alt="Woman practicing yoga in a serene environment"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60" />
            
            {/* Subtle Animated Path overlaid on image */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M0,100 C30,90 70,100 100,80 L100,100 L0,100 Z" 
                fill="currentColor" 
                className="text-bg-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
          </div>

          {/* Floating Element */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium mb-1">Find Your Center</p>
                <p className="font-semibold text-primary">Mindful Practice</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
