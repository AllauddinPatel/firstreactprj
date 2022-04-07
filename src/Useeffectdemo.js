import React, { useEffect, useState } from 'react'

export default function Useeffectdemo() {

    const [data, setData] = useState(0)
 //3 Ways
 //1:-Without dependency Array - Infinite Loop   
 useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => {
//                 return response.json()
//             }).then((result) => {
//                 console.log(result)

//                 setData(result)

//                 console.log(data)
//             })
    
 },[])


//2:-Empty Dependency Array - Same as ComponentDidMount
//  useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         return response.json()
//     }).then((result) => {
//         console.log(result)

//         setData(result)

//         console.log(data)
//     })
// },[])

//3.props or state value
//equivalent to componentdid updadte

useEffect(()=>{
  console.log("Use effect 3rd way")
},[data])

const incrementValue=()=>{
 setData(data+10)
}




  return (
    <div>
        <h2>Use Effect Hook</h2>
        <p>Data is :{data}</p> 
         <button type='button' onClick={incrementValue}>Increment</button>
    </div>
  )
}
