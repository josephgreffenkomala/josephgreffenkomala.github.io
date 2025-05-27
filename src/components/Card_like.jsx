import React, { useEffect, useRef } from "react";

import Card_think from "./Card_think";
import Content_think from "./Content_think";


export default function Card_like(props) {
  
  
  


  return (
    <div className=" flex-none  w-[17em] justify-center rounded-xl hover:scale-105 transition ease-in-out duration-300 shadow-sm"
         >

        <div className={`bg-${props.color} border-2 rounded-t-xl h-[20em]`}> 
            
      
        </div>
        <div className={`bg-white border-b-2 border-x-2 rounded-b-xl h-[5em]`}> 
            

        </div>
    </div>
  
);
}