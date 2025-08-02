import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, CreditCard, Smartphone, Building, Target, Users, BookOpen, Lightbulb } from "lucide-react";
import { useState } from "react";

const donationOptions = [
  { amount: 25, description: "Provides digital skills training materials for one student" },
  { amount: 50, description: "Supports a month of community outreach activities" },
  { amount: 100, description: "Funds equipment for hands-on learning experiences" },
  { amount: 250, description: "Sponsors a complete digital literacy course for one student" },
  { amount: 500, description: "Supports program operations for a month" },
  { amount: 1000, description: "Establishes a new community program initiative" },
];

const impactAreas = [
  {
    icon: BookOpen,
    title: "Education Programs",
    description: "Digital literacy, skills training, and educational resources",
    percentage: "40%"
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Infrastructure, facilities, and community building initiatives",
    percentage: "30%"
  },
  {
    icon: Target,
    title: "Youth Empowerment",
    description: "Leadership programs, mentorship, and youth-focused activities",
    percentage: "20%"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    description: "Program development, research, and innovative solutions",
    percentage: "10%"
  }
];

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Credit/Debit Card",
    description: "Secure online payment via Stripe"
  },
  {
    icon: Smartphone,
    title: "M-Pesa",
    description: "Mobile money transfer",
    details: "Paybill: 247247, Account: GHETTO001"
  },
  {
    icon: Building,
    title: "Bank Transfer",
    description: "Direct bank deposit",
    details: "Account: 1234567890, Equity Bank Kenya"
  }
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [donationType, setDonationType] = useState("one-time");

  const getFinalAmount = () => {
    return selectedAmount === "custom" ? customAmount : selectedAmount;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Make a Difference</Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your donation directly impacts lives in Mathare, providing education, opportunities, 
            and hope to community members who need it most. Every contribution, no matter the size, 
            creates meaningful change.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 text-accent mr-3" />
                  Choose Your Donation
                </CardTitle>
                <CardDescription>
                  Select an amount or enter a custom donation to support our programs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Donation Type */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Donation Type</Label>
                  <RadioGroup 
                    value={donationType} 
                    onValueChange={setDonationType}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">One-time donation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly recurring donation</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Donation Amount (USD)</Label>
                  <RadioGroup 
                    value={selectedAmount} 
                    onValueChange={setSelectedAmount}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {donationOptions.map((option) => (
                      <div key={option.amount} className="relative">
                        <RadioGroupItem 
                          value={option.amount.toString()} 
                          id={option.amount.toString()}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={option.amount.toString()}
                          className="flex flex-col p-4 border-2 border-border rounded-lg cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-accent/5 transition-all duration-200"
                        >
                          <span className="text-2xl font-bold text-primary">${option.amount}</span>
                          <span className="text-sm text-muted-foreground mt-2 leading-tight">
                            {option.description}
                          </span>
                        </Label>
                      </div>
                    ))}
                    
                    <div className="relative">
                      <RadioGroupItem value="custom" id="custom" className="peer sr-only" />
                      <Label
                        htmlFor="custom"
                        className="flex flex-col p-4 border-2 border-border rounded-lg cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-accent/5 transition-all duration-200"
                      >
                        <span className="text-lg font-semibold text-foreground">Custom</span>
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="mt-2"
                          min="1"
                        />
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Payment Method</Label>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="space-y-3"
                  >
                    {paymentMethods.map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <div key={index} className="relative">
                          <RadioGroupItem 
                            value={method.title.toLowerCase().replace(/[^a-z]/g, '')} 
                            id={method.title.toLowerCase().replace(/[^a-z]/g, '')}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={method.title.toLowerCase().replace(/[^a-z]/g, '')}
                            className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-accent/5 transition-all duration-200"
                          >
                            <Icon className="w-6 h-6 text-primary mr-4" />
                            <div className="flex-1">
                              <div className="font-semibold text-foreground">{method.title}</div>
                              <div className="text-sm text-muted-foreground">{method.description}</div>
                              {method.details && (
                                <div className="text-sm text-primary font-medium mt-1">{method.details}</div>
                              )}
                            </div>
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>

                {/* Donate Button */}
                <div className="pt-4">
                  <Button 
                    variant="donate" 
                    size="xl" 
                    className="w-full"
                    disabled={!getFinalAmount() || Number(getFinalAmount()) <= 0}
                  >
                    <Heart className="w-5 h-5" />
                    Donate ${getFinalAmount() || 0} {donationType === "monthly" ? "Monthly" : "Now"}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-3">
                    Your donation is secure and helps create lasting impact in our community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Breakdown */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">How Your Donation Helps</CardTitle>
                <CardDescription>
                  Here's how we allocate our resources to maximize impact
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {impactAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-foreground">{area.title}</h4>
                          <span className="text-sm font-semibold text-primary">{area.percentage}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="shadow-soft bg-gradient-card">
              <CardContent className="pt-6">
                <blockquote className="text-sm text-muted-foreground italic mb-4">
                  "Thanks to donations like yours, I was able to complete the Digital Associates 
                  program and now work as a web developer. Your support changes lives."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">JK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">John Kimani</p>
                    <p className="text-xs text-muted-foreground">Program Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Impact */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Recent Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$12,450</div>
                  <div className="text-sm text-muted-foreground">Raised this month</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-impact">25</div>
                    <div className="text-xs text-muted-foreground">Students Sponsored</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-accent">8</div>
                    <div className="text-xs text-muted-foreground">Programs Funded</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto bg-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Transparent</h3>
            <p className="text-sm text-muted-foreground">
              All online donations are processed securely through Stripe. We maintain complete 
              transparency in our financial reporting and provide regular updates on how donations 
              are used to create community impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}