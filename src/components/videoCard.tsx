import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { RoundUp } from "../fetchers/roundUpCount";
import moment from "moment";
import { fetchData2 } from "../fetchers/fetchData";

interface VideoCardProps {
  title: string;
  channel: string;
  views: number;
  image: string;
  likeCount: number;
  time: string;
  videoId: string;
  channelId: string;
  OnClick: (id: number) => void;
  setHelp: (data: any) => void;
}

export function VideoCard(props: VideoCardProps) {
  const [channelData, setChannelData] = useState<any>(null);
  const channelRecoilData = useRecoilValue(fetchData2(props.channelId));

  useEffect(() => {
    if (channelRecoilData) {
      setChannelData(channelRecoilData.items[0]);
    }
  }, [channelRecoilData]);

  return (
    <div
      className="p-3 cursor-pointer"
      onClick={() => {
        props.OnClick(1);
        props.setHelp({
          title: props.title,
          channel: props.channel,
          views: props.views,
          logo: channelData?.snippet?.thumbnails?.default?.url || "",
          image: props.image,
          likeCount: props.likeCount,
          time: props.time,
          VideoId: props.videoId,
        });
      }}
    >
      {/* Video Thumbnail */}
      <img
        className="rounded-xl w-full h-44 object-cover"
        src={props.image}
        alt={`Thumbnail for ${props.title}`}
      />

      <div className="flex space-x-3 mt-3">
        {/* Channel Logo */}
        <img
          className="rounded-full w-10 h-10 object-cover"
          src={channelData?.snippet?.thumbnails?.default?.url || ""}
          alt={`${props.channel} logo`}
        />

        {/* Video Info */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold line-clamp-2">{props.title}</p>
          <p className="text-gray-400 text-xs">{props.channel}</p>
          <p className="text-gray-400 text-xs">
            {RoundUp(props.views)} views • {moment(props.time).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
}
