import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vote, BookOpen, Users, Scale, ArrowRight, Heart, Calendar, MapPin } from "lucide-react";

const CivicEducation = () => {
  const topics = [
    { category: "Human Rights", items: ["Extra judicial killings and documentation", "Arbitrary arrests / Rights of an arrested person", "Extortions by the police", "Forceful evictions"] },
    { category: "Special Planning Area", items: ["History and public spaces in Mathare", "Safety and Dignity", "Stakeholders mapping", "Situational Analysis", "Water and Sanitation"] },
    { category: "Governance", items: ["The constitution", "Leadership training", "Current affairs"] },
    { category: "Conflict Resolution", items: ["Peace and Coexistence", "Group dynamics", "Disaster Management", "Resource Mobilization"] },
    { category: "Environmental Conservation", items: ["Garbage Collection", "Rehabilitation of Mathare river", "Tree planting and identification of open spaces"] },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white mb-4">
              Education Program
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              Civic Education
            </h1>
            <p className="text-xl text-neutral-light/90 max-w-3xl mx-auto">
              Capacity-building on citizen rights, participatory governance, and youth engagement 
              in leadership and elections through our weekly Kimathi class sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="donate" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Support This Program
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Users className="mr-2 h-5 w-5" />
                Join a Class
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold gradient-text">About Our Program</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Civic Education Program by GF holds weekly collaborative Thinking and Acting sessions 
                with young people in Nairobi ghettos to encourage critical thinking around citizenship, 
                governance and accountability.
              </p>
            </div>

            <Card className="border-l-4 border-l-primary bg-primary/5">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Program Origins</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This program was inspired by the community dialogues (Ghetto Talks) conducted by Ghetto Foundation 
                    under the EU-funded Ushirikiano Mwema Kwa Usalama (UMKU) project. During these dialogues, GF discovered 
                    the extent of the knowledge gap among young people in Nairobi ghettos, which spurred these sessions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Kimathi class is a safe space where young people can ask critical questions and develop (new) knowledges 
                    to develop lasting solutions to social, political and economic challenges, setting standards for future generations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Issues We Address</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topics.map((topic, index) => (
                <Card key={topic.category} className="card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-3">
                      <Vote className="h-6 w-6" />
                      {topic.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {topic.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Mode of Teaching</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Class Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">Duration: 3 months per cycle</p>
                    <p className="text-muted-foreground">Weekly rotational classes encompassing all the bazes (local youth groups) in one particular ghetto.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Users className="h-10 w-10 text-secondary mb-4" />
                  <CardTitle>Expert Speakers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">Monthly guest experts</p>
                    <p className="text-muted-foreground">External speakers on different topics share their knowledge in areas of expertise.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <MapPin className="h-10 w-10 text-accent mb-4" />
                  <CardTitle>Study Visits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">Real-world learning</p>
                    <p className="text-muted-foreground">Visits to prisons, law courts, police stations, and justice centers for practical understanding.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-action mb-4" />
                  <CardTitle>Continuous Learning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">Alumni engagement & book club</p>
                    <p className="text-muted-foreground">Alumni participate in trainings, political documentaries, and continuous book club activities.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-l-4 border-l-secondary bg-secondary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Curriculum Alignment</h3>
                    <p className="text-muted-foreground">
                      The class collaborates with the social justice centers' Sankara political class 
                      for alignment of the curriculum, ensuring comprehensive and effective civic education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-20 bg-gradient-to-b from-neutral-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold gradient-text">Program Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">80+</div>
                <div className="text-sm text-muted-foreground">Students Educated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Completed Cycles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Expert Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-action mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Study Visits</div>
              </div>
            </div>

            <Button variant="community" size="lg" className="mt-8">
              <Users className="mr-2 h-5 w-5" />
              Join Our Next Class
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CivicEducation;