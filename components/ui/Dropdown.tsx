"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";

type DropdownItem = {
  id: number;
  name: string;
  href: string;
  icon: LucideIcon;
};

type DropdownProps = {
  itemList: DropdownItem[];
  handleClick: (value?: boolean) => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
};

export default function Dropdown({
  itemList,
  handleClick,
  menuButtonRef,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        handleClick(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClick(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClick, menuButtonRef]);

  return (
    <div
      ref={dropdownRef}
      className="animate-rise absolute top-full left-0 z-50 mt-4 w-56 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/10"
    >
      <nav className="flex flex-col gap-1">
        {itemList.map((item) => {
          const Icon = item.icon;
          const active = item.href === pathname;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleClick(false)}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl p-2.5 transition-colors ${
                active
                  ? "bg-brand/8 font-medium text-brand"
                  : "text-ink hover:bg-surface"
              }`}
            >
              <Icon size={18} className={active ? "text-brand" : "text-muted"} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
