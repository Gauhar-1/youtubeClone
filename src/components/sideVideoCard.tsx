import { useParams } from "react-router-dom";
import { RoundUp } from "../fetchers/roundUpCount";
import moment from "moment";

interface SideVideoCardProps {
    title: string;
    channel: string;
    views: string;
    thumbImage: string;
    image: string;
    likeCount: number;
    time: string;
    channelId: string;
    setHelp: (data: any) => void;
}

export const SideVideoCard: React.FC<SideVideoCardProps> = ({
    title,
    channel,
    views,
    thumbImage,
    image,
    likeCount,
    time,
    channelId,
    setHelp,
}) => {
    const { videoId, categoryId } = useParams<{ videoId?: string; categoryId?: string }>();

    const handleClick = () => {
        setHelp({
            title,
            channel,
            views,
            logo: thumbImage,
            image,
            likeCount,
            time,
            channelId,
        });
    };

    return (
        <div className="grid grid-cols-2 space-x-4 cursor-pointer" onClick={handleClick}>
            <div className="relative">
                <img className="rounded-xl m-3" src={image} alt={title} loading="lazy" />
                
            </div>
            <div className="m-3 pl-2 pr-2 space-y-1">
                <div className="flex space-x-1 items-center">
                    <div className="text-sm font-medium truncate w-40">{title}</div>
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                    </svg>
                </div>
                <div className="space-y-0.5 text-gray-500 text-xs">
                    <div className="flex space-x-1 items-center">
                        <span>{channel}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z" />
                        </svg>
                    </div>
                    <p className="text-gray-400 text-xs">
                               {RoundUp(views)} views • {moment(time).fromNow()}
                             </p>
                </div>
            </div>
        </div>
    );
};
