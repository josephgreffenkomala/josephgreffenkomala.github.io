import React, { useEffect, useRef } from "react";

import Card_think from "./Card_think";
import Content_think from "./Content_think";


export default function Card_like(props) {
  
  let ans=0;
  for(let i = 0; i < 10; i++){
    ans+=(i*i+4*(i+1)*(i+1)+(i+2)*(1+2))/2
  }
  


  return (
    <div className=" flex-none  w-[17em] justify-center rounded-xl hover:scale-105 transition ease-in-out duration-300"
         style={{    
          boxShadow: '6px 9px 4px rgba(0, 0, 0, 0.7)'

         }}
         >

        <div className={`bg-third border-2 rounded-t-xl h-[20em]`}> 
            

        </div>
        <div className={`bg-white border-b-2 border-x-2 rounded-b-xl h-[5em]`}> 
            

        </div>
    </div>
  
);
}