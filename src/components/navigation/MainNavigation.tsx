import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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

    </NavigationMenuList>
  </NavigationMenu>
);

export default MainNavigation;
