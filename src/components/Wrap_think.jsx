import React, { useEffect, useRef } from "react";

import Card_think from "./Card_think";
import Content_think from "./Content_think";


export default function Wrap_think(props) {
  const [index, setIndex] = React.useState(0);
  

  return (
  <div className="flex  justify-around p-15 bg-fourth-dark"> 
    
    
        <div class="w-3/5 inline "> 
        <Content_think index={index} />
        </div>
  
        <div class="w-2/5 inline  "> 
        <Card_think index={index} setIndex={setIndex} />
        </div>
        

  </div>
  );
}