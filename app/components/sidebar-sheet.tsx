import Link from "next/link";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>MyComedyTube</SheetTitle>
        <SheetDescription>
          Vamos sorrir e cantar - Silvio Santos
        </SheetDescription>
        <SheetClose asChild>
        <Button asChild>
          <Link href="/video">
          Vídeo
          </Link>
        </Button>
        </SheetClose>
        
      </SheetHeader>
    </SheetContent>
  );
};

export default SidebarSheet;
