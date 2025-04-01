import { SideVideoCard } from "./sideVideoCard";
import { Link } from "react-router-dom";

export const SideVideoGrid = (props : any)=> {
    return (
        <div className="grid grid-cols-1 max-md:invisible">
           {props.data.map((video : any)=> <div>
            <Link to={`/video/${video.id}/${video.snippet.categoryId}`} key={video.id}>
            <SideVideoCard 
                       title={video.snippet.title}
                       channel={video.snippet.channelTitle}
                       views={video.statistics.viewCount}
                       image={video.snippet.thumbnails.medium.url}
                       likeCount={video.statistics.likeCount}
                       time={video.snippet.publishedAt}
                       channelId={video.snippet.channelId}
                       setHelp={props.setHelp} thumbImage={""}                ></SideVideoCard>
            </Link>
           </div> )}
        </div>
    )
}
