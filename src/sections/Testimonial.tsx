import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sagar is one of those developers who truly gets it. He writes clean code, asks the right questions, and always thinks about the bigger picture. What I appreciate most is his balance between moving fast and maintaining quality. He's reliable, collaborative, and brings positive energy to every project. He is truely a team player.",
    author: "Sharad Karimungi",
    role: "Tech Lead, Agiliad Technologies",
  },
  {
    quote: "Working with Sagar has been a pleasure. He's technically strong but also knows how to communicate complex ideas clearly. Whether it's jumping into a challenging bug or helping teammates understand a new concept, he always steps up. His work ethic and attention to detail set a high standard for the team.",
    author: "Rakesh Joshi",
    role: "Senior Frontend Engineer, Infosys",
  },
  {
    quote: "Sagar consistently delivers high-quality work and takes genuine ownership of his projects. He's proactive about identifying issues before they become problems and always seeks ways to improve our processes. Beyond his technical skills, he's a great team player who makes everyone around him better.",
    author: "Vineet Rajpoor",
    role: "Senior Frontend Engineer, InStep Technologies",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="label text-center mb-4 animate-fade-up">Testimonials</p>
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-16 animate-fade-up animation-delay-100">
            What people <span className="text-primary italic">say</span>
          </h2>

          <div className="card rounded-2xl p-8 md:p-12 relative animate-fade-up animation-delay-200">
            <Quote className="w-8 h-8 text-primary/30 mb-6" />
            <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-8">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-medium text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
