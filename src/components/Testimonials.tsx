import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Aadhiavedha Yoga changed my perspective on fitness. It's not just about flexibility; it's about finding peace amidst the chaos. The instructors are incredibly supportive.",
    name: "Sarah Jenkins",
    role: "Beginner Student"
  },
  {
    quote: "The personalized sessions have been a game-changer for my back pain. I've never felt more in tune with my body. Highly recommend their holistic approach.",
    name: "Michael Chen",
    role: "Private Client"
  },
  {
    quote: "A truly welcoming environment. As someone who was intimidated by yoga at first, I felt completely at ease from my very first class. Beautiful community.",
    name: "Emily Rodriguez",
    role: "Vinyasa Regular"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Abstract Background SVG */}
      <svg className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 C30,40 70,20 100,50 C70,80 30,60 0,100 Z" fill="currentColor" />
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
              Community Stories
            </span>
            <span className="w-8 h-[1px] bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-text-main mb-6">
            Words from our students
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-bg-light p-10 rounded-[3rem] relative mt-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-primary/5 flex flex-col"
            >
              <div className="absolute -top-6 left-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              
              <p className="text-text-main leading-loose mb-8 pt-6 font-medium text-lg flex-grow">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto border-t border-gray-200/60 pt-6">
                <p className="font-semibold text-text-main tracking-wide">{testimonial.name}</p>
                <p className="text-sm text-primary mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
