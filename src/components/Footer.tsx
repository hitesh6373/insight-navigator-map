import { Sparkles, Shield, Check, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" }
  ],
  product: [
    { label: "Creator", href: "/creator" },
    { label: "Brand", href: "/brand" }
  ],
  resources: [
    { label: "Blogs", href: "/blogs" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Request Demo", href: "/demo" },
    { label: "FAQs", href: "/faqs" }
  ],
  privacy: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" }
  ]
};

const socialLinks = [
  { name: "Instagram", href: "#", icon: "📷" },
  { name: "Facebook", href: "#", icon: "📘" },
  { name: "LinkedIn", href: "#", icon: "💼" },
  { name: "X (Twitter)", href: "#", icon: "🐦" },
  { name: "YouTube", href: "#", icon: "📹" }
];

export const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-3">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-button rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                BennyBucks
              </h3>
            </div>

            {/* Security Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-brand-primary" />
                <span>Google Secured</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-brand-secondary" />
                <span>Facebook Secured</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-brand-accent" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Center Sections - 4 Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Privacy</h4>
              <ul className="space-y-3">
                {footerLinks.privacy.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3">
            {/* Social Media */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-brand-primary/20 flex items-center justify-center transition-colors text-xl"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* App Downloads */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Download our creator's app</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-12">
                  <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center mr-3">
                    📱
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start h-12">
                  <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center mr-3">
                    🤖
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            ™ 2025 BennyBucks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};