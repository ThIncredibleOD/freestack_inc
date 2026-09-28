"use client";

import {
  BriefcaseBusiness,
  FolderOpen,
  House,
  Menu,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import Dropdown from "../ui/Dropdown";

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
    <header className="h-20 flex items-center justify-between gap-4 py-1 p-4 md:px-8 lg:px-16">
      <div className="relative flex shrink-0 items-center gap-4">
        <button
          ref={menuButtonRef}
          type="button"
          className="block cursor-pointer md:hidden"
          onClick={() => setDropdown((prev) => !prev)}
          aria-label="Open menu"
          aria-expanded={dropdown}
        >
          <Menu />
        </button>

        {dropdown && (
          <Dropdown
            itemList={dropdownNavItems}
            handleClick={handleDropdown}
            menuButtonRef={menuButtonRef}
          />
        )}

        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="h-25 w-25 object-contain md:h-30 md:w-30"
          />
        </Link>
      </div>

      <ul className="hidden md:flex items-center justify-between gap-10">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`${item.href === pathname ? "border-b-2" : "text-[hsla(215,16%,47%,1)]"} p-1 lg:text-lg`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <button className="bg-[hsla(212,80%,42%,1)] md:text-lg text-white p-2 lg:p-4 rounded-2xl cursor-pointer">
        Get Started
      </button>
    </header>
  );
}
