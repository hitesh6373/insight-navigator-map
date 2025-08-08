import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Github, Star } from "lucide-react";
import bennyBucksLogo from "@/assets/bennybucks-logo.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={bennyBucksLogo} alt="BennyBucks" className="w-8 h-8" />
          <span className="text-white text-xl font-semibold">bennybucks</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm">
          <span className="text-slate-300 hover:text-white cursor-pointer">Product</span>
          <span className="text-slate-300 hover:text-white cursor-pointer">Use cases</span>
          <span className="text-slate-300 hover:text-white cursor-pointer">Docs</span>
          <span className="text-slate-300 hover:text-white cursor-pointer">Community</span>
          <span className="text-slate-300 hover:text-white cursor-pointer">Enterprise</span>
          <span className="text-slate-300 hover:text-white cursor-pointer">Pricing</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-slate-300">
            <Github className="w-4 h-4" />
            <Star className="w-4 h-4" />
            <span className="text-sm">127,673</span>
          </div>
          <Button variant="ghost" className="text-slate-300 hover:text-white">Sign in</Button>
          <Button variant="hero" size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Brands spark it.</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Creators scale it.
              </span>
              <br />
              <span className="text-white">The internet feels it.</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              BennyBucks is the marketplace where brands, artists, YouTubers launch their campaigns 
              and creators turn them into viral organic content. Get real engagement, authentic reach, 
              and measurable ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Start your campaign
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start as a Creator
              </Button>
            </div>
          </div>
          
          {/* Right Content - 3D Lightning Bolt Effect */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* 3D Lightning Bolt */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 opacity-90 transform rotate-12 rounded-lg blur-sm" 
                   style={{
                     clipPath: 'polygon(20% 0%, 40% 0%, 10% 40%, 25% 40%, 0% 100%, 15% 60%, 5% 60%, 35% 20%, 20% 20%, 50% 0%)'
                   }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-red-400 to-orange-500 transform rotate-12 rounded-lg" 
                   style={{
                     clipPath: 'polygon(20% 0%, 40% 0%, 10% 40%, 25% 40%, 0% 100%, 15% 60%, 5% 60%, 35% 20%, 20% 20%, 50% 0%)'
                   }}>
              </div>
              
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-orange-400/30 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>

        
        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { title: "Brands can", subtitle: "Launch viral campaigns", icon: "⚡" },
            { title: "Creators can", subtitle: "Turn content into income", icon: "⚡" },
            { title: "Artists can", subtitle: "Get millions of streams", icon: "⚡" },
            { title: "You can", subtitle: "Start your journey today", icon: "▶️" }
          ].map((item, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-800/80 transition-colors">
              <div className="text-orange-400 font-semibold text-sm mb-2">{item.title}</div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">{item.icon}</span>
                <span className="text-slate-300 text-sm">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};