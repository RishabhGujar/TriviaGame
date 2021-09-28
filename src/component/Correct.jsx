import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
export default function Correct({answer,userResponse,handleRefresh}) {
     useEffect(()=>{
        setTimeout(handleRefresh,3000);
     })
     
    return (
        <div>
            {answer.toLowerCase()===userResponse.toLowerCase()? <Confetti/> : null }
            {<h1>{answer.toLowerCase()===userResponse.toLowerCase() ? "Correct" : "Incorrect"}</h1>}
            
        </div>
    )
}
