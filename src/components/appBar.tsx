import { SearchBar } from "./searchBar"

export const AppBar = (props : any)=> {
    return (
        <div className="flex justify-between ">
            <div className="flex">
            <div className="pt-4 ml-5 md:hidden cursor-pointer"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg></div>

        <div className="text-md text-center pl-5 pt-4 text-red-700 cursor-pointer" onClick={() => props.setCOunt(0)}>
           Youtube</div>
            </div>
        <SearchBar></SearchBar>
        <div className="text-md text-center pr-5 pt-4 mr-2 cursor-pointer">Sign in</div>
    </div>
        )
}