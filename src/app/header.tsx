"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header(props: { navLinks: string }) {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks =
    (JSON.parse(props.navLinks) as { href: string; label: string }[]) ?? [];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <div className="max-w-[1000px] w-full flex h-24 items-center justify-between ps-6 pe-2 md:px-2">
        <Link href="#" className="text-3xl font-bold">
          <span className="text-primary font-semibold">AT</span>
        </Link>
        <div className="hidden md:flex gap-6 font-medium text-2xl">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              className="hover:opacity-50"
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <DropdownMenu open={navOpen} onOpenChange={setNavOpen}>
            <DropdownMenuTrigger>
              <Button asChild className="gap-2 rounded-full">
                <Menu className="w-[50px] h-[50px] text-black text-white font-bold" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[300px] p-4 rounded-lg"
              side="bottom"
              sideOffset={10}
              align="end"
            >
              <div className="flex flex-col gap-2 font-medium text-lg w-full justify-start items-center w-full">
                {navLinks.map((link) => (
                  <DropdownMenuItem
                    className="w-full"
                    onClick={() => setNavOpen(false)}
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      className="hover:text-primary px-3 py-2 w-full text-center"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
