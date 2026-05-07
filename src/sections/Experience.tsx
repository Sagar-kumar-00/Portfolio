const experiences = [
  {
    period: "07/2023 — Present",
    role: "Sr. Software Engineer",
    company: "Agiliad Technologies Pvt Ltd, Pune",
    description: "Developed interactive web-based documentation portal and versatile UI component library using React.js. Utilized Jenkins and GitHub Actions for CI/CD automation. Provided extensive documentation using React Storybook, enhancing user adoption and engagement.",
    technologies: ["React.js", "TypeScript", "Jenkins", "GitHub Actions", "React Storybook"],
    current: true,
  },
  {
    period: "06/2022 — 06/2023",
    role: "React Js Developer",
    company: "InStep Technologies Pvt Ltd, Punjab",
    description: "Developed 2 healthcare platforms using React.js, integrating Stripe for payments. Integrated RESTful APIs for real-time updates and seamless user experiences. Led the migration from Create React App to Vite, optimizing build speed.",
    technologies: ["React.js", "Bootstrap", "RESTful APIs", "Stripe", "Vite"],
    current: false,
  },
];

const Experience = () => (
  <section id="experience" className="relative py-32 overflow-hidden">
    <div className="divider absolute top-0 left-0 right-0" />
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <p className="label mb-4 animate-fade-up">Career journey</p>
        <h2 className="font-serif text-5xl md:text-6xl mb-16 animate-fade-up animation-delay-100">
          Professional<br />
          <span className="text-primary italic">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 md:pl-20 animate-fade-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-6 top-6 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping-slow" />
                  )}
                </div>

                <div className="card card-hover rounded-xl p-6">
                  <span className="label text-primary/70">{exp.period}</span>
                  <h3 className="font-medium text-foreground mt-2 mb-0.5">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
