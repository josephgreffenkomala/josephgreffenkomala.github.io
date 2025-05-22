import React, { useEffect, useRef } from "react";

import Card_think from "./Card_think";
import Content_think from "./Content_think";


export default function Wrap_think(props) {
  const [index, setIndex] = React.useState(0);
  

  return (
  <div className="flex  justify-around p-15 bg-fourth-light"> 
    
    
        <div class="w-1/2 inline "> 
        <Content_think index={index} />
        </div>
  
        
        <Card_think index={index} setIndex={setIndex} />

  </div>
  );
}