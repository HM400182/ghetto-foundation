import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Heart, 
  BookOpen, 
  Users, 
  Vote, 
  Lightbulb, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";

const programs = [
  {
    id: "digital-associates",
    title: "Digital Associates",
    description: "Data analysis, marketing insights, and UX optimization for enhanced business operations.",
    icon: BarChart3,
    category: "Technology",
    participants: "25+ Associates",
    href: "/programs/digital-associates",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "resilience",
    title: "Mathare Resilience Program",
    description: "Community-based training in disaster response, mental health, and climate resilience.",
    icon: Heart,
    category: "Community Health",
    participants: "200+ Residents",
    href: "/programs/resilience",
    gradient: "from-red-500 to-pink-600",
  },
  {
    id: "research",
    title: "Our Research (CLRA)",
    description: "Community-Led Research Approach facilitating grassroots-driven studies.",
    icon: BookOpen,
    category: "Research",
    participants: "15+ Researchers",
    href: "/programs/research",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "community-projects",
    title: "Community Projects",
    description: "Clean-up drives, art in public spaces, safety workshops, and infrastructure co-designs.",
    icon: Users,
    category: "Development",
    participants: "100+ Volunteers",
    href: "/programs/community-projects",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "civic-education",
    title: "Civic Education",
    description: "Capacity-building on citizen rights, participatory governance, and youth engagement.",
    icon: Vote,
    category: "Education",
    participants: "80+ Students",
    href: "/programs/civic-education",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    id: "ghetto-youth",
    title: "Ghetto Youth Group",
    description: "Youth-driven collective promoting talent, entrepreneurship, and education.",
    icon: Lightbulb,
    category: "Youth Development",
    participants: "150+ Youth",
    href: "/programs/ghetto-youth",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: "youth-leaders",
    title: "Youth Leaders Program",
    description: "Leadership development for young changemakers through training and mentorship.",
    icon: TrendingUp,
    category: "Leadership",
    participants: "40+ Leaders",
    href: "/programs/youth-leaders",
    gradient: "from-green-500 to-emerald-600",
  },
];

export function ProgramsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-light to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seven transformative initiatives empowering the Mathare community through education, 
            technology, leadership, and sustainable development.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className="card-hover group cursor-pointer border-0 shadow-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${program.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <program.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {program.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {program.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {program.participants}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-primary group-hover:bg-primary/10"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Users className="mr-2 h-5 w-5" />
            Get Involved in Our Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}