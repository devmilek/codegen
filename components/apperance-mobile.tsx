import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Eye, Menu } from "lucide-react";
import DestinationSidebar from "./destination-sidebar";
import { Button } from "./ui/button";
import ApperanceSidebar from "./apperance-sidebar";
import { ScrollArea } from "./ui/scroll-area";

const ApperanceMobile = () => {
  return (
    <div className="lg:hidden ml-auto">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" className="ml-auto">
            Preview <Eye className="h-4 w-4 ml-2" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="p-0 h-[calc(100%-50px)] rounded-tl-3xl rounded-tr-3xl"
          side="bottom"
        >
          <ScrollArea className="h-full p-8">
            <ApperanceSidebar className="w-full" />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ApperanceMobile;
