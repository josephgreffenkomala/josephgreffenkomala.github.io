import React, { useEffect, useRef } from "react";


export default function Content_think(props) {

    const header= new Map([
    [0, "Think\nBefore Act"],
    [1, "Struggles"],
    [2, "Benefits"]
  ]); 
  const content= new Map([
    [0, "this show how i always think before act"],
    [1, "Sometimes, I get _too focused on one tiny piece of data_. Like, hyperfocused. I can spend hours analyzing a small subset, trying to squeeze every bit of insight from it... only to realize, 'Oops—maybe I should’ve zoomed out earlier' .Also, because I put so much thought into things, I tend to take more time than others. Not because I’m slow, but because I want to make sure I’m thorough and fair in how I approach things. Quality over speed, you know? Though I’m learning when to say “good enough” and move on."],
    [2, "setiap hal yang kita lakukan pasti ada benefit nya"]
  ]);
  const cur=props.index;
  
  return (<div 
      className={`rounded-4xl h-full p-5 border-2 bg-fourth-mid`}
        style={{    
          boxShadow: '-10px 11px 7px rgba(0, 0, 0, 0.7)'

         }}

    >
        <p class="font-itim text-center text-3xl">
        <b>{header.get(cur)}</b>
        </p>
        <p class="font-lusitana text-justify mt-10 text-lg   ">
        {content.get(cur)}
        </p>

    </div>
     );
}