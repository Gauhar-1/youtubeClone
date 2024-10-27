export const SideVideoCard = (props : any) => {
    return (
        <div className="grid grid-cols-2 space-x-4" onClick={() => {
            
            props.setHelp({
                title : props.title,
                channel : props.channel,
                views : props.views,
                logo : props.thumbImage
            })
            }}>
            <div className="relative">
            <img className=" rounded-xl m-3" src={props.image}alt="" />
            <div className="abosulte relative inset-0">
            <div className="absolute bottom-4 -right-2 bg-black text-white rounded-lg p-1 text-xs  ">2:04 </div>
            </div>
            </div>
            <div className="m-3 pl-2 pr-2 space-y-1" >
                <div className="flex space-x-1 ">
                <div className="text-sm">{props.title}</div>
                <svg className="h-6 w-6 white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                </div>
                <div className="space-y-0.5">
                <div className="flex space-x-1">
                <div className=" text-gray-500 text-xs">{props.channel}</div>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="24" focusable="false" fill="white" aria-hidden="true"  className="pointer-events: none; display: inherit; width: 100%; height: 100%; "><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                </div>
                <div className="text -base text-gray-500 text-xs">{props.views}</div>
                </div>
            </div>
        </div>
    )
}  