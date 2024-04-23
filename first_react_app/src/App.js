
import {useEffect, useState} from "react";


export default function App() {
  const [advice,setadvice]= useState("");
  // const [count,setcount]= useState(0);
var count=0;
console.log(count);
  async function getAdvice(){
    const res =await fetch("https://api.adviceslip.com/advice");
    const data= await res.json();
    setadvice(data.slip.advice);
    count=2;
    
    // setcount((c)=>c+1);
  }
  useEffect(function () {
    getAdvice();
    
  },[advice]);
  return (
  <div>
    <h1>{advice}</h1>
    <button onClick={getAdvice}> Get Advice</button>
    <Message count={count}/>
  </div>
  );
}
function Message(props){
   return (
    <p>Total <strong>{props.count}</strong> advices provide</p>
   );
}