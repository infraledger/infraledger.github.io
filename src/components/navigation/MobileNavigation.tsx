
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MobileNavigationProps {
  mainNavItems: any[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileNavigation = ({ mainNavItems, isMenuOpen, setIsMenuOpen }: MobileNavigationProps) => (
  isMenuOpen ? (
    <div className="lg:hidden py-4 border-t border-slate-700/50 bg-slate-950/95 backdrop-blur-xl rounded-b-lg">
      <div className="flex flex-col space-y-3">
        {mainNavItems.map((item) => (
          <div key={item.label}>
            {item.to ? (
              <Link
                to={item.to}
                className="text-slate-300 hover:text-cyan-400 font-medium py-2 block transition-colors duration-300 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ) : (
              <>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-cyan-400 font-medium py-2 block transition-colors duration-300 flex items-center space-x-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
                {item.subitems && (
                  <div className="ml-6 mt-2 space-y-2">
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
              </>
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
  ) : null
);

export default MobileNavigation;
