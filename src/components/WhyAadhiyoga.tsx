import React from 'react';
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

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
            The Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Why choose Aadhiyoga?
          </h2>
          <p className="text-primary-light text-lg mb-10 leading-relaxed text-balance">
            We believe that yoga is for everyone. Our approach strips away the intimidation, focusing on what truly matters: your personal growth, peace of mind, and physical well-being.
          </p>
          
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552845108-5f782c5a2c42?q=80&w=1000&auto=format&fit=crop"
              alt="Yoga practice outdoors"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAadhiyoga;
