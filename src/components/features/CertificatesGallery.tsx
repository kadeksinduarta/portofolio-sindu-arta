'use client';

import { usePortfolioStore } from '../../stores';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function CertificatesGallery() {
  const certificates = usePortfolioStore((state) => state.certificates);

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 relative" id="certificates">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle 
          title="Sertifikasi & Pelatihan" 
          subtitle="Sertifikat keahlian sebagai bentuk validasi kemampuan profesional."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="group cursor-pointer flex flex-col md:flex-row h-full">
              <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center flex-grow">
                <div className="mb-3">
                  <Award size={20} className="text-indigo-500" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-3">{cert.issuer}</p>
                <div className="mt-auto">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded text-xs font-semibold">
                    Diterbitkan: {cert.date}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
