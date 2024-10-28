import { AppBar } from "./appBar";
import { VideoGrid } from "./videoGrid";
import { SideVideoRow } from "./sideVideoRow";
import { useEffect, useState } from "react";
import { FullSideBar } from "./FullSideBar";
import { useRecoilValue } from "recoil";
import { fetchData} from "./fetchData";

export const HomePage = () => {
    const [count, setCount] = useState(0);
    const [videoData, setVideoData] = useState([]);
    const [category, setCategory] = useState(2);
    const [help, setHelp] = useState({
        title: "",
        channel: "",
        views: 0,
        logo: "",
    });

    const VideoRecoilData = useRecoilValue(fetchData(category));
    
    useEffect(()=>{
        if(VideoRecoilData){
            setVideoData(VideoRecoilData.items);
        }
    },[VideoRecoilData,category])

    if (count) {
        return (
            <div>
                <AppBar setCOunt={setCount} count={count}></AppBar>
                <SideVideoRow help={help} data={videoData} setHelp={setHelp}></SideVideoRow>
            </div>
        );
    } else {
        return (
            <div className="">
                <AppBar></AppBar>
                <div className="flex">
                    <FullSideBar setCategory={setCategory}></FullSideBar>
                    <VideoGrid
                        setCount={setCount}
                        setHelp={setHelp}
                        data={videoData}
                        // channelData={channelData}

                    ></VideoGrid>
                </div>
            </div>
        );
    }
};


