'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationMenuItem } from '@/components/navigation-menu';
import { cn } from '@/lib/utils';

const getClassName = (path: string, currentPathName: string) => {
  const isActive = currentPathName === path;

  return cn(
    'text-sm font-medium px-2.5 py-2 border rounded-lg border-transparent transition-colors duration-100',
    {
      'hover:border-border dark:text-gray-400 text-gray-600 hover:text-current dark:hover:text-white':
        !isActive,
      'dark:text-white text-current': isActive,
    },
  );
};

export function SiteNavigationItem({
  path,
  children,
}: React.PropsWithChildren<{
  path: string;
}>) {
  const currentPathName = usePathname();
  const className = getClassName(path, currentPathName);

  return (
    <NavigationMenuItem>
      <Link className={className} href={path}>
        {children}
      </Link>
    </NavigationMenuItem>
  );
}