import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import * as React from "react";

const Signup = () => {
  const [password, setPassword] = React.useState("");
  const strength = React.useMemo(() => {
    let s = 0;
    if (password.length >= 8) s += 33;
    if (/[A-Z]/.test(password)) s += 33;
    if (/\d/.test(password)) s += 34;
    return s;
  }, [password]);

  return (
    <main className="min-h-[80vh] py-16 px-6 bg-background text-foreground">
      <section className="max-w-md mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <img src="/lovable-uploads/a4535882-b6a1-4f94-aeb8-435c87f344dc.png" alt="BennyBucks logo" className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">Create your BennyBucks account</h1>
        </div>

        <Card className="p-6 space-y-4 bg-card">
          <Button variant="hero" className="w-full">Continue with Google</Button>
          <div className="h-px bg-border" />

          <div className="space-y-2">
            <label htmlFor="brand" className="text-sm">Brand / Artist name</label>
            <Input id="brand" placeholder="Your brand or artist name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm">Email address</label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm">Password</label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            <Progress value={strength} />
            <p className="text-xs text-muted-foreground">Min 8 chars, include an uppercase and a number.</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="confirm" className="text-sm">Confirm password</label>
            <Input id="confirm" type="password" placeholder="••••••••" />
          </div>
          <div className="text-xs text-muted-foreground">
            By creating an account, you agree to our <a href="#" className="text-primary">Terms</a> & <a href="#" className="text-primary">Privacy</a>.
          </div>
          <Button className="w-full">Create account</Button>
          <p className="text-sm text-muted-foreground text-center">
            Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
          </p>
        </Card>
      </section>
    </main>
  );
};

export default Signup;
