 import { useState } from 'react'
import './App.css'

function App() {
  const[num,setNumber]=useState(0)

const increase=()=>{
  
  setNumber(num+2);
  console.log(num);
}
 const decrease=()=>{
    setNumber(num-1);
    console.log(num);
  }


  return (
    <>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <h1>{num}</h1>
    {/* <h3>intro to useState</h3> */}
    </>
  )
}

export default App
