'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Code, Briefcase, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[90vh] bg-zinc-50 flex items-center justify-center pt-24 overflow-hidden" id="hero">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-zinc-900 dark:text-white tracking-tight">
              Halo, Saya <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
                Sindu Arta
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed">
              Software Engineer yang berfokus pada pembuatan antarmuka pengguna yang clean, modern, dan scalable.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button>
                <span>Lihat Proyek</span>
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline">
                Hubungi Saya
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">Temukan saya di</span>
              <div className="flex gap-3">
                <a href="#" className="p-2.5 rounded-xl text-zinc-500 bg-zinc-50 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800/50 dark:hover:bg-indigo-900/30 transition-colors">
                  <Code size={20} />
                </a>
                <a href="#" className="p-2.5 rounded-xl text-zinc-500 bg-zinc-50 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800/50 dark:hover:bg-indigo-900/30 transition-colors">
                  <Briefcase size={20} />
                </a>
                <a href="#" className="p-2.5 rounded-xl text-zinc-500 bg-zinc-50 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800/50 dark:hover:bg-indigo-900/30 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 mx-auto max-w-md relative">
              <img
                src="Profil.png"
                alt="Sindu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl"></div>
            </div>

            {/* Elegant floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute bottom-12 -left-8 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl shadow-black/5 border border-zinc-100 dark:border-zinc-800"
            >
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Teknik Informatika</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Mahasiswa</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
