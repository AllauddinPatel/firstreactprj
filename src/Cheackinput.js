import React from "react";
// function Cheackinput(){

//     const[firstname , setfirstname]=React.useState('');

//     const handleChange=(e)=>{
//         setfirstname(e.target.value)
//     }

//     return(
//         <div>
//             <input type='text' name="firstname" id="event" onClick={handleChange} />
//             <button onSubmit={e => handleChange(e)}>Click Me</button>
//             <p>Value is:{firstname}</p>
//         </div>
//     )
// }



class Cheackinput extends React.Component{

constructor(){
    super()
    this.state={
        firstName:''
    }
}

handleChange=(event)=>{
    this.setState({firstName:event.target.value})
}

render(){
    return(
                 <div>
                     <input type='text' name="firstName"  onChange={this.handleChange} value={this.state.firstName} />
                    
                     <p>Value is:{this.state.firstName}</p>
                 </div>
            )
}
}





export default Cheackinput