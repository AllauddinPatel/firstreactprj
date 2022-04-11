import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import Cheackinput from './Cheackinput';
import Input from './Input';
import Classdemo from './Classdemo';
import Componenetclass from './Componenetclass';
import Useeffectdemo from './Useeffectdemo';
import PropsDemo from './PropsDemo';
import CallBackEvent from './CallBackEvent';
import UseMemoDemo from './UseMemoDemo';
import UseRefDemo from './UseRefDemo';
import UseCallBack from './UseCallBack';

// const element = <p>This is paragraph.</p>
function Abc(){
  return(
    <div>
      
      {/* <Componenetclass/>  */}
      {/* <Useeffectdemo/> */}
      {/* <CallBackEvent/> */}
      {/* <App/> */}
      {/* <UseMemoDemo/> */}
      {/* <UseRefDemo/> */}
      <UseCallBack/>
      

    </div>
  )
}  



ReactDOM.render(
<div>
 
  <Abc/>
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
