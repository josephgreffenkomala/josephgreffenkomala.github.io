import React, { useEffect, useRef } from "react";

import Card_think from "./Card_think";
import Content_think from "./Content_think";


export default function Card_like(props) {
  
  

  return (
    <div className={`h-[30rem] border-2 rounded-3xl shadow-sm bg-sixth p-10${props.className} ` }>
        <div className="flex ">

            <div className=" mr-4">
            <img src={props.image} className="rounded-full w-25 mb-4" />
            </div>
            <div className="text-left">
                <p className="truncate font-itim text-3xl">{props.name}</p>
                <p className="truncate font-lusitana text-lg">{props.title}</p>
            </div>
            
        </div>

        <div className="flex mt-4 font-lusitana text-lg text-justify scroll-smooth overflow-auto max-h-[18rem] pr-4
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
">
            <p className="w-full"> {props.content}</p>

        </div>
    </div>
);
}