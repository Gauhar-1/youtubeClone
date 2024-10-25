import { SideVideoCard } from "./sideVideoCard";
import { VIDEOs } from "./videoGrid";

export const SideVideoGrid = (props : any)=> {
    return (
        <div className="grid grid-cols-1 max-md:invisible">
           {VIDEOs.map(video=> <div>
            <SideVideoCard 
                title={video.title} 
                channel={video.channel} 
                views={video.views} 
                image={video.image}
                setHelp={props.setHelp}
                setCount ={props.setCount}
                count={props.count}
                ></SideVideoCard>
           </div> )}
        </div>
    )
}
