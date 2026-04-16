'use client';

import { usePortfolioStore } from '../../stores';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function AchievementsList() {
  const achievements = usePortfolioStore((state) => state.achievements);

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30" id="achievements">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle
          title="Pencapaian & Lomba"
          subtitle="Tonggak bersejarah dalam perjalanan akademik dan profesional."
        />

        <div className="flex flex-col gap-5">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy size={16} className="text-yellow-500" />
                    <span className="text-sm font-semibold tracking-wide uppercase text-indigo-600 dark:text-indigo-400">
                      {item.organization}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg shrink-0 text-zinc-600 dark:text-zinc-400 text-sm font-medium self-start md:self-center border border-zinc-200 dark:border-zinc-700">
                  <Calendar size={16} />
                  <span>{item.year}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
