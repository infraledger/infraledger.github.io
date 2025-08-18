import { useState } from "react";
import { Search, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Import refactored components
import TrendingBar from "./navigation/TrendingBar";
import MainNavigation from "./navigation/MainNavigation";
import MobileNavigation from "./navigation/MobileNavigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { label: "Home", to: "/" },
    { label: "Market Analysis", to: "/market-analysis" },
    { label: "Key Deals", to: "/key-deals" },
    { label: "Market Snapshot", to: "/market-snapshot" },
    { label: "Events", to: "/events" }
  ];

  const trendingTopics = [
    "Global Infrastructure Investment Hits $2.8T",
    "Green Bonds Rally Continues", 
    "Asian Infrastructure Bank Expansion",
    "5G Network Investment Surge",
    "EU Green Deal Infrastructure Package",
    "US Infrastructure Bill Updates",
    "OMV's 140 MW Green Hydrogen Project Gets FID",
    "Rail Baltica Signs $1.06B Construction Contracts",
    "Houston Ship Channel Expansion 70% Complete"
  ];

  return (
    <>
      <TrendingBar trendingTopics={trendingTopics} />

      <nav className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-700/50 sticky top-0 z-50 shadow-2xl backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/002a4431-70de-4334-875f-9f6ef07f6088.png" 
                  alt="InfraLedger" 
                  className="h-12 w-auto filter drop-shadow-2xl contrast-110 brightness-110"
                />
                <div className="absolute inset-0 bg-cyan-400/15 blur-xl rounded-full"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <MainNavigation mainNavItems={mainNavItems} />
            </div>

            {/* Search and Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search projects, companies..."
                  className="pl-10 w-80 bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20 text-sm text-slate-200 placeholder-slate-400 backdrop-blur-sm rounded-lg"
                />
              </div>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 rounded-lg">
                <Bell className="h-4 w-4" />
              </Button>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium px-6 text-sm shadow-lg border border-cyan-500/30 transition-all duration-300 rounded-lg">
                Subscribe
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation 
            mainNavItems={mainNavItems}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </nav>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;
