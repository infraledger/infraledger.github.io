import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MarketAnalysis from "./pages/MarketAnalysis";
import KeyDeals from "./pages/KeyDeals";
import MarketSnapshot from "./pages/MarketSnapshot";
import EventsPage from "./pages/Events";
import NewsArticle from "./pages/NewsArticle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/key-deals" element={<KeyDeals />} />
          <Route path="/market-snapshot" element={<MarketSnapshot />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/news/:id" element={<NewsArticle />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
