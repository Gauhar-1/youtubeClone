import { VideoCard } from "./videoCard";

const VIDEOs = [{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},{
    title :"The Final Boss Was A Bully | Black Myth Wukong - Part 4",
    channel:"BeastBoyShub",
    views:"547K views | 1 month ago",
    image:"./carryLogo.jpg",
    thumbImage:"./carryLogo.jpg"
},];

export function VideoGrid(){
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOs.map(video =><div>
            <VideoCard 
                title={video.title} 
                channel={video.channel} 
                views={video.views} 
                image={"./carry.webp"}
                thumbImage={"./carryLogo.jpg"}></VideoCard>
        </div>)}
    </div>)
}