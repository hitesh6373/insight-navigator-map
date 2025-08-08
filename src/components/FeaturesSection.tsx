import { Card } from "@/components/ui/card";
import { Share2, Users, TrendingUp, Target, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Share2,
    title: "Get Organic Reach",
    description: "With BennyBucks, you're not an ad. You become the organic moment everyone shares, saves, and talks about.",
    gradient: "from-brand-primary to-brand-primary/80"
  },
  {
    icon: Users,
    title: "Reach Beyond Your Followers",
    description: "You're not just hiring a creator, you're firing up a whole community that's hungry to make you or your brand blow up.",
    gradient: "from-brand-secondary to-brand-secondary/80"
  },
  {
    icon: TrendingUp,
    title: "Creators Earn When You Win",
    description: "Creators aren't just uploading, they're invested. Their payout depends on performance, so they hustle to make your brand trend.",
    gradient: "from-brand-accent to-brand-accent/80"
  },
  {
    icon: Target,
    title: "Create Your Personalized Campaign",
    description: "Choose exactly what fits your brand: creator type, location, gender, niche, platform, and style. You control everything.",
    gradient: "from-brand-primary to-brand-secondary"
  },
  {
    icon: Shield,
    title: "No Bots. No Fluff. Just Real Views.",
    description: "Every video is AI-verified for authenticity and campaign relevance. Fake, botted irrelevant videos are filtered out.",
    gradient: "from-brand-secondary to-brand-accent"
  },
  {
    icon: BarChart3,
    title: "Live Dashboard",
    description: "See every video made for you, track its performance, and get a precise calculation of your ROI down to the last penny.",
    gradient: "from-brand-accent to-brand-primary"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">BennyBucks?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your brand presence with authentic creator content that drives real engagement and measurable results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative p-8 bg-gradient-card border-border/50 hover:border-brand-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};