import { Card } from "@/components/ui/card";

const stats = [
  {
    number: "50K+",
    label: "Active Creators",
    description: "Ready to amplify your brand"
  },
  {
    number: "10M+",
    label: "Views Generated",
    description: "Across all campaigns"
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Campaigns that exceed goals"
  },
  {
    number: "500+",
    label: "Brands Trust Us",
    description: "From startups to Fortune 500"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Platform That <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Delivers Results</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Join thousands of successful brands and creators who are already scaling their reach with authentic content.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border/50 hover:border-brand-primary/30 transition-all group">
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};