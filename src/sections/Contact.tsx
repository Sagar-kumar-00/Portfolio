import { useState } from "react";
import Button from "../conponents/Button";
import { Mail, Phone, MapPin, Loader, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sagarrbarthwal@gmail.com", href: "mailto:sagarrbarthwal@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9528553483", href: "tel:+919528553483" },
  { icon: MapPin, label: "Location", value: "Pune", href: "#" },
];

type EmailJSError = { status: number; text: string };

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const err = error as EmailJSError;
      setStatus({ type: "error", message: err.text || "Failed to send. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm";

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <p className="label text-center mb-4 animate-fade-up">Get in touch</p>
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-4 animate-fade-up animation-delay-100">
            Let's build <span className="text-primary italic">something great</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 animate-fade-up animation-delay-200">
            Open to new opportunities and exciting projects.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card rounded-2xl p-8 animate-fade-up animation-delay-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Name</label>
                  <input type="text" id="name" required placeholder="John Doe" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
                  <input type="email" id="email" required placeholder="your@email.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
                  <textarea id="message" rows={5} required placeholder="Your message..." value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`} />
                </div>
                <Button size="lg" type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <><Loader className="w-4 h-4 animate-spin" /> Sending</> : <><Send className="w-4 h-4" /> Send Message</>}
                </Button>
                {status.type && (
                  <div className={`flex items-center gap-3 p-4 rounded-lg text-sm ${status.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`}>
                    {status.type === "success" ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                    {status.message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-4 animate-fade-up animation-delay-400">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="card card-hover flex items-center gap-4 p-5 rounded-xl"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="label mb-0.5">{info.label}</p>
                    <p className="text-sm text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
