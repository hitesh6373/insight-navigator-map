import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <main className="min-h-[60vh] py-20 px-6 bg-background text-foreground">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About BennyBucks</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          BennyBucks is the creator growth engine for brands, artists and YouTubers. We connect
          campaigns with a network of creators who produce authentic, scroll‑stopping content across
          Originals, Clipping, SoundSync, and LogoDrop.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card shadow-card">
            <h2 className="text-xl font-semibold mb-2">Mission</h2>
            <p className="text-sm text-muted-foreground">Powering authentic influence with data‑backed performance.</p>
          </Card>
          <Card className="p-6 bg-card shadow-card">
            <h2 className="text-xl font-semibold mb-2">What we do</h2>
            <p className="text-sm text-muted-foreground">Help brands launch campaigns and get measurable ROI via creator content.</p>
          </Card>
          <Card className="p-6 bg-card shadow-card">
            <h2 className="text-xl font-semibold mb-2">Why it works</h2>
            <p className="text-sm text-muted-foreground">Real creators. Real audiences. Tools that scale without feeling like ads.</p>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default About;
