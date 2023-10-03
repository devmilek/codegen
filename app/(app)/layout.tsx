import ApperanceMobile from "@/components/apperance-mobile";
import ApperanceSidebar from "@/components/apperance-sidebar";
import DestinationMobile from "@/components/destination-mobile";
import DestinationSidebar from "@/components/destination-sidebar";
import QrPreview from "@/components/qr-preview";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, Menu } from "lucide-react";
import { Metadata } from "next";
import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex bg-gray-100 h-full p-4 lg:p-8 lg:space-x-6">
      <DestinationSidebar className="hidden xl:block" />
      <section className="w-full space-y-4 xl:space-y-0 h-full flex flex-col">
        <div className="bg-white rounded-lg p-4 flex xl:hidden">
          <DestinationMobile />
          <ApperanceMobile />
        </div>
        <div className="bg-white h-[calc(100%-88px)] xl:h-full rounded-lg">
          <ScrollArea className="h-full p-6">
            <div className="p-1">{children}</div>
          </ScrollArea>
        </div>
      </section>
      <div className="bg-white rounded-lg hidden lg:block w-[400px]">
        <ScrollArea className="h-full p-6">
          <ApperanceSidebar className="" />
        </ScrollArea>
      </div>
    </main>
  );
};

export default AppLayout;
