import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Ghetto Foundation is a grassroots community organization based in Mathare, Nairobi, 
                dedicated to empowering communities through innovative programs, civic education, and 
                sustainable development initiatives.
              </p>
            </div>

            {/* Mission Highlight */}
            <Card className="border-l-4 border-l-primary bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To cultivate lasting change in urban informal settlements through community-led 
                      initiatives, digital innovation, and youth empowerment programs that address 
                      local challenges and create sustainable solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="community" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Learn Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Eye className="mr-2 h-5 w-5" />
                Our Vision
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 card-hover">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Youth Empowered</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-hover">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Community Partners</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-hover">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-accent mb-2">7</div>
                <div className="text-sm text-muted-foreground">Active Programs</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-hover">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-action mb-2">3</div>
                <div className="text-sm text-muted-foreground">Years of Impact</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}