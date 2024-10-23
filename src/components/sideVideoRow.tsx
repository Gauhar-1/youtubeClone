import { SideVideoCard  } from "./sideVideoCard"
import { VideoSection } from "./videoSection"
import { SideVideoGrid } from "./sideVideoGrid"
import { useState } from "react"

export const SideVideoRow = (props : any) =>{
    console.log(props.help.logo)
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
                <SideVideoGrid></SideVideoGrid>
            </div>
        </div>

        <div className="max-lg:block hidden">
            <VideoSection></VideoSection>
        </div>
        </div>
    )
}