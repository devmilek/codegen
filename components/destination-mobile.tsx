import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import DestinationSidebar from "./destination-sidebar";

const DestinationMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="left">
        <DestinationSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default DestinationMobile;
