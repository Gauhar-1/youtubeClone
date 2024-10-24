import { SideVideoCard  } from "./sideVideoCard"
import { VideoSection } from "./videoSection"
import { SideVideoGrid } from "./sideVideoGrid"

export const SideVideoRow = () =>{
    return ( 
        <div>
        <div className="max-lg:hidden  grid grid-cols-12">
            <div className="col-span-8">
            <VideoSection ></VideoSection>
            </div>
            <div className="col-span-4 m-2 pr-2">
                <SideVideoGrid></SideVideoGrid>
            </div>
        </div>

        <div className="max-lg:block hidden">
            <VideoSection></VideoSection>
        </div>
        </div>
    )
}