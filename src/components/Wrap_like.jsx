import React, { useEffect, useRef } from "react";

import Card_like from "./Card_like";

export default function Wrap_think(props) {
  return (
    <div className="py-[5em] pl-[5em] bg-[#E3DAC8] flex mt-19 "> 
      <div className="w-1/4  mb-4 pt-[7em] ">
        <p className="font-itim font-bold text-4xl">Things i <br></br>like to do</p>
      </div>
      <div className="flex overflow-auto gap-10 ml-10 scroll-smooth">
        <Card_like/>
        <Card_like/>
        <Card_like/>
      </div>
    </div>
  );
}


//  <ul className="flex overflow-y-auto gap-4">
//         <li className="flex-none w-[20em] h-[20em] border-2 bg-third"></li>
//         <li className="flex-none w-[20em] h-[20em] border-2 bg-third"></li>
//         <li className="flex-none w-[20em] h-[20em] border-2 bg-third"></li>
//         <li className="flex-none w-[20em] h-[20em] border-2 bg-third"></li>
//         <li className="flex-none w-[20em] h-[20em] border-2 bg-third"></li>
//         <li className="flex-none w-[20em] h-[20em] border-2 bg-third"></li>

//       </ul>