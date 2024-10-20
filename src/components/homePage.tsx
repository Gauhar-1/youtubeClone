import { AppBar } from "./appBar";
import { VideoGrid } from "./videoGrid";
import { SideBar } from "./sideBar";
import { SideVideoRow } from "./sideVideoRow";


export const HomePage = ()=> {
    return (
    <div>
        <AppBar></AppBar>
        {/* <VideoGrid></VideoGrid> */}
        <SideVideoRow></SideVideoRow>
    </div>

    )
}
