import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every challenge with empathy and understanding, recognizing the dignity and potential in every person."
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of collective action and grassroots solutions to create lasting change."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creative thinking and new approaches to address complex community challenges."
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "We design programs that create long-term impact and can be sustained by the community itself."
  }
];

const timeline = [
  {
    year: "2016",
    title: "Foundation Established",
    description: "Born from the vision of local community leaders to address systemic challenges in Mathare."
  },
  {
    year: "2018",
    title: "First Digital Program",
    description: "Launched our flagship Digital Associates program, training youth in technology skills."
  },
  {
    year: "2020",
    title: "Community Resilience",
    description: "Expanded to include environmental and disaster resilience programs during the pandemic."
  },
  {
    year: "2022",
    title: "Research Initiative",
    description: "Established Community-Led Research Approach (CLRA) to inform policy and solutions."
  },
  {
    year: "2024",
    title: "Expanding Impact",
    description: "Now running 7 comprehensive programs serving over 500 community members annually."
  }
];

export default function Mission() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              Our Purpose
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Discover the driving force behind our work and our vision for a stronger, 
              more empowered Mathare community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To empower communities in Mathare through education, digital literacy, 
                  youth leadership development, and sustainable community-driven programs 
                  that create lasting positive change and break cycles of poverty.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We achieve this by providing accessible training programs, fostering 
                  local leadership, conducting community-led research, and building 
                  partnerships that amplify our collective impact.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-20 h-20 bg-gradient-impact rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-secondary mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A thriving Mathare community where every individual has access to 
                  opportunities for growth, education, and economic empowerment, 
                  leading to self-sustaining positive transformation.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We envision a future where our community serves as a model for 
                  grassroots development, innovation, and resilience that inspires 
                  change across Kenya and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Principles That Guide Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values shape everything we do and define how we approach our work in the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Story of Growth</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to expanding impact, see how we've grown to serve our community better.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-hero hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-soft">
                      <span className="text-primary-foreground font-bold text-lg">{item.year}</span>
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 shadow-soft hover:shadow-glow transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Be Part of Our Mission?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join us in creating lasting change and empowering communities. 
              Every contribution makes a difference.
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
                  Get Involved
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