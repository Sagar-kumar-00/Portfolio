import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/sagar-go", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-kumar-87475421b/", label: "LinkedIn" },
];

export const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <a href="#" className="font-serif text-xl text-foreground">
          S<span className="text-primary">K</span>
        </a>
        <p className="text-xs text-muted-foreground mt-1">
          © {new Date().getFullYear()} Sagar Kumar
        </p>
      </div>
      <div className="flex items-center gap-3">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
