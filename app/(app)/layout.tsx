import ApperanceSidebar from "@/components/apperance-sidebar";
import DestinationSidebar from "@/components/destination-sidebar";
import QrPreview from "@/components/qr-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex bg-gray-100 h-full p-8 space-x-6">
      <DestinationSidebar />
      <section className="w-full bg-white rounded-lg">
        <ScrollArea className="h-full p-6">
          <div className="p-1">{children}</div>
        </ScrollArea>
      </section>
      <ApperanceSidebar />
    </main>
  );
};

export default AppLayout;
