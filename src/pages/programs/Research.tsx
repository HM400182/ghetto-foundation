import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BookOpen, Users, TrendingUp, Target, FileText, BarChart, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const researchAreas = [
  {
    icon: Users,
    title: "Community Needs Assessment",
    description: "Systematic identification and analysis of community challenges, assets, and development priorities."
  },
  {
    icon: TrendingUp,
    title: "Impact Evaluation",
    description: "Measuring the effectiveness and outcomes of community programs and interventions."
  },
  {
    icon: BookOpen,
    title: "Policy Research",
    description: "Evidence-based research to inform local and national policy decisions affecting urban communities."
  },
  {
    icon: BarChart,
    title: "Data Collection & Analysis",
    description: "Training community members to collect, analyze, and interpret data relevant to their experiences."
  }
];

const currentProjects = [
  {
    title: "Youth Employment Pathways Study",
    status: "Ongoing",
    duration: "6 months",
    description: "Examining barriers and opportunities for youth employment in Mathare, including skills gaps and market demands.",
    participants: "50 youth",
    expectedOutcome: "Employment strategy recommendations"
  },
  {
    title: "Community Health Services Mapping",
    status: "Completed",
    duration: "4 months", 
    description: "Comprehensive mapping of health services accessibility and quality in Mathare settlements.",
    participants: "200 residents",
    expectedOutcome: "Health services improvement plan"
  },
  {
    title: "Climate Change Adaptation Research",
    status: "Planning",
    duration: "8 months",
    description: "Community-led research on climate change impacts and local adaptation strategies.",
    participants: "100 households",
    expectedOutcome: "Climate adaptation framework"
  }
];

const methodology = [
  {
    step: "1",
    title: "Community Consultation",
    description: "Engage with community members to identify research priorities and questions that matter to them."
  },
  {
    step: "2", 
    title: "Participatory Training",
    description: "Train community researchers in data collection methods, ethics, and analysis techniques."
  },
  {
    step: "3",
    title: "Collaborative Research",
    description: "Work together to collect data, conduct interviews, and document community experiences."
  },
  {
    step: "4",
    title: "Community Analysis",
    description: "Analyze findings together, ensuring community voices are central to interpreting results."
  },
  {
    step: "5",
    title: "Action Planning",
    description: "Develop actionable recommendations and advocacy strategies based on research findings."
  },
  {
    step: "6",
    title: "Knowledge Sharing",
    description: "Share findings with policymakers, partners, and other communities to influence change."
  }
];

const achievements = [
  "15 community-led research projects completed",
  "30+ community researchers trained",
  "5 policy briefs published",
  "3 research presentations at national conferences",
  "2 academic partnerships established",
  "1 community research network formed"
];

export default function Research() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              Community-Led Research Approach
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Research (CLRA)
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Empowering communities to conduct their own research, tell their own stories, 
              and advocate for evidence-based solutions to local challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Join Research Team
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/donate">
                  Support Our Research
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">About CLRA</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Community Voices, Evidence-Based Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Community-Led Research Approach (CLRA) puts research power directly into 
                the hands of community members. We believe that those who experience challenges 
                firsthand are best positioned to understand and investigate them.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through CLRA, we train community members in research methods, support them 
                in conducting studies on issues they identify as priorities, and help them 
                use findings to advocate for policy changes and program improvements.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Researchers Trained</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-4 text-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-base">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CLRA Methodology */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Approach</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">How CLRA Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our six-step process ensures community ownership and meaningful outcomes from every research project.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methodology.map((step, index) => (
                <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary-foreground font-bold text-xl">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Current Projects</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Research in Action</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See what our community researchers are currently investigating and the impact they're creating.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={project.status === "Completed" ? "default" : project.status === "Ongoing" ? "secondary" : "outline"}>
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Participants:</span>
                    <span className="font-medium text-foreground">{project.participants}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Expected Outcome: </span>
                      {project.expectedOutcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Research Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Evidence of how community-led research is creating change and influencing decisions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-soft">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Become a Community Researcher
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join our team of community researchers and help generate evidence that drives 
              real change in Mathare and beyond. No prior research experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">
                  <Search className="w-5 h-5" />
                  Apply to Join
                </Link>
              </Button>
              <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/donate">
                  Fund Research
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <p className="text-primary-foreground/90 mb-4">Contact our Research Team:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>research@ghettofoundation.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 700 789 012</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}