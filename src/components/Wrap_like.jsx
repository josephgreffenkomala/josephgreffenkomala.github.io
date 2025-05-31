import React, { useEffect, useRef } from "react";

import Card_like from "./Card_like";

export default function Wrap_think(props) {
  return (
    <div className="pb-[3em] pt-[5em] pl-[5em] bg-fifth-light flex mt-15 "> 
      <div className="w-1/4  mb-4 pt-[7em] ">
        <p className="font-itim font-bold text-4xl">Things i <br></br>like to do</p>
        <p className="font-lusituna text-lg mt-2">I love to do these things in my free time to recharge my energy and get rest from the work </p>
      </div>
      
      <div className="flex pt-14 pb-5 px-14 overflow-auto gap-10 ml-10 scroll-smooth 
      [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
      
      ">
<div className="z-20 absolute h-[25em] translate-x-[-3.4rem] w-10 scale-115 bg-gradient-to-r from-fifth-light to-transparent"></div>
        <Card_like image="puzzle.png" color="fifth" title="Puzzle" subtitle="I love play Jigsaw Puzzle"/>
        <Card_like image="game.png" color="sixth" title="Video Game" subtitle="I play Valorant, Genshin Impact, and some mobile games"/>
        <Card_like image="origami.png" color="second" title="Origami" subtitle="I enjoy creating origami animals and flowers—"/>
        <Card_like image="jalan.png" color="third" title="walking" subtitle=" "/>

          
<div className="absolute h-[25em] right-0 w-10 bg-gradient-to-l from-fifth-light to-transparent scale-115"></div>

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