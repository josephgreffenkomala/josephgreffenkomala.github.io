import React, { useEffect, useRef, useState } from "react";

export default function Card_think(props) {
  // Add state to track whether the card is clicked
  const [isClicked, setIsClicked] = useState(false);

  // Handle click event
  const handleClick = () => {
    setIsClicked(true);
    
    // Reset the animation after it completes
    setTimeout(() => {
      props.setIndex((prevIndex) => (prevIndex + 1) % 3); // Update the index to the next card
      setIsClicked(false)
    }, 1000); // Adjust timing based on your animation duration
  };

  const header = new Map([
    [0, "Think\nBefore Act"],
    [2, "Struggles"],
    [1, "Benefits"]
  ]); 
  const content = new Map([
    [0, "this show how i always think before act"],
    [2, "setiap hal yang kita lakukan pasti ada struggle nya"],
    [1, "setiap hal yang kita lakukan pasti ada benefit nya"]
  ]);
  const cur = props.index;
  const left = (cur+2)%3;
  const right = (cur+1)%3;

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <div className={`border-2 bg-fourth w-[14em] h-[22em] rounded-2xl px-4 pt-15 transition scale-75 blur-sm ${isClicked ? 'motion-ease-in-out motion-translate-x-out-[18em]' : ''}`}>
            <p className="font-itim font-bold text-2xl text-center mt-10">{header.get(left)}</p>
            <p className="font-lusitana text-lg text-center mt-20">{content.get(left)}</p>
          </div>

          <div className={`border-2 bg-fourth w-[14em] h-[22em] rounded-2xl px-4 pt-15 mx-[-5em] transition ${isClicked ? 'motion-ease-in-out motion-scale-out-75 motion-blur-out-sm motion-translate-x-out-[-9em]' : 'z-10'} shadow-sm`}
          
          >
            <p className="font-itim font-bold text-2xl text-center mt-10">{header.get(cur)}</p>
            <p className="font-lusitana text-lg text-center mt-20">{content.get(cur)}</p>
          </div>

          <div className={`border-2 bg-fourth w-[14em] h-[22em] rounded-2xl px-4 pt-15 scale-75 blur-sm ${isClicked ? 'animate-zoom' : ''}`}>
            <p className="font-itim font-bold text-2xl text-center mt-10">{header.get(right)}</p>
            <p className="font-lusitana text-lg text-center mt-20">{content.get(right)}</p>
          </div>
        </div>
        
        <button
  className="px-3 py-1 w-28 bg-fourth-mid border-2 border-black mt-3 rounded-2xl font-lusitana font-bold text-md hover:bg-fourth hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
  onClick={handleClick}
>
  <span>Next</span>
  
</button>
      </div>
    </>
  );
}