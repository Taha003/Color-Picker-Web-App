import React, { useState,useEffect } from 'react';
import Values from 'values.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleColour from './SingleColour';
import Row from 'react-bootstrap/Row'


function App() {
  let [color,setColor]=useState();
  let [list,setList]=useState(new Values('#ff2500').all(10))
  let [error,setError]=useState(false)
  
  const onHandleSubmit=(e)=>{
    e.preventDefault()
    // console.log('color app')
    try{
    const mycolor=new Values(color).all(10)
    setList(mycolor)

    }catch(error){
      setError(true)
      setTimeout(()=>{
        setError(false)
      },2000)
    }
  }
  // useEffect(()=>{
  //   onHandleSubmit()
  // },[])
  return (
    <>
     <h3 className='mx-1'><span className='text-primary'>C</span>OLOR <span className='text-warning'>P</span>ICKER</h3>
     <form onSubmit={onHandleSubmit} className='mx-1'>
      <input type='text' value={color} placeholder='#ff2500' onChange={(e)=>setColor(e.target.value)} style={{border:error?'1px solid red':'1px solid black'}}/>
      <button type='submit' onClick={onHandleSubmit} className='bg-warning'>Generate</button>
     </form>
     <div className='d-flex flex-wrap my-2'>
      {list.map((mycol,index)=>{
        return <SingleColour key={index} {...mycol} index={index} className=''/>
      })}
   
     </div>
    </>
  );
}

export default App;
