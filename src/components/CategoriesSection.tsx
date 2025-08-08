import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Scissors, Zap, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Video,
    title: "Creator Originals",
    description: "Real people. Real content. Creators turn a product into an authentic recommendation, not a promotion. You share the vibe, and our creators craft fun, relatable videos, skits, or animations that create impact.",
    gradient: "from-brand-primary to-brand-primary/80"
  },
  {
    icon: Scissors,
    title: "Clipping",
    description: "Perfect for YouTubers, Influencer, movie/show promos or anyone with raw content that deserves more reach. Creators take your existing videos and turn them into scroll-stopping shorts, hooks, edits, and reactions. Just drop your link and the creators do the rest.",
    gradient: "from-brand-secondary to-brand-secondary/80"
  },
  {
    icon: Zap,
    title: "LogoDrop",
    description: "Your logo isn't just seen, it's remembered. Our creators organically blend your brand into viral content, making it a natural part of the video. Just Upload your logo and vibe, and watch your brand show up everywhere.",
    gradient: "from-brand-accent to-brand-accent/80"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Categories We <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Cater</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From authentic recommendations to viral edits, we cover every content format that drives engagement and results.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group relative p-8 bg-gradient-card border-border/50 hover:border-brand-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-brand-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {category.description}
              </p>

              {/* CTA */}
              <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-brand-primary hover:text-brand-primary">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};