'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';
import type { ContactFormData } from '@/types';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Message sent! ✨",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or reach out directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="py-24">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              variants={fadeInLeft}
              custom={0.2}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold font-sora mb-4">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to discuss new opportunities, creative projects, 
                  or just chat about the latest in web development.
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail size={20} />
                  <span>shivamsinghabc439@gmail.com</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Available for freelance work</span>
                </motion.div>
              </div>

              {/* Decorative element */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
                <p className="text-sm text-muted-foreground italic pl-4">
                  "The best way to predict the future is to create it."
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInRight}
              custom={0.4}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-accent/20 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}