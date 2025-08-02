import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Mathare, Nairobi", "Kenya"],
    description: "Visit our community center in the heart of Mathare"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@ghettofoundation.org", "programs@ghettofoundation.org"],
    description: "We respond to all emails within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254 700 000 000", "+254 711 111 111"],
    description: "Available Monday to Friday, 9AM - 5PM"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9AM - 5PM", "Saturday: 10AM - 2PM"],
    description: "Sunday: Closed (Community events only)"
  }
];

const socialLinks = [
  { icon: Facebook, name: "Facebook", href: "#" },
  { icon: Twitter, name: "Twitter", href: "#" },
  { icon: Instagram, name: "Instagram", href: "#" },
  { icon: Youtube, name: "YouTube", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs? Want to volunteer or partner with us? 
            We'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Media */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Follow Our Journey</CardTitle>
                <CardDescription>
                  Stay connected with us on social media for updates and stories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="w-5 h-5" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">Find Us</CardTitle>
            <CardDescription>
              Our community center is located in the heart of Mathare, easily accessible by public transport.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Embedded Google Maps would be integrated here showing our exact location in Mathare.
                </p>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our programs and how to get involved
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">How can I volunteer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We welcome volunteers of all backgrounds and skill levels. Contact us through 
                  the form above or email us directly to learn about current opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">How do I apply for programs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Program applications are typically open at the beginning of each quarter. 
                  Follow us on social media or contact us to stay updated on application deadlines.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Can organizations partner with you?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We're always looking for meaningful partnerships that align with our mission. 
                  Reach out to discuss how we can work together.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">How are donations used?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All donations go directly toward program implementation, equipment, training materials, 
                  and staff support. We maintain full transparency in our financial reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}