<<<<<<< HEAD
import Link from "next/link";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";
=======
import { SheetContent, SheetTitle } from "./ui/sheet";
>>>>>>> parent of 61bef49 (feat: add Thumbnail component)

const SidebarSheet = () => {
  return (
    <SheetContent>
<<<<<<< HEAD
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
=======
      <SheetTitle>Teste</SheetTitle>
>>>>>>> parent of 61bef49 (feat: add Thumbnail component)
    </SheetContent>
  );
};

export default SidebarSheet;
