import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DigitalAssociates from "./pages/programs/DigitalAssociates";
import CivicEducation from "./pages/programs/CivicEducation";
import Team from "./pages/about/Team";
import Mission from "./pages/about/Mission";
import Stories from "./pages/about/Stories";
import Resilience from "./pages/programs/Resilience";
import Research from "./pages/programs/Research";
import Contact from "./pages/Contact";
import DonateNow from "./pages/Donate";
import Sponsors from "./pages/Sponsors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs/digital-associates" element={<DigitalAssociates />} />
          <Route path="/programs/civic-education" element={<CivicEducation />} />
           <Route path="/about/team" element={<Team />} />
            <Route path="/programs/resilience" element={<Resilience />} />
              <Route path="/programs/research" element={<Research />} />
           <Route path="/contact" element={<Contact />} />
              <Route path="/about/mission" element={<Mission />} />
              <Route path="/about/stories" element={<Stories />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path=".//pages/Donate" element={<DonateNow />} />
           {/* <Route path="/programs/community-projects" element={<CommunityProject />} /> */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
