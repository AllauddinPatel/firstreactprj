

import React, { useRef , useState } from 'react'

export default function UseRefDemo() {
  


//   const textInput = useRef();

//   const focusTextInput = () => textInput.current.focus();

//   return (
//     <>
//       <input type="text" ref={textInput} />
//       <button onClick={focusTextInput}>Focus the text input</button>
//     </>
//   );

let [name, setName] = useState("Nate");

  let nameRef = useRef();

  const submitButton = () => {
    setName(nameRef.current.value);
  };

  return (
    <div className="App">
      <p>{name}</p>

      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );

}