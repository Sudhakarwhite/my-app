import React, { useCallback, useState } from "react";
import Component2 from "./Component2";



export const Component1=()=>{
    const [count,setCount] =useState(0)

    const handlechange=()=>{
        setCount((prev)=>prev+1)
    }
    return(
        <div>
       
        <Component2 handlechange={handlechange}/>
        </div>
    )
}