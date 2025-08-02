import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import teamDirector from "@/assets/team-director.jpg";
import teamCoordinator from "@/assets/team-coordinator.jpg";

const teamMembers = [
  {
    name: "James Mwangi",
    position: "Executive Director",
    photo: teamDirector,
    quote: "Empowering communities starts with believing in the potential of every individual.",
    bio: "With over 10 years of experience in community development, James leads our mission to create lasting change in Mathare.",
    email: "james@ghettofoundation.org"
  },
  {
    name: "Grace Njoki",
    position: "Programs Coordinator",
    photo: teamCoordinator,
    quote: "Every program we run is designed to unlock the potential within our community.",
    bio: "Grace oversees all our educational and empowerment programs, ensuring they meet the real needs of our community.",
    email: "grace@ghettofoundation.org"
  },
  {
    name: "David Ochieng",
    position: "Digital Skills Lead",
    photo: teamDirector,
    quote: "Technology is the bridge between dreams and opportunities.",
    bio: "Leading our digital literacy initiatives, David helps bridge the digital divide in underserved communities.",
    email: "david@ghettofoundation.org"
  },
  {
    name: "Sarah Wanjiku",
    position: "Community Outreach Manager",
    photo: teamCoordinator,
    quote: "Building trust and relationships is the foundation of sustainable change.",
    bio: "Sarah connects our programs with community members, ensuring our work remains grassroots and impactful.",
    email: "sarah@ghettofoundation.org"
  },
  {
    name: "Peter Kamau",
    position: "Youth Programs Director",
    photo: teamDirector,
    quote: "Empowering youth today means securing our community's tomorrow.",
    bio: "Peter designs and implements programs specifically for young people, fostering leadership and entrepreneurship.",
    email: "peter@ghettofoundation.org"
  },
  {
    name: "Mary Akinyi",
    position: "Research & Development Lead",
    photo: teamCoordinator,
    quote: "Data-driven insights help us create programs that truly make a difference.",
    bio: "Mary leads our research initiatives, ensuring our programs are evidence-based and continuously improving.",
    email: "mary@ghettofoundation.org"
  },
  {
    name: "John Otieno",
    position: "Financial Controller",
    photo: teamDirector,
    quote: "Transparent stewardship of resources builds community trust.",
    bio: "John ensures our financial operations are transparent and our resources are used effectively for maximum impact.",
    email: "john@ghettofoundation.org"
  },
  {
    name: "Faith Muthoni",
    position: "Volunteer Coordinator",
    photo: teamCoordinator,
    quote: "Volunteers are the heart that drives our mission forward.",
    bio: "Faith manages our volunteer programs, connecting passionate individuals with meaningful opportunities to serve.",
    email: "faith@ghettofoundation.org"
  }
];

export default function Team() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Team</Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Meet the People Behind the Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our dedicated team brings together diverse expertise, shared passion, and deep 
            commitment to empowering communities and creating lasting positive change in Mathare.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-soft group-hover:shadow-glow transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.position}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <blockquote className="text-sm text-muted-foreground italic">
                  "{member.quote}"
                </blockquote>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-2 pt-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Shared Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and unite our team in our mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Compassion</h3>
              <p className="text-muted-foreground">
                We approach our work with empathy, understanding, and genuine care for every 
                community member we serve.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-impact rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-impact-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                Transparency, honesty, and accountability are the foundations of our work 
                and our relationships with the community.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Empowerment</h3>
              <p className="text-muted-foreground">
                We believe in building capacity within the community, creating sustainable 
                change led by community members themselves.
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to Join Our Mission?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our commitment 
            to community empowerment and social change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Get Involved
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}