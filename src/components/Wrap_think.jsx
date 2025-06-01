import React, { useEffect, useRef } from "react";

import Card_think from "./Card_think";
import Content_think from "./Content_think";


export default function Wrap_think(props) {
  const [index, setIndex] = React.useState(0);
  

  return (
    <div>
    <h1 className="bg-fourth-dark px-10 pb-2 pt-10 font-itim text-4xl text-fourth-light">
How i decide: A Thoughtful Approach to Decisions  </h1>
    <p className="bg-fourth-dark px-10 font-lusitana text-lg text-fourth-light">
      After all of that core, that would affect how I make decision. Here 's how I make decisions
      </p>
  <div className="flex  justify-around p-15 bg-fourth-dark"> 
    
    
        <div class="w-3/5 inline "> 
        <Content_think index={index} />
        </div>
  
        <div class="w-2/5 inline  "> 
        <Card_think index={index} setIndex={setIndex} />
        </div>
        

  </div>
  </div>
  );
}