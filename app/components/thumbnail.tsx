import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const Thumbnail = () => {
    return (
        <div className="w-full">
            <AspectRatio ratio={16 / 9}>
                <Image src="/thumbex.jpg" alt="Image" className="rounded-md object-cover" fill />
            </AspectRatio>
        </div>
        
     );
}
 
export default Thumbnail;