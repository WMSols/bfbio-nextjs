"use client";

import Link from "next/link";
import { navigation, type NavItem } from "@/data/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function NavChildren({ items }: { items: NavItem[] }) {
  return (
    <ul className="grid w-56 gap-0.5 p-1">
      {items.map((child) => (
        <li key={child.label}>
          {child.href ? (
            <NavigationMenuLink asChild>
              <Link href={child.href}>{child.label}</Link>
            </NavigationMenuLink>
          ) : (
            <span className="block px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {child.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Bf Bio Sciences
        </Link>
        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList className="flex-wrap justify-end">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children?.length ? (
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.href ? (
                        <div className="px-2 pt-1">
                          <NavigationMenuLink asChild>
                            <Link href={item.href}>{item.label}</Link>
                          </NavigationMenuLink>
                        </div>
                      ) : null}
                      <NavChildren items={item.children} />
                    </NavigationMenuContent>
                  </>
                ) : item.href ? (
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                ) : (
                  <span className={navigationMenuTriggerStyle()}>{item.label}</span>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <nav className="mx-auto flex max-w-7xl flex-wrap gap-x-4 gap-y-1 border-t px-4 py-2 text-sm lg:hidden">
        {navigation.flatMap((item) => {
          const links: { label: string; href: string }[] = [];
          if (item.href) links.push({ label: item.label, href: item.href });
          for (const child of item.children ?? []) {
            if (child.href) links.push({ label: child.label, href: child.href });
          }
          return links;
        }).map((link) => (
          <Link
            key={`${link.label}-${link.href}`}
            href={link.href}
            className="text-muted-foreground hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
