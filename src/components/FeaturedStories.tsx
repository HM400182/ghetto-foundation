import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "From Digital Divide to Digital Leader",
    excerpt: "How Sarah, a 19-year-old from Mathare, became a data analyst through our Digital Associates program and now mentors other youth.",
    author: "Sarah Wanjiku",
    date: "2024-01-15",
    category: "Youth Empowerment",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=240&fit=crop&crop=face",
  },
  {
    id: 2,
    title: "Building Resilience Through Community Action",
    excerpt: "The story of how our Resilience Program helped the community prepare for and respond to recent flooding in Mathare.",
    author: "James Ochieng",
    date: "2024-01-10",
    category: "Community Health",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=240&fit=crop",
  },
  {
    id: 3,
    title: "Art as a Voice for Change",
    excerpt: "Exploring how our Community Projects initiative uses public art to address social issues and bring the community together.",
    author: "Grace Mumbi",
    date: "2024-01-05",
    category: "Arts & Culture",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=240&fit=crop",
  },
];

export function FeaturedStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-light to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Ghetto Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real voices from our community sharing their journeys of growth, 
            resilience, and transformation through our programs.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card 
              key={story.id} 
              className="card-hover group cursor-pointer overflow-hidden border-0 shadow-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Story Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-neutral-dark">
                    {story.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {story.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {story.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Author & Date */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(story.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {story.readTime}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-primary group-hover:bg-primary/10"
                  >
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="community" size="lg" className="text-lg px-8 py-4">
            <BookOpen className="mr-2 h-5 w-5" />
            Read All Stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}