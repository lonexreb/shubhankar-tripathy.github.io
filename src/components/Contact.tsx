
import React, { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out! I'll get back to you soon.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-secondary/50">
      <div className="container mx-auto container-padding">
        <ScrollReveal>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Interested in working together or have a question? I'd love to hear from you
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <ScrollReveal delay={200}>
            <div className="bg-card rounded-xl shadow-subtle p-8 h-full border border-border/40">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:shubhankar@example.com" 
                      className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                      shubhankar@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-foreground/70">
                      Available upon request
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-foreground/70">
                      Amherst, Massachusetts
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 mb-6">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-background/50 text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-background/50 text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                <h4 className="font-medium mb-4">Available for Opportunities</h4>
                <p className="text-foreground/80 text-sm">
                  I'm currently open to full-time positions, research collaborations, and freelance projects in machine learning, data science, and AI development.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-card rounded-xl shadow-subtle p-8 border border-border/40">
              <h3 className="text-xl font-medium mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
