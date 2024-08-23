import React from "react";

interface SidebarMenuItem {
  name: string;
  href: string;
}

interface MenuItems {
  items: SidebarMenuItem[];
}

export default function SidebarMenu({ items }: MenuItems) {
  return (
    <nav className="mb-8">
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <a key={idx} href={item.href}>
            <li className="text-white hover:text-gray-300" key={idx}>
              {item.name}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
