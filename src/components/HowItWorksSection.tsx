import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Search, Video, DollarSign, Target, BarChart3, ArrowRight } from "lucide-react";
import creatorWorkflowImage from "@/assets/creator-workflow.jpg";
import brandWorkflowImage from "@/assets/brand-workflow.jpg";

export const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">BennyBucks</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent, and designed for results. Whether you're a creator or a brand, getting started takes just minutes.
          </p>
        </div>

        {/* For Creators Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  For <span className="text-brand-primary">Creators</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  Turn your creativity into consistent income with campaigns that match your style and audience.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Browse Campaigns</h4>
                    <p className="text-muted-foreground">Find campaigns that match your vibe and audience. Filter by niche, budget, and content type.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Create Reel</h4>
                    <p className="text-muted-foreground">Make videos as per the campaign description. Be authentic, be creative, be you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Get Paid</h4>
                    <p className="text-muted-foreground">Receive payment based on the views you get. The more viral you go, the more you earn.</p>
                  </div>
                </div>
              </div>

              <Button variant="brand" size="lg" className="group">
                Start Creating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Video - Right */}
            <div className="relative">
              <Card className="p-4 bg-gradient-card border-border/50 overflow-hidden">
                <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                  <img 
                    src={creatorWorkflowImage} 
                    alt="Creator Workflow Explainer"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/90 flex items-center justify-center shadow-glow">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* For Brands Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video - Left */}
            <div className="relative lg:order-1">
              <Card className="p-4 bg-gradient-card border-border/50 overflow-hidden">
                <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                  <img 
                    src={brandWorkflowImage} 
                    alt="Brand Workflow Explainer"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-secondary/90 flex items-center justify-center shadow-glow">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Text Content - Right */}
            <div className="space-y-8 lg:order-2">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  For <span className="text-brand-secondary">Brands/Artists</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  Scale your reach with authentic creator content that drives real engagement and measurable results.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Launch Campaign</h4>
                    <p className="text-muted-foreground">Set your goals, budget, and upload campaign details. Define your target audience and content style.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Get Viral Content</h4>
                    <p className="text-muted-foreground">Get reels made as per your brief on your dashboard. Watch creators bring your vision to life.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Track Performance</h4>
                    <p className="text-muted-foreground">Monitor views, engagement, and results in real-time. Get detailed ROI analytics and insights.</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="group">
                Launch Campaign
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};