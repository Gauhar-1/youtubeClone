
export const SideBar = () => {
    return (
        <div className="max-md:hidden flex flex-col space-y-8 w-20 pt-4 items-center  ">
        <div className="hidden md:flex flex-col space-y-7  ">
            <div >

                {/* Home icon */}
                <div className="ml-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
</svg>
                </div>
<p className="text-xs pt-2 ml-5 ">Home</p>
            </div>
            <div>

                {/* Shorts button */}
                <div className="ml-6 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;">
  <g>
    <path d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z" fill="white"></path>
    <polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="black"></polygon>
  </g>
</svg>
                </div>
<p className="  text-xs pt-2 ml-5">Shorts</p>
            </div>
            <div>

                {/* subscriptions button */}
                <div className="ml-6">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" fill="white" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
                </div>
<p className=" text-xs  pt-2 ml-1 ">Subscriptions</p>
            </div>
            <div>

                {/* profile button */}
                <div className="ml-6 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                </div>
<p className="text-xs pt-2 ml-5 ">Profile</p>
            </div>

        </div>
        </div>
    )   
}