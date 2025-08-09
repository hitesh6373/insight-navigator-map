import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <main className="min-h-[70vh] py-16 px-6 bg-background text-foreground">
      <section className="max-w-md mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <img src="/lovable-uploads/a4535882-b6a1-4f94-aeb8-435c87f344dc.png" alt="BennyBucks logo" className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">Sign in to BennyBucks</h1>
        </div>

        <Card className="p-6 space-y-4 bg-card">
          <Button variant="hero" className="w-full">Continue with Google</Button>
          <div className="h-px bg-border" />
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm">Email</label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm">Password</label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Sign in</Button>

          <div className="flex items-center justify-between text-sm">
            <Link to="/forgot-password" className="text-primary">Forgot password?</Link>
            <span className="text-muted-foreground">
              New user? <Link to="/signup" className="text-primary">Create account</Link>
            </span>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default Login;
