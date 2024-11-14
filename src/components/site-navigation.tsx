import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuList } from '@/components/navigation-menu';
import { SiteNavigationItem } from '@/components/site-navigation-item';

const links = {
  About: {
    label: 'About',
    path: '/about',
  },
  Blog: {
    label: 'Blog',
    path: '/blog',
  },
  Contact: {
    label: 'Contact',
    path: '/contact',
  },
  // Add more navigation items as needed
};

export function SiteNavigation() {
  const NavItems = Object.values(links).map((item) => {
    return (
      <SiteNavigationItem key={item.path} path={item.path}>
        {item.label}
      </SiteNavigationItem>
    );
  });

  return (
    <>
      <div className="hidden items-center justify-center md:flex">
        <NavigationMenu>
          <NavigationMenuList className="space-x-1">
            {NavItems}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex justify-start sm:items-center md:hidden">
        <MobileDropdown />
      </div>
    </>
  );
}

function MobileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label="Open Menu">
        <Menu className="h-8 w-8" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full">
        {Object.values(links).map((item) => (
          <DropdownMenuItem key={item.path} asChild>
            <Link 
              className="flex w-full h-full items-center" 
              href={item.path}
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}