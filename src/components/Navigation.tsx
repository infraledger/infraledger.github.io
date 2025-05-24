
import { useState } from "react";
import { Search, Menu, Bell, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "Markets", href: "#markets" },
    { label: "Analysis", href: "#analysis" },
    { label: "Reports", href: "#reports" },
  ];

  const trendingTopics = [
    "Global Infrastructure Investment Hits $2.8T",
    "Green Bonds Rally Continues",
    "Asian Infrastructure Bank Expansion",
    "5G Network Investment Surge"
  ];

  return (
    <>
      {/* Top trending bar */}
      <div className="bg-slate-900 text-yellow-400 py-2 overflow-hidden">
        <div className="flex animate-pulse">
          <div className="flex items-center space-x-8 whitespace-nowrap">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">TRENDING:</span>
            </div>
            {trendingTopics.map((topic, index) => (
              <span key={index} className="text-sm text-slate-300 hover:text-yellow-400 cursor-pointer">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/22c4d9da-1751-48f9-92d5-30f3ff8b9734.png" 
                alt="InfraLedger" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Search and Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search news..."
                  className="pl-10 w-64 border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                />
              </div>
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                <Bell className="h-4 w-4" />
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4">
                Subscribe
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-700 hover:text-slate-900 font-medium py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="mb-3 border-slate-300"
                  />
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
