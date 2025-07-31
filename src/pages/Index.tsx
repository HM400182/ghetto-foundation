import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsShowcase } from "@/components/ProgramsShowcase";
import { FeaturedStories } from "@/components/FeaturedStories";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsShowcase />
        <FeaturedStories />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;