import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mathare Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-secondary-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 hero-animate">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Empowering Communities.
            <br />
            <span className="text-accent">Cultivating Change.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-light/90 max-w-2xl mx-auto leading-relaxed">
            Building resilient communities in Mathare through digital innovation, civic education, and grassroots empowerment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="donate" size="lg" className="text-lg px-8 py-4">
             <Heart className="mr-2 h-5 w-5" />
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Programs
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Users className="mr-2 h-5 w-5" />
              Join Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">7</div>
              <div className="text-sm md:text-base text-neutral-light/80">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
              <div className="text-sm md:text-base text-neutral-light/80">Youth Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
              <div className="text-sm md:text-base text-neutral-light/80">Community Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">3</div>
              <div className="text-sm md:text-base text-neutral-light/80">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}