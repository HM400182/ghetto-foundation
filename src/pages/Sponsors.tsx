import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Heart, Building, Users, Globe, Star, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const sponsors = [
  {
    name: "Kenya Youth Foundation",
    type: "Major Partner",
    logo: "KYF",
    description: "Supporting our youth leadership and digital literacy programs since 2018.",
    contribution: "Program Funding",
    testimonial: "The Ghetto Foundation's grassroots approach creates real, measurable impact in communities that need it most.",
    contact: "partnership@kenyayouth.org"
  },
  {
    name: "Digital Africa Initiative",
    type: "Technology Partner", 
    logo: "DAI",
    description: "Providing technology resources and training support for our Digital Associates program.",
    contribution: "Equipment & Training",
    testimonial: "Their community-centered approach to digital literacy is exactly what Africa needs.",
    contact: "support@digitalafrica.org"
  },
  {
    name: "Green Communities Network",
    type: "Environmental Partner",
    logo: "GCN", 
    description: "Collaborating on environmental resilience and sustainability projects.",
    contribution: "Environmental Programs",
    testimonial: "Working with Ghetto Foundation shows how local action creates global impact.",
    contact: "partnerships@greencommunities.net"
  },
  {
    name: "Nairobi Community Trust",
    type: "Local Partner",
    logo: "NCT",
    description: "Local organization supporting community development and capacity building initiatives.",
    contribution: "Community Development",
    testimonial: "They understand the community because they are the community.",
    contact: "info@nairobicommunity.org"
  },
  {
    name: "Education for All Kenya",
    type: "Education Partner",
    logo: "EFA",
    description: "Supporting civic education and literacy programs across our initiatives.",
    contribution: "Educational Resources",
    testimonial: "Their holistic approach to education addresses the real needs of the community.",
    contact: "partners@educationforall.ke"
  },
  {
    name: "Youth Innovation Hub",
    type: "Innovation Partner",
    logo: "YIH",
    description: "Fostering innovation and entrepreneurship among Mathare youth.",
    contribution: "Innovation Programs",
    testimonial: "The energy and creativity in their programs is infectious and transformative.",
    contact: "collaborate@youthinnovation.hub"
  }
];

const partnershipTypes = [
  {
    icon: Building,
    title: "Corporate Partnership",
    description: "Partner with us to create lasting impact while building your corporate social responsibility portfolio.",
    benefits: ["Brand visibility", "Employee engagement", "Community impact", "Tax benefits"]
  },
  {
    icon: Users,
    title: "Community Partnership",
    description: "Local organizations and community groups working together for collective impact.",
    benefits: ["Resource sharing", "Knowledge exchange", "Expanded reach", "Collaborative projects"]
  },
  {
    icon: Globe,
    title: "International Partnership",
    description: "Global organizations supporting local change through funding and expertise.",
    benefits: ["Cultural exchange", "Global perspective", "Funding opportunities", "Network expansion"]
  },
  {
    icon: Star,
    title: "Individual Sponsorship",
    description: "Personal commitment to supporting specific programs or initiatives.",
    benefits: ["Direct impact", "Personal connection", "Regular updates", "Community recognition"]
  }
];

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              Our Partners
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Sponsors & Partners
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Together, we're building stronger communities. Meet the organizations 
              and individuals who make our work possible.
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Current Partners</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Organizations Supporting Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These amazing partners provide funding, resources, and expertise that enable us to serve our community effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{sponsor.logo}</span>
                  </div>
                  <Badge variant="outline" className="mb-2">{sponsor.type}</Badge>
                  <CardTitle className="text-xl text-foreground">{sponsor.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {sponsor.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">Contribution:</h4>
                    <p className="text-sm text-muted-foreground">{sponsor.contribution}</p>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                    "{sponsor.testimonial}"
                  </blockquote>
                  
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">Contact: {sponsor.contact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Partnership Opportunities</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Ways to Partner With Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer various partnership models to match your capacity and interests while creating meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="text-center shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{type.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Sponsor Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Get Involved</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">Become a Partner</h2>
              <p className="text-lg text-muted-foreground">
                Ready to make a difference? Let's discuss how we can work together to create lasting impact.
              </p>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <Handshake className="w-6 h-6 text-primary" />
                  Partnership Inquiry Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" placeholder="Your organization name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Contact Person</Label>
                    <Input id="contact-name" placeholder="Your full name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="contact@yourorg.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+254 700 000 000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partnership-type">Partnership Interest</Label>
                  <Input id="partnership-type" placeholder="e.g., Corporate Partnership, Program Funding, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your interest</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your organization's goals, what you'd like to support, and how you envision partnering with us..."
                    rows={5}
                  />
                </div>

                <Button className="w-full" size="lg">
                  Submit Partnership Inquiry
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Together We Achieve More
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Your partnership doesn't just support our programs - it invests in the future 
              of our community and creates lasting positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/donate">
                  <Heart className="w-5 h-5" />
                  Support Our Work
                </Link>
              </Button>
              <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}