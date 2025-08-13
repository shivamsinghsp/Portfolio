'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '@/components/section-wrapper';
import SkillBadge from '@/components/skill-badge';
import { SKILLS } from '@/lib/constants';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '@/lib/animations';
import Image from 'next/image';


export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about" className="py-24">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold font-sora text-center mb-16"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              variants={scaleIn}
              custom={0.2}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl rotate-6" />
               <Image
                  src="/images/shivam.png"
                  alt="Profile Picture"
                  width={320}
                  height={320}   
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />        
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              variants={fadeInRight}
              custom={0.4}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="text-accent font-semibold">Shivam Singh</span>, a creative developer and designer
                 who loves turning bold ideas into beautiful, high-impact digital experiences.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My approach blends modern technology, clean design, and smooth interactions to create products that don't just work — they feel right.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
               Outside of code, you'll find me exploring design trends, experimenting with new tools, or recharging with music and travel.
              </p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            variants={fadeInUp}
            custom={0.6}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold font-sora mb-8">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SKILLS.map((skill, index) => (
                <SkillBadge 
                  key={skill} 
                  skill={skill} 
                  delay={index * 0.1} 
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}