"use client";

import { cn } from "@/lib/utils";
import {
  Contact2,
  Link2,
  Mail,
  MessageCircleIcon,
  Phone,
  TextIcon,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DestinationSidebar = () => {
  const pathname = usePathname();
  const destinations = [
    {
      label: "Link",
      icon: Link2,
      href: "/app",
    },
    {
      label: "E-mail",
      icon: Mail,
      href: "/app/mail",
    },
    {
      label: "Text",
      icon: TextIcon,
      href: "/app/text",
    },
    {
      label: "Call",
      icon: Phone,
      href: "/app/call",
    },
    {
      label: "SMS",
      icon: MessageCircleIcon,
      href: "/app/sms",
    },
    {
      label: "V-Card",
      icon: Contact2,
      href: "/app/v-card",
    },
    {
      label: "WI-FI",
      icon: Wifi,
      href: "/app/wifi",
    },
  ];
  return (
    <aside className="bg-white p-8 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Destinations</h2>
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 w-max">
        {destinations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="space-y-2 flex flex-col items-center"
          >
            <div
              className={cn(
                "h-16 w-16 rounded-lg flex items-center justify-center",
                pathname === item.href
                  ? "border border-blue-600 text-blue-700"
                  : "bg-gray-100 text-gray-400"
              )}
            >
              <item.icon />
            </div>
            <p className="font-medium text-sm">{item.label}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default DestinationSidebar;
