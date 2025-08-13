// Common types used throughout the application
import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Variants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: (i?: number) => {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition: {
      delay?: number;
      duration: number;
      ease?: number[] | string;
    };
  };
}

export interface ThemeColors {
  background: string;
  foreground: string;
  accent: string;
  muted: string;
  border: string;
}