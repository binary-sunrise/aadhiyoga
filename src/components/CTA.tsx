import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-bottom-left scale-110" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-light text-text-main mb-6">
          Ready to begin your journey?
        </h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Join our community today and take the first step towards a more balanced, peaceful, and vibrant life.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-white text-center font-medium rounded-full hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
