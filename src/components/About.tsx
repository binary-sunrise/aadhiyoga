import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-bg-light shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop"
                alt="Peaceful meditation setup"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dot pattern or shape could go here */}
          </div>
          
          <div className="order-1 md:order-2">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
              About Aadhiyoga
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-text-main mb-6 leading-tight">
              A sanctuary for your <span className="italic text-primary">mind, body,</span> and <span className="italic text-primary">spirit.</span>
            </h2>
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              At Aadhiyoga, we believe that yoga is more than just physical postures; it is a profound journey of self-discovery and holistic well-being. Our approach is rooted in authentic traditions tailored for modern lifestyles.
            </p>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Whether you are taking your first breath on the mat or deepening an advanced practice, we provide a welcoming, nurturing environment where you can explore mindfulness, cultivate strength, and find true inner peace.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <p className="font-medium text-text-main">Namaste.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
