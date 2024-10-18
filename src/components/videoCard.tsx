export function VideoCard( props : any) {
    return (
        <div className="p-3">
            <img className="rounded-xl"  src={props.image} alt="" />
            <div className="grid grid-cols-12">
                <div className="col-span-2 pt-2 pl-2" >
                    <img className="rounded-full w-20 h-20 " src={props.thumbImage} alt="" />
                </div>
                <div  className=" col-start-3 col-span-10 pt-2 ">
                    <div  className="text-base">{props.title}</div>
                    <div className="text-gray-400 text-base">{props.channel}</div>
                    <div className="text-gray-400">{props.views}</div>
                </div>
            </div>
            </div>
    );
}
