import React, { useEffect, useRef } from "react";



export default function Card_like(props) {
  
  const warna= new Map([
    [0,"bg-sixth"],
    [1,"bg-first"],
    [2,"bg-second"],
    [3,"bg-third"],
    [4,"bg-fourth"],
    [5,"bg-fifth"],
    [6,"bg-sixth"],
    [7,"bg-first"],
    [8,"bg-second"],
    [9,"bg-third"],
    [10,"bg-fourth"],
    [11,"bg-fifth"],
    [12,"bg-sixth"],
  
  ]);
//   const bg= warna.get(props.index);
  return (
    <div className={`h-[18rem] sm:h-[25rem] md:h-[30rem] border-2 rounded-3xl ${warna.get(props.index)} p-3 sm:p-6 md:p-10 ${props.className}`}>
        <div className="flex justify-center flex-col items-center ">

            {/* <div className=" mr-4">
            <img src={props.image} className="rounded-full w-25 mb-4" />
            </div> */}
            <div className="text-center">
                <p className="font-itim text-lg sm:text-2xl md:text-3xl">{props.name}</p>
                <p className="font-lusitana text-xs sm:text-base md:text-lg">{props.title}</p>
            </div>
            
        </div>

        <div className="flex mt-2 sm:mt-3 md:mt-4 font-lusitana text-xs sm:text-base md:text-lg text-justify scroll-smooth overflow-auto max-h-[8rem] sm:max-h-[14rem] md:max-h-[18rem] pr-2 sm:pr-3 md:pr-4
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
">
            <p className="w-full" set:html={props.content} > {props.content}</p>

        </div>
    </div>
);
}