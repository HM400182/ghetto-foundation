import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Eye, Users, ArrowRight, Heart } from "lucide-react";

const DigitalAssociates = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white mb-4">
              Technology Program
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              Digital Associates
            </h1>
            <p className="text-xl text-neutral-light/90 max-w-3xl mx-auto">
              The aim of our team is to collect, measure, and analyze qualitative and quantitative data 
              used to enhance and modify current business operations. This enables firms to improve user 
              experience online, gather accurate insights, and quantify marketing ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="donate" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Support This Program
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Users className="mr-2 h-5 w-5" />
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold gradient-text mb-8 text-center">Our Services</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p>
                In today's digital age, having a strong online presence is crucial for businesses of all sizes and organizations. 
                However, with so many websites competing for attention, it can be difficult to stand out from the crowd. 
                That's where web analytics services come in. By analyzing your website's traffic, user behavior, and other key metrics, 
                web analytics services can help you improve your SEO strategy and drive more traffic to your website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              <Card className="card-hover">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Data Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Understanding your audience through comprehensive demographic analysis, 
                    geographic insights, and user behavior patterns to tailor your content and strategy.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Marketing Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tracking website performance metrics including page views, bounce rates, 
                    and time on site to identify optimization opportunities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Eye className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>UX Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Optimizing website keywords for better search engine rankings and 
                    integrating high-performing keywords into content and metadata.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Understanding Your Audience */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">Understanding Your Audience</h3>
              <p className="text-muted-foreground leading-relaxed">
                One of the biggest advantages of web analytics services is that they can provide you with valuable 
                insights into your website's audience. By analyzing data such as demographic information, geographic 
                location, and user behavior, you can gain a better understanding of who your audience is and what 
                they're interested in. This information can then be used to tailor your content and SEO strategy 
                to better meet their needs and interests.
              </p>
            </div>

            {/* Tracking Performance */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary">Tracking Your Website's Performance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Another key benefit of web analytics services is that they allow you to track your website's 
                performance over time. By monitoring metrics such as page views, bounce rate, and time on site, 
                you can identify areas where your website may be underperforming and take steps to improve it. 
                This can include optimizing your website's speed, improving navigation, or creating more engaging content.
              </p>
            </div>

            {/* ROI Measurement */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-accent">Measuring ROI</h3>
              <p className="text-muted-foreground leading-relaxed">
                Finally, web analytics services can help you measure the return on investment (ROI) of your SEO efforts. 
                By tracking metrics such as conversion rate and revenue generated, you can determine which SEO strategies 
                are most effective and make data-driven decisions about where to invest your time and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold gradient-text">Our Digital Associates Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the talented individuals who make our data-driven insights possible.
            </p>
            
            {/* Placeholder for team images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              ))}
            </div>
            
            <Button variant="community" size="lg" className="mt-8">
              <Users className="mr-2 h-5 w-5" />
              Meet Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalAssociates;