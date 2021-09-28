import { useState,useEffect} from "react";
import axios from "axios";


function useQuesSearch(refresh){
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false);
    const [questionData,setImagesData] = useState([]);
   
    useEffect(()=>{
        setLoading(true);
        setError(false);
        let cancel
        axios({
            method:"GET",
            url : "https://jservice.io/api/random",
            cancelToken: axios.CancelToken(c=>cancel=c)

        }).then(response=>{
             setImagesData( [...response.data]); 
             setLoading(false); 
        }).catch(e=>{
            if(axios.isCancel(e)) return;
            setError(true);
            setLoading(false);
        },)
        return ()=>cancel()
    },[refresh])

    return {loading,error,questionData}
}

export {useQuesSearch };