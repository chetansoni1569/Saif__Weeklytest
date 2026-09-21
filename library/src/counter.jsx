import React, {useState} from 'react'

export default function App() {
  const [count , setCount] = useState(0)

  function handle(){
    setCount(count+1)
  }

  return (
    <div style={{backgroundColor:'red'}}>
    <h1 style={{color:'green'}}>No. of Count {count}</h1>
    <button onClick={handle}>
      click me {count}
    </button>
    </div>
  )
}
