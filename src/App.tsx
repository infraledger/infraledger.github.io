import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Community from "./pages/Community";
import EventsPage from "./pages/Events";
import DataIntelligencePage from "./pages/DataIntelligence";
import ProjectTracker from "./pages/ProjectTracker";
import CompanyDirectory from "./pages/CompanyDirectory";
import FinancialData from "./pages/FinancialData";
import ThematicDashboards from "./pages/ThematicDashboards";

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
          <Route path="/data-intelligence/companies" element={<CompanyDirectory />} />
          <Route path="/data-intelligence/financials" element={<FinancialData />} />
          <Route path="/data-intelligence/themes" element={<ThematicDashboards />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
