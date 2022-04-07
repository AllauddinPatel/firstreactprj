import React, { useState } from 'react'

export default function CallBackEvent() {

    const[text,setText]=useState('');

    const handleChange=(event)=>{
        setText(event.target.value)
    }

  return (
    <div>
        <MyInput onInputChange={handleChange}/>
        <p>{text}</p>

    </div>
  )
}


function MyInput(onInputChange){

    return(
        <input type='text' onChange={onInputChange}/>
    )
}
