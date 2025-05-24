
import { useState } from "react";
import { Search, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Capital Flows", href: "#capital" },
    { label: "Market Trends", href: "#trends" },
    { label: "Analysis", href: "#analysis" },
    { label: "Reports", href: "#reports" },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/22c4d9da-1751-48f9-92d5-30f3ff8b9734.png" 
              alt="InfraLedger" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
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
                placeholder="Search infrastructure news..."
                className="pl-10 w-64 bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-yellow-400"
              />
            </div>
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-yellow-400">
              <Bell className="h-4 w-4" />
            </Button>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold">
              Subscribe
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-yellow-400 transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="mb-3 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                />
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
