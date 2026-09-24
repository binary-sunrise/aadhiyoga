import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section id="instructor" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-bg-light rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop"
                alt="Yoga Instructor"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-2 block">
              Meet Your Guide
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-text-main mb-2">
              [Instructor Name]
            </h2>
            <p className="text-primary font-medium text-lg mb-8">Lead Yoga Teacher & Founder</p>
            
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Hello and welcome! My journey with yoga began [X] years ago, and it profoundly transformed my life. I founded Aadhiyoga to share the incredible healing and grounding power of this ancient practice with others.
              </p>
              <p>
                I am a certified RYT-500 instructor specializing in Hatha, Vinyasa, and restorative practices. My classes focus on mindful alignment, breath awareness, and creating a safe space for students to explore their inner landscapes.
              </p>
              <p>
                Whether we are flowing through a dynamic sequence or resting in stillness, my goal is to help you connect deeply with yourself and find harmony both on and off the mat.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">
                <p className="font-bold text-xl text-primary">500+</p>
                <p className="text-sm text-text-muted">Hours Trained</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">
                <p className="font-bold text-xl text-primary">[X]+</p>
                <p className="text-sm text-text-muted">Years Practice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
