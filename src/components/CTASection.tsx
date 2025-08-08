import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Rocket, Users } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA */}
        <Card className="p-12 md:p-16 text-center bg-gradient-card border-border/50 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Go <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Viral?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join the marketplace where authentic creator content meets brand ambitions. 
            Start your campaign today and watch your reach explode.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group min-w-[200px]">
              <Rocket className="w-5 h-5" />
              Launch Campaign
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline_brand" size="xl" className="min-w-[200px]">
              <Users className="w-5 h-5" />
              Join as Creator
            </Button>
          </div>

          {/* Trust elements */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-primary rounded-full" />
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-secondary rounded-full" />
              Pay only for results
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-accent rounded-full" />
              24/7 support
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};