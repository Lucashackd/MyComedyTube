import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import SidebarSheet from "./sidebarSheet";

const Header = () => {
  return (
    <>
      <Card>
        <CardContent className="flex justify-between items-center px-4 py-1">
          <div className="relative h-[30px] w-[145px]">
            <Image alt="logo" src="/logo.svg" fill />
          </div>

          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SidebarSheet />
            </Sheet>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Header;
