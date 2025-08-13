'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
  skill: string;
  delay?: number;
}

export default function SkillBadge({ skill, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge 
        variant="secondary" 
        className="px-4 py-2 text-sm font-medium bg-card hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default shadow-sm"
      >
        {skill}
      </Badge>
    </motion.div>
  );
}