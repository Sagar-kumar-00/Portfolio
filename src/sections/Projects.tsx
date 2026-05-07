import { ArrowUpRight, Github, Lock } from "lucide-react";
import slateflix from "../assets/projects/project1.png";
import chef from "../assets/projects/project2.png";

const projects = [
  {
    title: "CareConnexion",
    description: "Built a healthcare platform following HIPAA compliance from scratch using ReactJS and Bootstrap. Integrated Google Maps API to enable users to select their geofence, enhancing location-based services.",
    image: slateflix,
    tags: ["React.js", "Bootstrap", "HIPAA Compliance", "Google Maps API"],
    link: "https://www.thecareconnexion.com/",
    github: "https://github.com/Sagar-kumar-00",
    showGithubOnHover: false,
  },
  {
    title: "Uniinsiders",
    description: "An EdTech platform for students to search and compare colleges/courses leveraging Next.js. Built a college comparison tool for 250+ universities, attracting 500+ users in the first month.",
    image: chef,
    tags: ["Next.js", "TypeScript", "EdTech", "Comparison Tool"],
    link: "https://uniinsiders.vercel.app/",
    github: "https://github.com/Sagar-kumar-00",
    showGithubOnHover: false,
  },
  {
    title: "Medical Robotic Arm Simulator",
    description: "Built web-based medical robotic arm simulator with real-time control using React, TypeScript, and WebSocket. Implemented real-time position tracking and torque management with 3D visualization and Redux state management.",
    image: slateflix,
    imageUnavailable: true,
    tags: ["React", "TypeScript", "WebSocket", "Redux", "3D Visualization","three.js"],
    link: "#",
    github: "https://github.com/Sagar-kumar-00",
  },
];

const Projects = () => (
  <section id="projects" className="relative py-32 overflow-hidden">
    <div className="divider absolute top-0 left-0 right-0" />
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="label mb-4 animate-fade-up">Selected work</p>
            <h2 className="font-serif text-5xl md:text-6xl animate-fade-up animation-delay-100">
              Recent <span className="text-primary italic">Projects</span>
            </h2>
          </div>
          {/* <a
            href="https://github.com/Sagar-kumar-00?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            All projects <ArrowUpRight className="w-4 h-4" />
          </a> */}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="card card-hover rounded-xl overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                {project.imageUnavailable ? (
                  <div className="w-full h-full bg-card border border-border flex flex-col items-center justify-center gap-3 text-center p-6">
                    <Lock className="w-8 h-8 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">Image unavailable due to client privacy</p>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {!project.imageUnavailable && (
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.showGithubOnHover !== false && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="https://github.com/Sagar-kumar-00?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            All projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
