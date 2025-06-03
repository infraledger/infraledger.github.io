
import { useState } from "react";
import { Search, Menu, Bell, TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { 
      label: "News", 
      href: "#news",
      subitems: [
        { label: "All News", href: "#all-news" },
        { label: "Breaking", href: "#breaking" },
        { label: "Analysis", href: "#analysis" },
        { label: "Market Updates", href: "#market-updates" }
      ]
    },
    { 
      label: "Data & Intelligence", 
      href: "#data",
      subitems: [
        { label: "Project Tracker", href: "#projects" },
        { label: "Company Directory", href: "#companies" },
        { label: "Financial Data", href: "#financials" },
        { label: "Thematic Dashboards", href: "#themes" }
      ]
    },
    { 
      label: "Sectors", 
      href: "#sectors",
      subitems: [
        { label: "Energy", href: "#energy" },
        { label: "Transportation", href: "#transport" },
        { label: "Digital Infrastructure", href: "#digital" },
        { label: "Water & Utilities", href: "#utilities" },
        { label: "Housing", href: "#housing" },
        { label: "Health", href: "#health" }
      ]
    },
    { 
      label: "Geographies", 
      href: "#geo",
      subitems: [
        { label: "North America", href: "#north-america" },
        { label: "Europe", href: "#europe" },
        { label: "Asia-Pacific", href: "#asia-pacific" },
        { label: "Emerging Markets", href: "#emerging" }
      ]
    },
    { label: "Events", href: "#events" },
    { label: "Community", href: "#community" }
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
      {/* Top trending bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-cyan-400 py-2 overflow-hidden border-b border-cyan-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex animate-scroll">
            <div className="flex items-center space-x-8 whitespace-nowrap">
              <div className="flex items-center space-x-2 font-semibold">
                <TrendingUp className="h-4 w-4 text-cyan-400" />
                <span className="text-sm bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">TRENDING:</span>
              </div>
              {trendingTopics.map((topic, index) => (
                <span key={index} className="text-sm text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-700/50 sticky top-0 z-50 shadow-2xl backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Sidebar trigger and Logo */}
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300" />
              <div className="relative">
                <img 
                  src="/lovable-uploads/22c4d9da-1751-48f9-92d5-30f3ff8b9734.png" 
                  alt="InfraLedger" 
                  className="h-8 w-auto filter drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {mainNavItems.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      {item.subitems ? (
                        <>
                          <NavigationMenuTrigger className="text-slate-300 hover:text-cyan-400 font-medium text-sm h-8 px-4 transition-all duration-300 hover:bg-slate-800/50 rounded-lg border border-transparent hover:border-cyan-500/30 bg-transparent">
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="grid gap-1 p-4 w-64 bg-slate-950/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-lg">
                              {item.subitems.map((subitem) => (
                                <a
                                  key={subitem.label}
                                  href={subitem.href}
                                  className="block px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-md transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                                >
                                  {subitem.label}
                                </a>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="text-slate-300 hover:text-cyan-400 font-medium text-sm h-8 px-4 flex items-center transition-all duration-300 hover:bg-slate-800/50 rounded-lg border border-transparent hover:border-cyan-500/30"
                        >
                          {item.label}
                        </a>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
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
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-700/50 bg-slate-950/95 backdrop-blur-xl rounded-b-lg">
              <div className="flex flex-col space-y-3">
                {mainNavItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-cyan-400 font-medium py-2 block transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                    {item.subitems && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subitems.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            className="text-slate-400 hover:text-cyan-400 text-sm py-1 block transition-colors duration-300"
                          >
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-700/50">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="mb-3 bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400 rounded-lg"
                  />
                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-lg">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          )}
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
