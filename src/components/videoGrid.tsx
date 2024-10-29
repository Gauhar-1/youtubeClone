import { VideoCard } from "./videoCard";
import { VideoSection } from "./videoSection";
import { fetchData, fetchData2 } from "./fetchData";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";



export function VideoGrid( props : any){
    
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {props.data.map((video : any) =><div>
            <VideoCard 
                title={video.snippet.title} 
                channel={video.snippet.channelTitle} 
                views={video.statistics.viewCount} 
                image={video.snippet.thumbnails.medium.url}
                likeCount={video.statistics.likeCount}
                time={video.snippet.publishedAt}
                channelId={video.snippet.channelId}
                videoId={video.id}
                 OnClick={props.setCount} setHelp={props.setHelp} ></VideoCard>
        </div>)}
    </div>)
}

