import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Eye, Heart, Share, ArrowUpRight } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

export const DashboardSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Live Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See every video made for you, track its performance, and get a precise calculation of your return on investment down to the last penny.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <Card className="p-8 bg-gradient-card border-border/50 overflow-hidden">
            {/* Dashboard Image */}
            <div className="relative rounded-xl overflow-hidden mb-8 group">
              <img 
                src={dashboardImage} 
                alt="BennyBucks Dashboard Interface"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="hero" size="lg" className="shadow-2xl">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Real-time Tracking</div>
                  <div className="text-sm text-muted-foreground">Monitor every view and engagement</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">ROI Calculator</div>
                  <div className="text-sm text-muted-foreground">Precise penny-level calculations</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Engagement Metrics</div>
                  <div className="text-sm text-muted-foreground">Track likes, shares, and saves</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};