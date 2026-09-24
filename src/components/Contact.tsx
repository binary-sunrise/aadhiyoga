import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-text-main mb-6">
            Start your journey
          </h2>
          <p className="text-text-muted text-lg">
            Have questions about our classes or want to book a personal session? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Contact Info */}
          <div className="bg-primary p-12 text-white">
            <h3 className="text-3xl font-light mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="text-accent mt-1" size={24} />
                <div>
                  <p className="text-sm text-primary-light mb-1">Call Us</p>
                  <p className="text-lg">+91 [Your Phone Number]</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle className="text-accent mt-1" size={24} />
                <div>
                  <p className="text-sm text-primary-light mb-1">WhatsApp</p>
                  <p className="text-lg">+91 [Your WhatsApp Number]</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-accent mt-1" size={24} />
                <div>
                  <p className="text-sm text-primary-light mb-1">Email</p>
                  <p className="text-lg">hello@aadhiyoga.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-accent mt-1" size={24} />
                <div>
                  <p className="text-sm text-primary-light mb-1">Location</p>
                  <p className="text-lg">Your City, State<br/>Available for Online Sessions</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-bg-light"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-bg-light"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-bg-light resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-medium rounded-xl hover:bg-primary-light transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
