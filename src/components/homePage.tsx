import { AppBar } from "./appBar";
import { VideoGrid } from "./videoGrid";
import { SideVideoRow } from "./sideVideoRow";
import { useEffect, useState } from "react";
import { FullSideBar } from "./FullSideBar";
import { useRecoilValue } from "recoil";
import { fetchData } from "./fetchData";

export const HomePage = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState(1);
    const [help, setHelp] = useState({
        title: "",
        channel: "",
        views: 0,
        logo: ""
    });

    const recoilData = useRecoilValue(fetchData(category));
    
    useEffect(()=>{
         if(recoilData){
            setData(recoilData.items);
         }
    },[recoilData])
    


    if (count) {
        return (
            <div>
                <AppBar setCOunt={setCount} count={count}></AppBar>
                <SideVideoRow data={data} setHelp={setHelp}></SideVideoRow>
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
                        data={data}
                    ></VideoGrid>
                </div>
            </div>
        );
    }
};
