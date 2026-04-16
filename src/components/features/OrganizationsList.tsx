'use client';

import { usePortfolioStore } from '../../stores';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function OrganizationsList() {
  const organizations = usePortfolioStore((state) => state.organizations);

  return (
    <section className="py-24 bg-white dark:bg-zinc-950" id="organizations">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle
          title="Pengalaman Organisasi"
          subtitle="Tim dan komunitas tempat saya belajar, berkontribusi, dan memimpin."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {organizations.map((org, idx) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col border-t-4 border-t-indigo-500 rounded-t-xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl">
                    <Users size={22} />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-xs font-medium text-zinc-500">
                    <Clock size={14} />
                    <span>{org.period}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-1">{org.role}</h3>
                <h4 className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">{org.name}</h4>
                
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed flex-grow">
                  {org.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
