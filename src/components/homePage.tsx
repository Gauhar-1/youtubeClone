import { AppBar } from "./appBar";
import { VideoGrid } from "./videoGrid";
import { SideBar } from "./sideBar";
import { SideVideoRow } from "./sideVideoRow";
import { useState } from "react";
import { FullSideBar } from "./FullSideBar";

export const HomePage = ()=> {
    const [count , setCount] = useState(0);
    const [help , setHelp ] = useState({
        title : "",
        channel : "",
        views : 0,
        logo : ""
    });
    if (count){
        return (
        <div>
            <AppBar setCOunt={setCount} count={count}></AppBar>
            <SideVideoRow help={help} count={count} setHelp={setHelp} setCOunt={setCount}></SideVideoRow>
        </div>
        )
    }
    else {
        return (
            <div className="">
                <AppBar></AppBar>
                <div className="flex">
                    <FullSideBar></FullSideBar>
                    <VideoGrid  
                    setCount={setCount}
                    setHelp={setHelp}
                    ></VideoGrid>
                </div>
            </div>
        )
    }
}
