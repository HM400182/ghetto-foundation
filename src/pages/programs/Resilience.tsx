import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Leaf, Users, Target, CheckCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import resilienceImage from "@/assets/resilience-program.jpg";

const programGoals = [
  {
    icon: Shield,
    title: "Disaster Preparedness",
    description: "Training community members in emergency response, evacuation procedures, and disaster risk reduction strategies."
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "Providing mental health awareness, counseling services, and community support systems for trauma and stress management."
  },
  {
    icon: Leaf,
    title: "Climate Resilience",
    description: "Building capacity to adapt to climate change through sustainable practices and environmental conservation."
  },
  {
    icon: Users,
    title: "Community Mobilization",
    description: "Strengthening community networks and organizing grassroots initiatives for collective resilience building."
  }
];

const achievements = [
  "Trained 200+ community members in emergency response",
  "Established 5 community response teams",
  "Created early warning systems for flooding",
  "Facilitated 50+ mental health support sessions",
  "Planted 500+ trees for environmental protection",
  "Developed community disaster management plans"
];

const activities = [
  {
    title: "Emergency Response Training",
    description: "Comprehensive training on first aid, emergency evacuation, and disaster response protocols.",
    duration: "2-day workshops",
    frequency: "Monthly"
  },
  {
    title: "Mental Health Awareness",
    description: "Community education on mental health, stress management, and building emotional resilience.",
    duration: "Half-day sessions",
    frequency: "Bi-weekly"
  },
  {
    title: "Environmental Conservation",
    description: "Tree planting, waste management, and climate adaptation activities led by community groups.",
    duration: "Ongoing projects",
    frequency: "Weekly"
  },
  {
    title: "Community Organizing",
    description: "Building networks, leadership development, and collective action planning for community issues.",
    duration: "1-day workshops",
    frequency: "Monthly"
  }
];

const testimonials = [
  {
    quote: "The resilience training saved our community during the last flood. We knew exactly what to do and everyone stayed safe.",
    author: "John Ochieng",
    role: "Community Response Team Leader"
  },
  {
    quote: "Learning about mental health helped me support my family better. Now I can recognize stress and know how to help.",
    author: "Mary Wanjiku",
    role: "Community Health Volunteer"
  }
];

export default function Resilience() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${resilienceImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              Community Resilience Program
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mathare Resilience Program
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Building community capacity for disaster response, mental health support, 
              climate resilience, and grassroots mobilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Join the Program
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/donate">
                  <Heart className="w-5 h-5" />
                  Support This Program
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
              <Badge variant="outline" className="mb-4">Program Overview</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Building Stronger, More Resilient Communities
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Mathare Resilience Program empowers our community to prepare for, respond to, 
                and recover from various challenges including natural disasters, health crises, 
                and social-economic stresses.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through comprehensive training, community organizing, and mental health support, 
                we're building a network of prepared, connected, and resilient community members 
                who can support each other in times of need.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">People Trained</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Response Teams</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {programGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-4 text-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-base">{goal.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Program Activities */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Activities</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach includes training, awareness, action, and community building activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">{activity.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {activity.description}
                      </CardDescription>
                    </div>
                    <Target className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="font-medium text-foreground">Duration: </span>
                      <span className="text-muted-foreground">{activity.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Frequency: </span>
                      <span className="text-muted-foreground">{activity.frequency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">What We've Achieved</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to building community resilience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg shadow-soft">
                  <CheckCircle className="w-6 h-6 text-impact flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Community Voices</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Stories of Resilience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from community members who have been part of our resilience building efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <blockquote className="text-lg text-muted-foreground italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Build Resilience With Us
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join our community resilience program and help build a stronger, 
              more prepared Mathare community. Together, we can face any challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5" />
                  Join the Program
                </Link>
              </Button>
              <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/donate">
                  Support Our Work
                  <Heart className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <p className="text-primary-foreground/90 mb-4">Contact our Resilience Program Team:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>resilience@ghettofoundation.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 700 123 456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}