import React from 'react';
import { Leaf, Sun, Wind, Heart, User } from 'lucide-react';

const programs = [
  {
    title: 'Beginner Yoga',
    description: 'Perfect for those new to yoga. Focus on basic postures, alignment, and conscious breathing.',
    icon: Leaf,
  },
  {
    title: 'Hatha Yoga',
    description: 'A gentle paced class that focuses on static postures and mindful breathing to build strength and flexibility.',
    icon: Sun,
  },
  {
    title: 'Pranayama & Meditation',
    description: 'Guided breathwork and meditation techniques to calm the mind, reduce stress, and enhance clarity.',
    icon: Wind,
  },
  {
    title: 'Vinyasa Flow',
    description: 'Dynamic movement linked with breath. A more rigorous practice to build heat and endurance.',
    icon: Heart,
  },
  {
    title: 'Personal Sessions',
    description: 'One-on-one sessions tailored specifically to your body, goals, and experience level.',
    icon: User,
  },
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-text-main mb-6">
            Yoga Programs
          </h2>
          <p className="text-text-muted text-lg">
            Discover a variety of classes designed to support you at every stage of your wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <program.icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-text-main">{program.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
