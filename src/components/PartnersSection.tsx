import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, ArrowRight } from "lucide-react";

const partners = [
  {
    name: "EU - Ushirikiano Mwema",
    description: "European Union funding for community dialogue programs",
    logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=100&fit=crop",
    category: "International Development"
  },
  {
    name: "Nairobi County",
    description: "Local government partnership for civic education",
    logo: "https://images.unsplash.com/photo-1541960114-72ad58bb24fd?w=200&h=100&fit=crop",
    category: "Government"
  },
  {
    name: "Social Justice Centres",
    description: "Collaboration on the Sankara political class curriculum",
    logo: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=200&h=100&fit=crop",
    category: "Civil Society"
  },
  {
    name: "Local Youth Groups",
    description: "Partnerships with Mathare-based community organizations",
    logo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=100&fit=crop",
    category: "Community"
  },
  {
    name: "Tech Partners",
    description: "Technology companies supporting digital literacy programs",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop",
    category: "Technology"
  },
  {
    name: "Educational Institutions",
    description: "Universities and schools providing research support",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop",
    category: "Education"
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-neutral-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Our Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with organizations that share our vision of empowering communities 
            and creating sustainable change in Mathare and beyond.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <Card 
              key={partner.name} 
              className="card-hover group cursor-pointer border-0 shadow-card-hover overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Partner Logo */}
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {partner.category}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Active Partnerships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Countries Involved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Euros in Funding</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-action mb-2">3</div>
            <div className="text-sm text-muted-foreground">Years of Collaboration</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Become a Partner</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us in creating lasting change. We're always looking for organizations 
            that share our commitment to community empowerment and sustainable development.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Handshake className="mr-2 h-5 w-5" />
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}