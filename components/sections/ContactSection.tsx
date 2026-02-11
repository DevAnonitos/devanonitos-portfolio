"use client"

import React from 'react';
import Container from '@/components/layout/Container';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  SOCIAL_LINKS, 
  DEVELOPER_INFO 
} from '@/constants';
import { 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useScrollReveal } from '@/hooks';
import { 
  FADE_IN_UP, 
  STAGGER_CONTAINER, 
  REVEAL_LEFT, 
  REVEAL_RIGHT 
} from '@/constants/animations';
import Link from 'next/link';

const ContactSection = () => {
  const { ref, controls } = useScrollReveal();

  const CONTACT_INFO = [
    {
      icon: Mail,
      label: "Email Me",
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: DEVELOPER_INFO.location,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: MessageSquare,
      label: "Open for",
      value: "Freelance & Full-time",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={STAGGER_CONTAINER}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Side: Info & Socials */}
          <motion.div variants={REVEAL_LEFT} className="space-y-12">
            <div className="space-y-6">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-primary border-primary/20 bg-primary/5">
                Get In Touch
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Legendary</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Have a project in mind or just want to chat? Feel free to reach out. 
                I&apos;m always open to new opportunities and creative collaborations.
              </p>
            </div>

            <div className="grid gap-6">
              {CONTACT_INFO.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href || "#"}
                  className={item.href ? "group" : "pointer-events-none"}
                >
                  <div className="flex items-center gap-6 p-4 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/50">
                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} transition-transform group-hover:scale-110`}>
                      <item.icon className="size-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">{item.label}</p>
                      <p className="text-lg font-semibold text-foreground/90">{item.value}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/40">Connect with me</p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: SOCIAL_LINKS.github },
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                  { icon: Twitter, href: SOCIAL_LINKS.twitter },
                ].map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    className="p-4 rounded-2xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1 shadow-sm"
                  >
                    <social.icon className="size-6" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div variants={REVEAL_RIGHT} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-[2.5rem] blur-2xl -z-10" />
            <div className="rounded-[2.5rem] bg-card border border-border/50 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              {/* Form Decoration */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Sparkles className="size-32 -rotate-12" />
              </div>

              <form className="space-y-6 relative" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Your Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="rounded-2xl h-12 bg-background/50 border-border/50 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="rounded-2xl h-12 bg-background/50 border-border/50 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Subject</label>
                  <Input 
                    placeholder="Project Inquiry" 
                    className="rounded-2xl h-12 bg-background/50 border-border/50 focus:border-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="rounded-2xl min-h-[160px] bg-background/50 border-border/50 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                <Button className="w-full rounded-2xl h-14 text-base font-bold shadow-lg shadow-primary/20 group">
                  Send Message
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
                
                <p className="text-[10px] text-center text-muted-foreground/60 font-medium uppercase tracking-widest pt-2">
                  Average response time: &lt; 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;
