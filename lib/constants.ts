import { Github, Linkedin, Twitter } from 'lucide-react';
import type { NavItem, SocialLink, Project } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
];

export const SKILLS: string[] = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'Python', 'PostgreSQL', 'AWS', 'Docker',
  'Figma', 'Framer Motion', 'TailwindCSS', 'GraphQL'
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with seamless checkout',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['React', 'Next.js', 'Stripe', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'Creative Portfolio',
    description: 'Showcasing art through interactive storytelling',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['React', 'Framer Motion', 'Three.js', 'GSAP']
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description: 'Data visualization that tells compelling stories',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB']
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: 'Secure and intuitive financial management',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Plaid']
  },
  {
    id: 5,
    title: 'AI-Powered Blog',
    description: 'Content creation meets artificial intelligence',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Redis']
  },
  {
    id: 6,
    title: 'Real-time Chat',
    description: 'Connecting people through seamless communication',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['Socket.io', 'Express', 'React', 'JWT']
  }
];

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  verySlow: 1.2
} as const;

export const ANIMATION_EASE = "easeOut" as const;
