import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", description: "Well-structured, maintainable, reusable code." },
  { icon: Rocket, title: "Performance", description: "Fast, smooth, and responsive interfaces." },
  { icon: Users, title: "User Focus", description: "Intuitive and accessible user experiences." },
  { icon: Lightbulb, title: "Always Learning", description: "Exploring new tools, tech, and UI patterns." },
];

const About = () => (
  <section id="about" className="relative py-32 overflow-hidden">
    <div className="divider absolute top-0 left-0 right-0" />
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto items-start">
        <div className="space-y-8">
          <p className="label animate-fade-up">About me</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight animate-fade-up animation-delay-100">
            Building modern<br />
            <span className="text-primary italic">web experiences</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-up animation-delay-200">
            <p>
              I'm a Senior Software Engineer at Agiliad Technologies with experience in developing interactive web applications, UI component libraries, and documentation portals. My expertise lies in creating scalable, responsive solutions using React.js, Next.js, and TypeScript.
            </p>
            <p>
              I've successfully built healthcare platforms, EdTech solutions, and advanced medical simulators. I focus on delivering high-quality code, implementing CI/CD pipelines, and ensuring optimal performance across all devices. I'm passionate about creating intuitive user experiences and leveraging modern web technologies to solve complex problems.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 animate-fade-up animation-delay-300">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="card card-hover p-6 rounded-xl"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
