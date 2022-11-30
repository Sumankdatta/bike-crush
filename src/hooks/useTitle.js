import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-BikeCrush`;
    },[title])
}

export default useTitle;