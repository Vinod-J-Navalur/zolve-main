import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import { ToastContainer, toast } from 'react-toastify';
//import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Page1 from './Page1';
import { Link } from 'react-router-dom';
function Page2() {

    
 
    

  const inputRef = useRef(null);

  const notify = (msg) => toast(`"${msg}" Copied Successfully !`);

  function handleClick(){
    inputRef.current.select();
    const val = inputRef.current.value
    console.log(val.length)

    if(val.length < 1){
      toast("Oops Input Box is Empty")
    }else{
      document.execCommand('copy');
      notify(val)
    }

    // function move(){
    //     <Page1></Page1>
    // }
    
  }
  return (
    <div >
      <div>
       
        <a href="https://zolve.com/" target="_blank">
          <img src="/zolve.png" className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Zolve Task 2</h1>
      <div className="card">
        <input ref={inputRef} defaultValue={window.location.search.slice(3,)} type="text"/>
        <button className='--button' onClick={handleClick}>
          Copy to clip
        </button>
        <p>
         Type 'q=(text)' at the End of URL or Just type in the input box above
        </p>
      </div>
      <p className="read-the-docs">
      This website is part of Zolve internship challenge
      </p>
      <br/> <Link to='/page1'>{}Page 1</Link><Link to='/page3'>{', '}Page 3</Link>
      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    </div>
  )
}

export default Page2
