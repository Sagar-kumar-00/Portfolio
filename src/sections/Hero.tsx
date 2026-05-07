import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
import Button from "../conponents/Button";

const skills = ["HTML/CSS", "JavaScript", "React Js", "Next Js", "TypeScript", "Redux", "Git", "Unit Testing", "E2E Testing", "GitHub Actions"];

const socials = [
  { icon: Github, href: "https://github.com/Sagar-kumar-00", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-kumar-87475421b/", label: "LinkedIn" },
];

const Hero = () => (
  <section className="min-h-screen relative flex items-center overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
      backgroundSize: "80px 80px"
    }} />
    {/* Glow */}
    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="space-y-8">
          <p className="label animate-fade-up">Agiliad Technologies &mdash; Pune</p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] animate-fade-up animation-delay-100">
            Frontend<br />
            <span className="text-primary italic">Developer</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed animate-fade-up animation-delay-200">
            I'm Sagar Kumar — Front-end Developer specializing in React.js and Next.js, building scalable web applications with modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
            <a href="#contact">
              <Button size="lg">
                Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 text-base rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              View Work
            </a>
          </div>
          <div className="flex gap-3 animate-fade-up animation-delay-400">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — profile */}
        <div className="relative animate-fade-up animation-delay-300 flex justify-center lg:justify-end">
          <div className="relative w-72 md:w-80">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src="/Portfolio/new-profile.jpg"
                alt="Sagar Kumar"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 animate-float">
              <span className="text-xs text-primary font-medium">Available for work</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 animate-fade-up animation-delay-600">
        <div className="divider mb-8" />
        <p className="label text-center mb-6">TECH STACK</p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <span key={i} className="px-8 py-2 shrink-0 text-muted-foreground/70 text-sm font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors animate-fade-up animation-delay-800"
    >
      <span className="label">Scroll</span>
      <ChevronDown className="w-4 h-4 animate-bounce" />
    </a>
  </section>
);

export default Hero;
