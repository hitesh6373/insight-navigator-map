import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Floating animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-brand-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-brand-secondary/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-button rounded-xl flex items-center justify-center shadow-glow">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            BennyBucks
          </h1>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-foreground">Brands spark it.</span>
          <br />
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Creators scale it.
          </span>
          <br />
          <span className="text-foreground">The internet feels it.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          BennyBucks is the marketplace where brands, artists, YouTubers launch their campaigns 
          and creators turn them into viral organic content.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            Start your campaign
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline_brand" size="xl" className="group">
            <TrendingUp className="w-5 h-5" />
            Start as a Creator
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">Trusted by creators and brands worldwide</p>
          <div className="flex items-center gap-8 opacity-60">
            <div className="w-20 h-8 bg-muted rounded-md" />
            <div className="w-24 h-8 bg-muted rounded-md" />
            <div className="w-16 h-8 bg-muted rounded-md" />
            <div className="w-22 h-8 bg-muted rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};