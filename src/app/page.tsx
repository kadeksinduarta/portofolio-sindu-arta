import { Navbar } from '../components/features/Navbar';
import { Hero } from '../components/features/Hero';
import { AboutMe } from '../components/features/AboutMe';
import { TechStack } from '../components/features/TechStack';
import { AchievementsList } from '../components/features/AchievementsList';
import { OrganizationsList } from '../components/features/OrganizationsList';
import { ProjectGallery } from '../components/features/ProjectGallery';
import { CertificatesGallery } from '../components/features/CertificatesGallery';
import { Footer } from '../components/features/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <TechStack />
      <AchievementsList />
      <OrganizationsList />
      <ProjectGallery />
      {/* <CertificatesGallery /> */}
      <Footer />
    </main>
  );
}
