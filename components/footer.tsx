'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-accent transition-colors p-2"
              >
                <social.icon size={20} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright and love note */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 Shivam Singh. All rights reserved.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-end"
            >
              Built with love and a lot of coffee
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                className="ml-1"
              >
                <Heart size={12} className="text-red-500 fill-current" />
              </motion.span>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
