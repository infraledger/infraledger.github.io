import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Community from "./pages/Community";
import EventsPage from "./pages/Events";
import DataIntelligencePage from "./pages/DataIntelligence";
import ProjectTracker from "./pages/ProjectTracker";
import FinancialData from "./pages/FinancialData";
import ThematicDashboards from "./pages/ThematicDashboards";
import GlobalInfrastructureMap from "./pages/GlobalInfrastructureMap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/data-intelligence" element={<DataIntelligencePage />} />
          <Route path="/data-intelligence/projects" element={<ProjectTracker />} />
          {/* Remove Company Directory and add Global Map */}
          <Route path="/data-intelligence/global-map" element={<GlobalInfrastructureMap />} />
          <Route path="/data-intelligence/financials" element={<FinancialData />} />
          <Route path="/data-intelligence/themes" element={<ThematicDashboards />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
