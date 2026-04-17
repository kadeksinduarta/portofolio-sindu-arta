'use client';

import { usePortfolioStore } from '../../stores';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Briefcase, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function ExperienceList() {
  const experiences = usePortfolioStore((state) => state.experiences);

  return (
    <section className="py-24 bg-white dark:bg-zinc-950" id="experience">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle
          title="Pengalaman"
          subtitle="Jejak profesional dan kontribusi yang telah saya lakukan."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col border-t-4 border-t-indigo-500 rounded-t-xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl">
                    <Briefcase size={22} />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-xs font-medium text-zinc-500">
                      <Clock size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-xs font-medium text-zinc-500">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-1">{exp.role}</h3>
                <h4 className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">{exp.company}</h4>
                
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed flex-grow">
                  {exp.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
