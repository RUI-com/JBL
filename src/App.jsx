
import './App.css'

//import Router .....
import Router from './Router/Router';
import { useEffect } from 'react';
export default function App() {
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/scroll.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/ShowScrollUp/ShowScrollUp.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/ActiveMenu/ActiveMenu.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/scrollreveal/scrollreveal.min.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/ScrollAnimation/ScrollAnimation.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  return (
    
   <>
   
   <Router/>
   </>
  )
}

