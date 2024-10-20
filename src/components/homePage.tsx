import { AppBar } from "./appBar";
import { VideoGrid } from "./videoGrid";
import { SideBar } from "./sideBar";
import { VideoPage } from "./videoPage";

export const HomePage = ()=> {
    return (
        <div className="flex">
        <SideBar></SideBar>
    <div>
        <AppBar></AppBar>
        <VideoGrid></VideoGrid>
        {/* <VideoPage></VideoPage> */}
    </div>
    </div>

    )
}
