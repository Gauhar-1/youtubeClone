import { SideVideoCard  } from "./sideVideoCard"
import { VideoSection } from "./videoSection"
import { SideVideoGrid } from "./sideVideoGrid"
import { useState } from "react"

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
            ></VideoSection>
            </div>
            <div className="col-span-4 m-2 pr-2">
                <SideVideoGrid setHelp={props.setHelp} count={props.count} setCount={props.setCount}></SideVideoGrid>
            </div>
        </div>

        <div className="lg:hidden grid grid-rows-2">
        <div className="row-span-1">
            <VideoSection 
            title= {props.help.title}
            channel = {props.help.channel}
            views = {props.help.views}
            logo = {props.help.logo}
            ></VideoSection>
            </div>
            <div className="row-span-2 m-2 pr-2">
                <SideVideoGrid setHelp={props.setHelp} setCount={props.setCount}></SideVideoGrid>
            </div>
        </div>
        </div>
    )
}