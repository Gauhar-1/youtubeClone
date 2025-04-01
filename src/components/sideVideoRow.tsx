import { SideVideoCard  } from "./sideVideoCard"
import { VideoSection } from "./videoSection"
import { SideVideoGrid } from "./sideVideoGrid"
import { useState } from "react"
import { BrowserRouter } from "react-router-dom"

export const SideVideoRow = (props : any) =>{
    return ( 
        <div>
        <div className="max-lg:hidden  grid grid-cols-12">
            <div className="col-span-8">
            <VideoSection 
            title= {props.help.title}
            channel = {props.help.channel}
            views = {props.help.views}
            logo = {props.help.logo}
            image={props.help.image}
            likeCount={props.help.likeCount}
            channelId={props.help.channelId}
            videoId={props.help.videoId}
            ></VideoSection>
            </div>
            <div className="col-span-4 m-2 pr-2">
                <SideVideoGrid setHelp={props.setHelp} count={props.count} data={props.data} ></SideVideoGrid>
            </div>
        </div>

        <div className="lg:hidden">
        <div className="row-span-1">
            <VideoSection 
            title= {props.help.title}
            channel = {props.help.channel}
            views = {props.help.views}
            logo = {props.help.logo}
            image={props.help.image}
            likeCount={props.help.likeCount}
            channelId={props.help.channelId}
            videoId={props.help.videoId}
            ></VideoSection>
            </div>
            <div className="row-span-2 m-2 pr-2">
                <SideVideoGrid setHelp={props.setHelp} setCount={props.setCount} data={props.data}></SideVideoGrid>
            </div>
        </div>
        </div>
    )
}