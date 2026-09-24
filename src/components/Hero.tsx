import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] md:rounded-bl-[200px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-light text-text-main leading-tight mb-6">
            Find your balance with <span className="font-semibold text-primary">Aadhiyoga</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted mb-10 text-balance leading-relaxed">
            Discover a holistic approach to wellness through mindful movement, breathwork, and deep relaxation. Start your personal journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-white text-center font-medium rounded-full hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a Session
            </a>
            <a
              href="#programs"
              className="px-8 py-4 bg-transparent text-text-main text-center font-medium rounded-full border border-primary hover:bg-primary/5 transition-all"
            >
              Explore Classes
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
              alt="Woman practicing yoga in a serene environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Element */}
          {/* <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-sm text-text-muted font-medium mb-1">Next Session</p>
            <p className="font-semibold text-primary">Sunrise Vinyasa</p>
            <p className="text-sm text-text-main mt-1">Tomorrow, 6:00 AM</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
