import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import SidebarSheet from "./sidebar-sheet";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Card>
        <CardContent className="flex justify-between items-center px-4 py-1">
          <Link href={"/"} className="relative h-[30px] w-[145px]">
            <Image alt="logo" src="/logo.svg" fill />
          </Link>
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
