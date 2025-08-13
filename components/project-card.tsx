'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Project Image with parallax effect */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        
        {/* Overlay that appears on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-4"
        >
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-black"
            onClick={() => handleLinkClick(project.demoUrl)}
          >
            <ExternalLink size={16} className="mr-2" />
            Demo
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-black"
            onClick={() => handleLinkClick(project.githubUrl)}
          >
            <Github size={16} className="mr-2" />
            Code
          </Button>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold font-sora mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"
      />
    </motion.div>
  );
}