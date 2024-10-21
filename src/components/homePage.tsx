import { AppBar } from "./appBar";
import { VideoGrid } from "./videoGrid";
import { SideBar } from "./sideBar";
import { SideVideoRow } from "./sideVideoRow";
import { useState } from "react";

export const HomePage = ()=> {
    const [count , setCount] = useState(0);
    if (count){
        return (
        <div>
            <AppBar setCOunt={setCount}></AppBar>
            <SideVideoRow></SideVideoRow>
        </div>
        )
    }
    else {
        return (
            <div className="flex">
                <SideBar></SideBar>
                <div>
                    <AppBar></AppBar>
                    <VideoGrid  setCount={setCount}></VideoGrid>
                </div>
            </div>
        )
    }
}
