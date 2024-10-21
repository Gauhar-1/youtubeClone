import { useRecoilState } from "recoil";
import { AppBar} from "./appBar";
import { SideVideoRow } from "./sideVideoRow";

export function VideoCard( props : any) {
    return (
        <div  className="p-3 cursor-pointer " onClick={() => {props.OnClick(1)}}>
            <img  className="rounded-xl"  src={props.image} alt="" />
            <div className="flex space-x-1">
                <div className=" pt-2 pl-2" >
                    <img className="rounded-full w-20  p-1" src={props.thumbImage} alt="" />
                </div>
                <div  className="  pt-2 ">
                    <div  className="text-base">{props.title}</div>
                    <div className="text-gray-400 text- text-xs">{props.channel}</div>
                    <div className="text-gray-400 text-xs">{props.views}</div>
                </div>
            </div>
            </div>
    );
}



 