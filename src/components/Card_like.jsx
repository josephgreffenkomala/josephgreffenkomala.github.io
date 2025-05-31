import React, { useEffect, useRef } from "react";

import Card_think from "./Card_think";
import Content_think from "./Content_think";


export default function Card_like(props) {
  
  
  


  return (
    <div className=" flex-none  w-[17em] justify-center rounded-xl hover:scale-105 transition ease-in-out duration-300 shadow-sm"
         >

        {/* <div className={`bg-${props.color} border-2 rounded-t-xl h-[20em] flex items-center justify-center`}>  
            <img src="cat.png" alt="Card Image" className=" object-cover rounded-t-xl" />
      
        </div> */}
        <div className={`bg-${props.color} border-2 rounded-t-xl h-[20em] flex items-center justify-center`}>  
            <img src={props.image} alt="Card Image" className=" object-cover rounded-t-xl transistion ease-in-out duration-300 blur-xs hover:blur-none" />
      
        </div>
        <div className={`bg-white border-b-2 border-x-2 rounded-b-xl h-[5em]`}> 
            <p className="text-center text-lg font-bold pt-2">{props.title}</p>
            <p className="text-center text-sm">{props.subtitle}</p>

        </div>
    </div>
  
);
}