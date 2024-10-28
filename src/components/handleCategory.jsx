import { useEffect } from "react";

export const useHandleCategory= (count, setCategory) =>{
    useEffect(()=>{
        setCategory(count);
    },[count, setCategory]);
}