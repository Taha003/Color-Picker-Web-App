import {React,useState} from 'react'
import rgbToHex from './RgbtoHex'
function SingleColour({rgb,weight,hex,type,index}) {
    let [msg,setMsg]=useState(false)//Copy to clipboard
    console.log(rgb)
    let myHexCol=rgbToHex(...rgb)
    // console.log(myHexCol)
    const copyToClipboard=(myHexCol)=>{
        setMsg(true)
        navigator.clipboard.writeText(myHexCol)
        setTimeout(()=>{
            setMsg(false)
        },2000)
    }
  return (
    <div className='border w-25' style={{padding:'20px',backgroundColor:`${myHexCol}`,color:index>4?'white':'black'}} onClick={()=>copyToClipboard(myHexCol)} >
         <h4>{weight}%</h4>   
         <p>{myHexCol}</p>
         <p>{type}</p>
         <p>{msg?'copied to clipboard':''}</p>
    </div>
  )
}

export default SingleColour