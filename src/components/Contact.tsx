import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 bg-bg-light relative overflow-hidden">
      {/* Abstract Background SVG */}
      <svg className="absolute bottom-0 left-0 w-full h-full opacity-[0.03] pointer-events-none text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 C30,60 70,80 100,50 L100,100 Z" fill="currentColor" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="text-accent uppercase tracking-widest text-sm font-medium">
              Get in Touch
            </span>
            <span className="w-8 h-[1px] bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-text-main mb-6">
            Start your journey
          </h2>
          <p className="text-text-muted text-lg">
            Have questions about our classes or want to book a personal session? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-0 bg-white rounded-[3rem] shadow-xl shadow-primary/5 border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Contact Info */}
          <div className="bg-primary p-12 md:p-16 text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-light mb-12">Contact Information</h3>

              <div className="space-y-10">
                <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-5 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-light mb-1 tracking-wider uppercase">Call Us</p>
                    <p className="text-lg font-medium">+91 8156873035</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-5 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-light mb-1 tracking-wider uppercase">WhatsApp</p>
                    <p className="text-lg font-medium">+91 8156873035</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-5 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-light mb-1 tracking-wider uppercase">Email</p>
                    <p className="text-lg font-medium">drachubharathan@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-5 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-light mb-1 tracking-wider uppercase">Location</p>
                    <p className="text-lg font-medium leading-relaxed">Kilimanoor, Kerala<br /><span className="text-white/70 text-sm font-normal">Available for Online Sessions</span></p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 md:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-bg-light/50 hover:bg-bg-light"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-bg-light/50 hover:bg-bg-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-bg-light/50 hover:bg-bg-light resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-4 bg-primary text-white font-medium rounded-2xl hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
