import { useState } from "react"
// import React,{useState} from "react"
import { TextField } from "@mui/material"
import Box from '@mui/material/Box';
import {Form,Button} from 'react-bootstrap';
// import AccessibilityIcon from '@mui/icons-material/Accessibility';

// import {useState} from "react"


function App() {
  
  // const [color , setColor] = useState("black")
  
// * function App(){
// const[color,setColor]= useState("Black")
// return(
// <div className="w-full h-screen duration-200" style{{background:color}}>
// <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
// <button onClick={()=> setColor("red")} style={{backgroundcolor:"white"}}> Red </button>
// )

// }




  return (






<Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
      />
      <TextField id="demo-helper-text-misaligned-no-helper" label="Name" />
    </Box>
    
//     <div className="w-full h-screen duration-200" style={{background: color}}> 
      
//    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//   {/* <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"></div> */}

// <button onClick={()=> setColor("brown")} style={{backgroundColor:"black"}}>Brown</button>

// <button onClick={()=> setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>

// <button onClick={()=> setColor("orange")} style={{backgroundColor:"olive"}} >Orange</button>
// {/* for golden */}

// <button onClick={()=> setColor("silver")} style={{backgroundColor:"olivedrab"}}> Golden</button>

//   {/* for red */}
// <button
// onClick={()=> setColor("red")}
// className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>RED</button>    

// {/* for yellow */}
// <button 
// onClick={()=> setColor("yellow")}
// className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>    
// {/* blue */}
// {/* className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" */}
// <button 
// onClick={()=>setColor("blue")}
// className="outline-none px-4 py-1 rounded-full text-red-600 shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>    

// {/* Green */}
// <button
// onClick={()=> setColor("green")}
// className="outline-none px-4 py-1 rounded-full text-green-800 shadow-lg" style={{backgroundColor:"green"}}>Green</button>   

// {/* <button onClick{()=> setColor("Purple")}className="outline-none px-4 py-1 rounded-full text-red-500 shadow-lg" style={{backgroundColor:"purple"}} > purple</button>*/}

//   </div>

//    </div>


  )
}
export default App