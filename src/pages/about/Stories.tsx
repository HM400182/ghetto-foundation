import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, MapPin, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const stories = [
  {
    id: 1,
    title: "From Streets to Success: My Digital Journey",
    author: "James Kiprotich",
    date: "December 2024",
    category: "education",
    location: "Mathare 4A",
    excerpt: "How the Digital Associates program changed my life from a struggling youth to a employed web developer.",
    content: "Three years ago, I was another unemployed youth in Mathare with little hope for the future. Today, I work as a junior web developer at a tech company in Nairobi. The Ghetto Foundation's Digital Associates program didn't just teach me coding - it gave me confidence, professional skills, and a community of peers who believed in my potential.",
    image: "/placeholder.svg",
    tags: ["Technology", "Success Story", "Youth Development"]
  },
  {
    id: 2,
    title: "Community Gardens: Growing Hope Together",
    author: "Mama Grace Wanjiku",
    date: "November 2024",
    category: "community",
    location: "Mathare Village",
    excerpt: "How our community came together to transform empty lots into thriving vegetable gardens that feed families.",
    content: "When the Community Projects team approached us about starting a community garden, many were skeptical. But today, our small plots provide fresh vegetables for over 30 families. More importantly, they've brought our community together. Every morning, you'll find neighbors sharing farming tips, children learning about nutrition, and families building stronger bonds.",
    image: "/placeholder.svg",
    tags: ["Agriculture", "Community", "Sustainability"]
  },
  {
    id: 3,
    title: "Leading Change: My Journey as a Youth Leader",
    author: "Sharon Achieng",
    date: "October 2024",
    category: "leadership",
    location: "Mathare North",
    excerpt: "From shy teenager to community advocate - how the Youth Leaders Program helped me find my voice.",
    content: "I used to be afraid to speak up in public, even among friends. The Youth Leaders Program helped me discover that my voice matters. Now I lead community meetings, advocate for young mothers' rights, and mentor other girls. Leadership isn't about having all the answers - it's about caring enough to try and bringing others along with you.",
    image: "/placeholder.svg",
    tags: ["Leadership", "Women Empowerment", "Youth"]
  },
  {
    id: 4,
    title: "Art on Our Walls: Transforming Our Neighborhood",
    author: "David Muthoni",
    date: "September 2024",
    category: "art",
    location: "Mathare 3B",
    excerpt: "How community murals and public art projects are changing how we see and feel about our home.",
    content: "Art has the power to transform not just walls, but hearts and minds. Our community art project brought together artists, youth, and residents to create murals that tell our stories - not of poverty and struggle, but of resilience, hope, and beauty. When visitors see our walls now, they see the pride we have in our community.",
    image: "/placeholder.svg",
    tags: ["Art", "Community Pride", "Youth Engagement"]
  },
  {
    id: 5,
    title: "Disaster Preparedness: When Crisis Brought Us Closer",
    author: "John Ochieng",
    date: "August 2024",
    category: "resilience",
    location: "Mathare 4B",
    excerpt: "How the Resilience Program helped our community respond effectively to flooding during the heavy rains.",
    content: "When the heavy rains came this year, our community was ready. Thanks to the Resilience Program training, we had evacuation plans, emergency supplies, and most importantly, a coordinated response team. What could have been a disaster became a testament to our community's strength and preparedness. Neighbors helped neighbors, and everyone stayed safe.",
    image: "/placeholder.svg",
    tags: ["Emergency Preparedness", "Community Resilience", "Disaster Response"]
  },
  {
    id: 6,
    title: "Research That Matters: Our Voice in Policy",
    author: "Mary Njeri",
    date: "July 2024",
    category: "research",
    location: "Mathare 1",
    excerpt: "How community-led research is helping us document our challenges and advocate for better policies.",
    content: "For too long, others have spoken for us without understanding our real needs. The Community-Led Research Approach (CLRA) taught us to document our own experiences, collect our own data, and present our findings to policymakers. We're not just subjects of research anymore - we're researchers telling our own stories and demanding change.",
    image: "/placeholder.svg",
    tags: ["Research", "Policy Advocacy", "Community Voice"]
  }
];

const categories = [
  { value: "all", label: "All Stories" },
  { value: "education", label: "Education" },
  { value: "community", label: "Community" },
  { value: "leadership", label: "Leadership" },
  { value: "art", label: "Art & Culture" },
  { value: "resilience", label: "Resilience" },
  { value: "research", label: "Research" }
];

export default function Stories() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredStories = selectedCategory === "all" 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              Community Voices
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Ghetto Stories
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Real stories from real people. Experience our community through the eyes 
              of those who live, work, and thrive in Mathare.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 text-muted-foreground mb-4 w-full justify-center">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by topic:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="transition-all duration-200"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Card key={story.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden h-48 bg-gradient-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <User className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Story by {story.author}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="capitalize">{story.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{story.date}</span>
                    <MapPin className="w-4 h-4 ml-2" />
                    <span>{story.location}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {story.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {story.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Share Your Story
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Every story matters. Help us build a library of experiences that inspire, 
              educate, and connect our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">
                  Submit Your Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/about/team">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}