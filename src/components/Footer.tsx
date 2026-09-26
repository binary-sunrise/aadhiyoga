import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-semibold tracking-wide text-primary mb-6 block">
              Aadhiavedha Yoga.
            </a>
            <p className="text-text-muted max-w-sm leading-relaxed mb-8">
              A holistic approach to wellness. We provide a sanctuary for your mind, body, and spirit through authentic yoga practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="px-4 py-2 rounded-full bg-bg-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors text-sm font-medium">
                Instagram
              </a>
              <a href="#" className="px-4 py-2 rounded-full bg-bg-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors text-sm font-medium">
                Facebook
              </a>
              <a href="#" className="px-4 py-2 rounded-full bg-bg-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors text-sm font-medium">
                X / Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-main mb-6">Quick Links</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Yoga Programs</a></li>
              <li><a href="#instructor" className="hover:text-primary transition-colors">Instructor</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-main mb-6">Legal</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Aadhiavedha Yoga. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with mindfulness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
