import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ControleAcces from "./pages/securite-electronique/ControleAcces";
import Videosurveillance from "./pages/securite-electronique/Videosurveillance";
import AlarmeAntiIntrusion from "./pages/securite-electronique/AlarmeAntiIntrusion";
import ProtectionIncendie from "./pages/securite-electronique/ProtectionIncendie";
import SecuritePeripherique from "./pages/securite-electronique/SecuritePeripherique";
import SerruresBatiments from "./pages/securite-electronique/SerruresBatiments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/securite-electronique/controle-acces" element={<ControleAcces />} />
          <Route path="/services/securite-electronique/videosurveillance" element={<Videosurveillance />} />
          <Route path="/services/securite-electronique/alarme-anti-intrusion" element={<AlarmeAntiIntrusion />} />
          <Route path="/services/securite-electronique/protection-incendie" element={<ProtectionIncendie />} />
          <Route path="/services/securite-electronique/securite-peripherique" element={<SecuritePeripherique />} />
          <Route path="/services/securite-electronique/serrures-batiments" element={<SerruresBatiments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
