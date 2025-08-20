
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ToemmrerSilkeborg from "./pages/ToemmrerSilkeborg";
import Kontakt from "./pages/Kontakt";
import Politik from "./pages/Politik";
import NotFound from "./pages/NotFound";
import CityPage from "./components/CityPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="toemrer-silkeborg" element={<ToemmrerSilkeborg />} />
              <Route path="kontakt" element={<Kontakt />} />
              <Route path="politik" element={<Politik />} />
              {/* Dynamic city routes */}
              <Route path="toemrer-herning" element={<CityPage citySlug="toemrer-herning" />} />
              <Route path="toemrer-holstebro" element={<CityPage citySlug="toemrer-holstebro" />} />
              <Route path="toemrer-horsens" element={<CityPage citySlug="toemrer-horsens" />} />
              <Route path="toemrer-randers" element={<CityPage citySlug="toemrer-randers" />} />
              <Route path="toemrer-viborg" element={<CityPage citySlug="toemrer-viborg" />} />
              <Route path="toemrer-grenaa" element={<CityPage citySlug="toemrer-grenaa" />} />
              <Route path="toemrer-ringkoebing" element={<CityPage citySlug="toemrer-ringkoebing" />} />
              <Route path="toemrer-skanderborg" element={<CityPage citySlug="toemrer-skanderborg" />} />
              <Route path="toemrer-hjoerring" element={<CityPage citySlug="toemrer-hjoerring" />} />
              <Route path="toemrer-frederikshavn" element={<CityPage citySlug="toemrer-frederikshavn" />} />
              <Route path="toemrer-hobro" element={<CityPage citySlug="toemrer-hobro" />} />
              <Route path="toemrer-thisted" element={<CityPage citySlug="toemrer-thisted" />} />
              <Route path="toemrer-nykoebing-mors" element={<CityPage citySlug="toemrer-nykoebing-mors" />} />
              <Route path="toemrer-esbjerg" element={<CityPage citySlug="toemrer-esbjerg" />} />
              <Route path="toemrer-fredericia" element={<CityPage citySlug="toemrer-fredericia" />} />
              <Route path="toemrer-kolding" element={<CityPage citySlug="toemrer-kolding" />} />
              <Route path="toemrer-svendborg" element={<CityPage citySlug="toemrer-svendborg" />} />
              <Route path="toemrer-soenderborg" element={<CityPage citySlug="toemrer-soenderborg" />} />
              <Route path="toemrer-vejle" element={<CityPage citySlug="toemrer-vejle" />} />
              <Route path="toemrer-aabenraa" element={<CityPage citySlug="toemrer-aabenraa" />} />
              <Route path="toemrer-haderslev" element={<CityPage citySlug="toemrer-haderslev" />} />
              <Route path="toemrer-middelfart" element={<CityPage citySlug="toemrer-middelfart" />} />
              <Route path="toemrer-nyborg" element={<CityPage citySlug="toemrer-nyborg" />} />
              <Route path="toemrer-varde" element={<CityPage citySlug="toemrer-varde" />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
