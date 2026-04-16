'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Code2, Laptop, Rocket } from 'lucide-react';

export function AboutMe() {
  const skills = [
    { icon: <Code2 size={24} />, title: "Fullstack Development", desc: "Membangun aplikasi end-to-end dengan performa tinggi." },
    { icon: <Laptop size={24} />, title: "UI/UX Design", desc: "Menciptakan antarmuka yang intuitif dan profesional." },
    { icon: <Rocket size={24} />, title: "WordPress Developer", desc: "Membangun solusi bisnis berbasis CMS yang fleksibel." },
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              title="Tentang Saya"
              subtitle="Dedikasi pada kode yang bersih dan desain yang memikat."
              align="left"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-zinc-600 dark:text-zinc-400 space-y-6"
            >
              <p>
                Saya adalah seorang Software Engineer yang berfokus pada ekosistem web modern. Saya memiliki hasrat untuk menerjemahkan ide-ide kompleks menjadi arsitektur teknis yang kokoh dan antarmuka pengguna yang mulus.
              </p>
              <p>
                Dengan pendekatan yang mengutamakan kualitas, saya mendalami perpaduan antara fungsi bisnis, logika rekayasa perangkat lunak, dan estetika desain untuk menghasilkan produk digital yang memiliki impak.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 flex items-start gap-5">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-1">{skill.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{skill.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
