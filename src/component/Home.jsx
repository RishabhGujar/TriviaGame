import React from 'react'
import Question from './Question'
import Submit from './Submit'
import Correct from './Correct'
export default function Home({answer,userResponse,handleResponse,question,handleRefresh}) {
    return (
    <div className="container">
      <h1>Trivia-Game</h1>
        <div className="border">

           <Question question={question}/>
           <Submit handleResponse={handleResponse}/> 
           {userResponse && <Correct userResponse={userResponse} answer={answer} handleRefresh={handleRefresh}/>}

         </div>
      </div>
    )
}
