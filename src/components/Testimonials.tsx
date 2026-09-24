import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Aadhiyoga changed my perspective on fitness. It's not just about flexibility; it's about finding peace amidst the chaos. The instructors are incredibly supportive.",
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
            Community Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-text-main mb-6">
            Words from our students
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-bg-light p-10 rounded-[32px] relative mt-6">
              <div className="absolute -top-6 left-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <Quote size={20} className="fill-current" />
              </div>
              
              <p className="text-text-muted leading-relaxed mb-8 pt-4 italic">
                "{testimonial.quote}"
              </p>
              
              <div>
                <p className="font-semibold text-text-main">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
