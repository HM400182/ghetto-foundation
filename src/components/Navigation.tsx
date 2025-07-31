import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Users, BookOpen, Handshake, Contact, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Digital Associates",
    href: "/programs/digital-associates",
    description: "Data analysis, marketing insights, and UX optimization",
    icon: BookOpen,
  },
  {
    title: "Mathare Resilience Program",
    href: "/programs/resilience",
    description: "Community training in disaster response and mental health",
    icon: Heart,
  },
  {
    title: "Our Research (CLRA)",
    href: "/programs/research",
    description: "Community-Led Research Approach for local solutions",
    icon: BookOpen,
  },
  {
    title: "Community Projects",
    href: "/programs/community-projects",
    description: "Clean-up drives, art, safety workshops, infrastructure",
    icon: Users,
  },
  {
    title: "Civic Education",
    href: "/programs/civic-education",
    description: "Citizen rights, governance, and youth leadership",
    icon: BookOpen,
  },
  {
    title: "Ghetto Youth Group",
    href: "/programs/ghetto-youth",
    description: "Youth-driven talent, entrepreneurship, and education",
    icon: Users,
  },
  {
    title: "Youth Leaders Program",
    href: "/programs/youth-leaders",
    description: "Leadership development for young changemakers",
    icon: Users,
  },
];

const aboutItems = [
  {
    title: "Mission & Vision",
    href: "/about/mission",
    description: "Our purpose and goals for community empowerment",
  },
  {
    title: "Our Team",
    href: "/about/team",
    description: "Meet the passionate people behind our work",
  },
  {
    title: "Ghetto Stories",
    href: "/about/stories",
    description: "First-person narratives from our community",
  },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-primary-foreground">GF</span>
          </div>
          <span className="text-xl font-bold gradient-text">Ghetto Foundation</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Programs Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary">
                Programs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  {programs.map((program) => (
                    <NavigationMenuLink key={program.href} asChild>
                      <Link
                        to={program.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <program.icon className="h-4 w-4 text-primary" />
                          <div className="text-sm font-medium leading-none">{program.title}</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {program.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {aboutItems.map((item) => (
                    <NavigationMenuLink key={item.href} asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Direct Links */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/sponsors"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <Handshake className="mr-2 h-4 w-4" />
                  Our Sponsors
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <Contact className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Donate Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button variant="donate" size="lg" className="hidden sm:flex">
            <DollarSign className="mr-2 h-4 w-4" />
            Donate Now
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                    <span className="text-lg font-bold text-primary-foreground">GF</span>
                  </div>
                  <span className="text-lg font-bold">Ghetto Foundation</span>
                </Link>

                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium text-primary">Programs</h4>
                  {programs.map((program) => (
                    <Link
                      key={program.href}
                      to={program.href}
                      className="text-sm text-muted-foreground hover:text-primary pl-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium text-primary">About Us</h4>
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary pl-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/sponsors"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Sponsors
                </Link>
                
                <Link
                  to="/contact"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>

                <Button variant="donate" className="w-full">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Donate Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}