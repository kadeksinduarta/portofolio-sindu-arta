'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const isCenter = align === 'center';
  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : ''}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3 ${isCenter ? 'text-center' : ''}`}
      >
        {title}
      </motion.p>
      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className={`text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-snug max-w-2xl ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.h2>
      )}
    </div>
  );
}
