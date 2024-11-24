import AboutSection from '@/components/sections/AboutSection';
import CommunitySection from '@/components/sections/CommunitySection';
import ContactSection from '@/components/sections/ContactSection';
import HealingCircleSection from '@/components/sections/HeallingCircleSection';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import BackToTopButton from '@/components/ui/BackToTopButton';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <HealingCircleSection />
      <CommunitySection />
      <ContactSection />
      <BackToTopButton />
    </>
  );
}
