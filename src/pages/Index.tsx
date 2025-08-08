import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { StatsSection } from "@/components/StatsSection";
import { DashboardSection } from "@/components/DashboardSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <HowItWorksSection />
      <StatsSection />
      <DashboardSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
