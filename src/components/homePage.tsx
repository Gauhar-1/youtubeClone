import { AppBar } from "./appBar";
import { VideoGrid } from "./videoGrid";
import { SideBar } from "./sideBar";
import { SideVideoRow } from "./sideVideoRow";
import { HandleClick } from "./videoCard";
import count from "./videoCard";


export const HomePage = ()=> {
    console.log(count);
    if (count === true){
        return (
        <div>
            <HandleClick></HandleClick>
        </div>
        )
    }
    else if (count === false){
        return (
            <div className="flex">
                <SideBar></SideBar>
                <div>
                    <AppBar></AppBar>
                    <VideoGrid></VideoGrid>
                </div>
            </div>
        )
    }
}
