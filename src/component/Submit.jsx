import React, { useState } from 'react'

export default function Submit({handleResponse}) {
    const [answer,setAnswer] = useState('');
    function handleSubmit(e){
         e.preventDefault();
         if(answer){
            handleResponse(answer);
         }
    }
    return (
            <form onSubmit={handleSubmit} className='formGroup'>
                <input 
                   type="text"
                   name="answer"
                   value={answer}
                   onChange={
                     (e)=>{
                         setAnswer(e.target.value);
                     }
                    }
                    placeholder="Type your Answer"
                    className="itemsContainer"
                 />
                 <button
                   className="btn"
                 >
                     Submit
                 </button>
            </form>  
    )
}
