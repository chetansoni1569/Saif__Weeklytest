import React from 'react'
import Club from './Clubs'
import Counter from './counter'
console.log(Club);


export default function App() {
  return (
    
    <div style={{backgroundColor:'aqua', font:'32px'}} >
      {Club.map((element)=>{
        return(
           <div key={element.id}>
          <h1 style={{color:'red'}}>{element.name}</h1>
          <h1>{element.category}</h1>
          <h1>{element.coordinator}</h1>
          <h1>{element.members}</h1>
          <hr />
         <Counter />
        </div>
        )
      })
      }
    </div>
  )
}

// This is the code for condition 
//i do it here plz review this

// {Clubs.filter((element)=>{
//   element.id >2
// })}map((element)=>{
//         return(
//            <div key={element.id}>
//           <h1 style={{color:'red'}}>{element.name}</h1>
//           <h1>{element.category}</h1>
//           <h1>{element.coordinator}</h1>
//           <h1>{element.members}</h1>
//           <hr />
//          <Counter />
//         </div>
//         )
//       })
      


