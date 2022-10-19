import { useEffect } from "react";

export const useOnKeyPress = (callback, targetkey) =>{
    useEffect((event)=>{
        if(event.key===targetkey){
            callback();
        }
        window.addEventListener('keydown', useOnKeyPress)
        return ()=>{
            window.removeEventListener('keydown',useOnKeyPress)
        }
    },[callback,targetkey])

}