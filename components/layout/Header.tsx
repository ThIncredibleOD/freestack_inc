"use client";

import {
  BriefcaseBusiness,
  FolderOpen,
  House,
  Menu,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import Dropdown from "../ui/Dropdown";
import Button from "../ui/Button";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Services", href: "/services" },
    { id: 3, name: "Portfolio", href: "/portfolio" },
    { id: 4, name: "About Us", href: "/about-us" },
  ];

  const dropdownNavItems = [
    { id: 1, name: "Home", href: "/", icon: House },
    { id: 2, name: "Services", href: "/services", icon: BriefcaseBusiness },
    { id: 3, name: "Portfolio", href: "/portfolio", icon: FolderOpen },
    { id: 4, name: "About Us", href: "/about-us", icon: Users },
  ];

  const handleDropdown = (value?: boolean) => {
    if (value !== undefined) {
      setDropdown(value);
      return;
    }

    setDropdown((prev) => !prev);
  };

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[85rem] items-center justify-between gap-4 px-4 md:px-8 lg:px-16">
        <div className="relative flex shrink-0 items-center gap-3">
          <button
            ref={menuButtonRef}
            type="button"
            className="-ml-2 cursor-pointer rounded-lg p-2 text-ink transition-colors hover:bg-surface md:hidden"
            onClick={() => setDropdown((prev) => !prev)}
            aria-label={dropdown ? "Close menu" : "Open menu"}
            aria-expanded={dropdown}
          >
            {dropdown ? <X /> : <Menu />}
          </button>

          {dropdown && (
            <Dropdown
              itemList={dropdownNavItems}
              handleClick={handleDropdown}
              menuButtonRef={menuButtonRef}
            />
          )}

          <Link
            href="/"
            className="cursor-pointer rounded-lg transition-opacity hover:opacity-80"
            aria-label="FreeStack home"
          >
            <Image
              src="/logo.png"
              alt="FreeStack"
              width={240}
              height={101}
              className="h-10 w-auto md:h-12"
            />
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const active = item.href === pathname;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative inline-block py-1 transition-colors lg:text-lg ${
                      active ? "font-medium text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-brand transition-transform duration-200 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button href="/#" className="shrink-0">
          Get Started
        </Button>
      </div>
    </header>
  );
}
