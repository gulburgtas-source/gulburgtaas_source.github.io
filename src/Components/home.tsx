import Hero from './portfolio/Hero';
import ProjectGrid from './portfolio/ProjectGrid';
import ImpactSection from './portfolio/ImpactSection';
import BackgroundAnimation from './portfolio/BackgroundAnimation';
import Header from './portfolio/Header';
import GlobeFooter from './portfolio/GlobeFooter';
import FeaturedWork from './portfolio/FeaturedWork';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <div className="pt-20">
        <Hero />
        <FeaturedWork />
        <ProjectGrid />
        <ImpactSection />
      </div>
      <GlobeFooter />
    </div>
  );
}