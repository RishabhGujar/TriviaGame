import './App.css';
import { useQuesSearch } from './api/api';
import { useState } from 'react';
import Home from './component/Home';

function App() {

   const [userResponse,setUserResponse] = useState('');
   const [refresh,setRefresh] = useState(false);

   const  {loading,error,questionData} = useQuesSearch(refresh);
   
   function handleResponse(value){
      setUserResponse(value);
   }

   function handleRefresh(){
      setUserResponse('');
      setRefresh(!refresh);
   }

   const Load = loading || questionData[0].question===undefined ?<div className="container"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
   : <Home 
      question={questionData[0].question} 
      answer={questionData[0].answer} 
      handleResponse={handleResponse}
      userResponse={userResponse} 
      handleRefresh={handleRefresh} />

   const view = error ? <h1>Error! please try to refresh the page.</h1> :Load
  
  return view
}

export default App;
