import { useRecoilState, useRecoilValue } from "recoil";
import { AppBar} from "./appBar";
import { SideVideoRow } from "./sideVideoRow";
import { useEffect, useState } from "react";
import { title } from "process";
import { RoundUp } from "./roundUpCount"
import moment  from "moment"
import { fetchData2 } from "./fetchData";

export function VideoCard( props : any) {
    const [channelData , setChannelData] = useState<any>(null);
    console.log(props.channelId)
    const channelRecoilData = useRecoilValue(fetchData2(props.channelId));
    console.log(channelRecoilData.items[0])
    
    useEffect(()=>{
        if(channelRecoilData){
            setChannelData(channelRecoilData.items[0]);
        }
    },[channelRecoilData])
    return (
        <div  className="p-3 cursor-pointer " onClick={() => {props.OnClick(1);
        props.setHelp({
            title : props.title,
            channel : props.channel,
            views : props.views,
            logo : channelData.snippet.thumbnails.default.url,
            image : props.image,
            likeCount : props.likeCount,
            time:props.time,
            VideoId:props.VideoId,
        })
        }}>
            <img  className="rounded-xl"  src={props.image} alt="" />
            <div className="flex space-x-1">
                <div className=" pt-2 pl-2  " >
                    <img className="rounded-full w-10 h-10  p-1" src={channelData? channelData.snippet.thumbnails.default.url : ""} alt="" />
                </div>
                <div  className="  pt-2 ">
                    <div  className="text-base">{props.title}</div>
                    <div className="text-gray-400 text- text-xs">{props.channel}</div>
                    <div className="text-gray-400 text-xs ">{RoundUp(props.views)}  &bull;  {moment(props.time).fromNow()}</div>
                </div>
            </div>
            </div>
    );
}





 