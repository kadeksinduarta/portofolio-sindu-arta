'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Code2, Cpu, Database } from 'lucide-react';

const technologies = [
  {
    category: "Bahasa Pemrograman",
    icon: <Code2 className="w-5 h-5 text-indigo-500" />,
    items: [
      { name: "JavaScript", learning: false },
      { name: "Python", learning: true },
      { name: "PHP", learning: false },
      { name: "Java", learning: true }
    ]
  },
  {
    category: "Framework & Library",
    icon: <Cpu className="w-5 h-5 text-violet-500" />,
    items: [
      { name: "React JS", learning: false },
      { name: "Next.js", learning: true },
      { name: "Tailwind CSS", learning: false },
      { name: "Node.js", learning: false },
      { name: "Laravel", learning: false },
      { name: "Framer Motion", learning: true }
    ]
  },
  {
    category: "Database & Tools",
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    items: [
      { name: "MySQL", learning: false },
      { name: "PostgreSQL", learning: true },
      { name: "MongoDB", learning: false },
      { name: "Git & GitHub", learning: false },
      { name: "Docker", learning: true },
      { name: "Figma", learning: false }
    ]
  }
];

export function TechStack() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950" id="skills">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle
          title="Keahlian & Teknologi"
          subtitle="Teknologi dan tools yang sering saya gunakan saat berkreasi."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 rounded-lg">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {tech.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {tech.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-2 border text-sm transition-colors
                        ${item.learning
                          ? 'border-indigo-100 bg-indigo-50/50 text-indigo-700 dark:border-indigo-900/30 dark:bg-indigo-900/10 dark:text-indigo-400'
                          : 'border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700'
                        }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.learning && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-500 dark:text-indigo-400 ml-1">
                          Learn
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
