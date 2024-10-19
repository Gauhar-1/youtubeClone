import { SearchBar } from "./searchBar"

export const AppBar = ()=> {
    return (
        <div className="flex justify-between">
        <div className="text-md text-center pl-5 pt-4 text-red-700">Youtube</div>
        <SearchBar></SearchBar>
        <div className="text-md text-center pr-5 pt-4">Sign in</div>
    </div>
        )
}