
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { infrastructureTypes } from "@/data/infrastructureData";

interface MainNavigationProps {
  mainNavItems: any[];
}

const MainNavigation = ({ mainNavItems }: MainNavigationProps) => (
  <NavigationMenu>
    <NavigationMenuList className="space-x-1">
      {mainNavItems.map((item) => (
        <NavigationMenuItem key={item.label}>
          {item.subitems ? (
            <>
              <NavigationMenuTrigger className="text-slate-300 hover:text-cyan-400 font-medium text-sm h-8 px-4 transition-all duration-300 hover:bg-slate-800/50 rounded-lg border border-transparent hover:border-cyan-500/30 bg-transparent">
                <div className="flex items-center space-x-1">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
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
          ) : item.to ? (
            <Link
              to={item.to}
              className="text-slate-300 hover:text-cyan-400 font-medium text-sm h-8 px-4 flex items-center space-x-1 transition-all duration-300 hover:bg-slate-800/50 rounded-lg border border-transparent hover:border-cyan-500/30"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ) : (
            <a
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 font-medium text-sm h-8 px-4 flex items-center space-x-1 transition-all duration-300 hover:bg-slate-800/50 rounded-lg border border-transparent hover:border-cyan-500/30"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          )}
        </NavigationMenuItem>
      ))}

      {/* Infrastructure Sectors Dropdown */}
      <NavigationMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-slate-300 hover:text-cyan-400 font-medium text-sm h-8 px-4 transition-all duration-300 hover:bg-slate-800/50 rounded-lg border border-transparent hover:border-cyan-500/30">
              Sectors
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 bg-slate-950/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl max-h-96 overflow-y-auto">
            <DropdownMenuLabel className="text-cyan-400 font-semibold">
              Infrastructure Sectors
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-700/50" />
            {Object.entries(infrastructureTypes).map(([sector, data]) => (
              <DropdownMenuSub key={sector}>
                <DropdownMenuSubTrigger className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50">
                  <span className="mr-2">{data.icon}</span>
                  {sector}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-64 bg-slate-950/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl max-h-64 overflow-y-auto">
                  {data.subtypes.map((subtype: string, index: number) => (
                    <DropdownMenuItem key={index} className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50">
                      {subtype}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export default MainNavigation;
