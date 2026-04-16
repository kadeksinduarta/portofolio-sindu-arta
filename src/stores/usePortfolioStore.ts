import { create } from 'zustand';
import { Project, Achievement, Organization, Certificate } from '../types';

interface PortfolioState {
  projects: Project[];
  achievements: Achievement[];
  organizations: Organization[];
  certificates: Certificate[];
}

export const usePortfolioStore = create<PortfolioState>(() => ({
  projects: [
    {
      id: '1',
      title: 'Sinvitation | Undangan Digital',
      description: 'Sinvitation adalah platform undangan digital yang dirancang untuk memudahkan pembuatan dan pengelolaan undangan digital. Dengan antarmuka yang modern dan responsif, Sinvitation memungkinkan pengguna untuk membuat undangan digital dengan mudah dan cepat.',
      imageUrl: '../Sinvitation.png',
      link: 'https://sinvitation.com',
      technologies: ['Wordpress', 'Next.js', 'Tailwind CSS', 'Laravel'],
    },
    {
      id: '2',
      title: 'Siiday | Habit Tracker ',
      description: 'Siiday adalah platform habit tracker yang dirancang untuk membantu pengguna membangun kebiasaan baik dan mencapai tujuan mereka. Dengan antarmuka yang modern dan responsif, Siiday memungkinkan pengguna untuk melacak kebiasaan mereka dengan mudah dan cepat.',
      imageUrl: '../Siiday.png',
      link: 'https://siiday.sinduarta.my.id',
      technologies: ['React', 'Tailwind CSS', 'Laravel'],
    },
    {
      id: '3',
      title: 'Website Desa Selat',
      description: 'Membuat website penyebaran informasi desa selat dengan fitur-fitur modern dan responsif untuk memudahkan masyarakat dalam mengakses informasi dan memberikan edukasi terkait pengelolaan sampah dan juga menyebarkan produk unggulan desa selat',
      imageUrl: '../desaSelat.png',
      link: 'https://desaselat.com',
      technologies: ['Next.js', 'Laravel', 'Tailwind CSS'],
    },
    {
      id: '4',
      title: 'Booking Tour Pura Mengening',
      description: ' booking tour pura mengening dengan fitur-fitur modern dan responsif untuk memudahkan masyarakat dalam mengakses informasi dan memberikan edukasi terkait pengelolaan sampah dan juga menyebarkan produk unggulan desa selat',
      imageUrl: '../pura-mengening.png',
      link: 'https://balinesescaredpurification.com',
      technologies: ['Next.js', 'Laravel', 'Tailwind CSS'],
    }
  ],
  achievements: [
    {
      id: '1',
      title: 'Pendanaan PKM 2025',
      organization: 'Kemdiktisaintek (simbelmawa)',
      year: '2025',
      description: 'Pengabdian kepada masyarakat.'
    },
    {
      id: '2',
      title: 'Pendanaan Innovillage 6',
      organization: 'Telkom Indonesia X Telkom University',
      year: '2025',
      description: 'Pengabdian kepada masyarakat.'
    }
  ],
  organizations: [
    {
      id: '1',
      role: 'Koordinator Bidang 3',
      name: 'UKM CATUR UNIVERSITAS PENDIDIKAN GANESHA',
      period: '2025 - 2026',
      description: 'Bertanggung jawab atas pengembangan sumber daya manusia dan kegiatan yang berkaitan dengan pengembangan diri anggota dan menyebarluaskan informasi terkait ukm catur.'
    },
    {
      id: '2',
      role: 'Staff Multimedia informasi',
      name: 'BEM FAKULTAS TEKNIK DAN KEJURUAN',
      period: '2025 - 2026',
      description: 'Bertanggung jawab atas pengembangan sumber daya manusia dan kegiatan yang berkaitan dengan pengembangan diri anggota dan menyebarluaskan informasi terkait Bem FTK.'
    }
  ],
  certificates: [
    {
      id: '1',
      title: 'Advanced React Patterns',
      issuer: 'Frontend Masters',
      date: '2025',
      imageUrl: 'https://images.unsplash.com/photo-1589330694653-bee6ff057f98?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: '2',
      title: 'Next.js Enterprise Architect',
      issuer: 'Vercel Academy',
      date: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
    }
  ]
}));
