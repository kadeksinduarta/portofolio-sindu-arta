'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Code, Briefcase, Mail } from 'lucide-react';

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

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
                <a href="#projects">Lihat Proyek</a>
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline">
                <a href="mailto:ikadeksinduarta@gmail.com">Hubungi Saya</a>
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">Temukan saya di</span>
              <div className="flex gap-3">
                <a href="https://github.com/kadeksinduarta" className="p-2.5 rounded-xl text-zinc-500 bg-zinc-50 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800/50 dark:hover:bg-indigo-900/30 transition-colors">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sindu-arta/" className="p-2.5 rounded-xl text-zinc-500 bg-zinc-50 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800/50 dark:hover:bg-indigo-900/30 transition-colors">
                  <Briefcase size={20} />
                </a>
                <a href="mailto:ikadeksinduarta@gmail.com" className="p-2.5 rounded-xl text-zinc-500 bg-zinc-50 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800/50 dark:hover:bg-indigo-900/30 transition-colors">
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
