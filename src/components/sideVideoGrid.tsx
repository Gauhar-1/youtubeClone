import { SideVideoCard } from "./sideVideoCard";
import { VIDEOs } from "./videoGrid";

export const SideVideoGrid = ()=> {
    return (
        <div className="grid grid-cols-1 max-md:invisible">
           {VIDEOs.map(video=> <div>
            <SideVideoCard 
                title={video.title} 
                channel={video.channel} 
                views={video.views} 
                image={video.image}></SideVideoCard>
           </div> )}
        </div>
    )
}
