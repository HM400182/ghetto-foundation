import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";

const programLinks = [
  { name: "Digital Associates", href: "/programs/digital-associates" },
  { name: "Mathare Resilience", href: "/programs/resilience" },
  { name: "Our Research (CLRA)", href: "/programs/research" },
  { name: "Community Projects", href: "/programs/community-projects" },
  { name: "Civic Education", href: "/programs/civic-education" },
  { name: "Youth Programs", href: "/programs/youth-leaders" },
];

const quickLinks = [
  { name: "About Us", href: "./AboutSection.tsx" },
  { name: "Our Team", href: "/about/team" },
  { name: "Ghetto Stories", href: "/about/stories" },
  { name: "Our Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
  { name: "Donate", href: "/donate" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-dark text-neutral-light">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold">Stay Connected</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get updates on our latest programs, community stories, and opportunities to make a difference in Mathare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary" className="shrink-0">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-xl font-bold text-primary-foreground">GF</span>
              </div>
              <span className="text-xl font-bold">Ghetto Foundation</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Empowering communities in Mathare through innovative programs, 
              civic education, and grassroots development initiatives.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Mathare, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@ghettofoundation.org</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Our Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Connect With Us</h4>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-secondary hover:border-secondary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-secondary hover:border-secondary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-secondary hover:border-secondary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-secondary hover:border-secondary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>

            {/* Donate CTA */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                Help us continue our mission to empower communities.
              </p>
              <Button variant="donate" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Support Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-gray-700" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            © 2024 Ghetto Foundation. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}