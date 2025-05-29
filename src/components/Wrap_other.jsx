import React, { useEffect, useRef, useState } from "react";
import Card_other from "./Card_other";

export default function Wrap_other(props) {
  // Add state to track whether the card is clicked
  const [isClicked, setIsClicked] = useState(false);
    const [index, setIndex] = React.useState(0);
    const num = 10; // Total number of cards
  // Handle click event
  const handleClick = () => {
    setIsClicked(true);
    
    // Reset the animation after it completes
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % num); // Update the index to the next card
      setIsClicked(false)
    }, 1000); // Adjust timing based on your animation duration
  };
  const data={
    0: { name: "kavania", image: "joseph.jpg",content:"At first, I thought you were the quiet type and wouldn’t be that active in discussions. Maybe it’s because this is a new environment for you in Tribe 9, so you were still adjusting and observing how the group interacts. But honestly, I think you adapted really fast and observed things well. I could see that over time, you started to enjoy going with the flow of our conversations and discussions in the tribe.I didn’t realize at first that you actually like to throw in little jokes or funny comments when you talk. But after a few sessions, I noticed it—and I think that’s one of your unique traits. It makes people remember you when they talk to you, which is really cool.I also feel like you know how to read the room really well when it comes to humor. When things get serious, you can keep it serious. But when the mood feels a bit too heavy, you know how to ease it up with a quick joke or light comment—and that really helps make the discussion feel more fun and relaxed.And for my feedback, I just want to say that you don’t need to hold back or be afraid to show that side of you when talking or making friends with others. Like I said earlier, you already have a good sense of when to be serious and when to add a bit of humor. That’s actually a strength—it can be a powerful tool in social settings, and I believe it will also be one of your strengths when you enter the professional world, engage with society, and go through life after college.",title:"Asistant Guardian Angle" },
    1: { name: "fadhil", image: "john.jpg",content:"kamu temen yang baik banget!! penuh consideration ke temen kamu. aku rasa temen-temenmu gapernah merasa ga nyaman di sekitarmu, bahkan ketika kamu marah. kamu bikin ambience yang bagus dengan orang-orang di sekitarmu. kamu peduli sama orang lain juga.",title:"" },
    2: { name: "Jane", image: "jane.jpg",content:"",title:"" }, 
    3: { name: "Alice", image: "alice.jpg",content:"",title:"" },
    4: { name: "Bob", image: "bob.jpg",content:"",title:"" },
  }
  

  const cur = index;
  const left = (cur+num-1)%num;
  const right = (cur+1)%num;
  const leftData = data[left] || { name: "Unknown", image: "default.jpg", content: "", title: "" };
  const rightData = data[right] || { name: "Unknown", image: "default.jpg", content: "", title: "" };
  const curData = data[cur] || { name: "Unknown", image: "default.jpg", content: "", title: "" };

  return (
    <div className="bg-fourth-light flex flex-col items-center justify-center h-screen">
      <div className="flex left-1/3 item-left overflow-auto w-full">
        <Card_other className={` w-[20rem] blur-sm scale-75 translate-x-[10em] `} name={cur} image="joseph.jpg"  />
        <Card_other className={` w-[40rem]  ${isClicked ? 'animate-left-lg' : 'z-10'} : ''}`} name={curData.name} image="joseph.jpg" content={curData.content}/>
        <Card_other className={` w-[20rem] blur-sm scale-75 translate-x-[-10em] z-1 ${isClicked ? 'animate-zoom-lg' : ''} `} name={cur} image="joseph.jpg" />
        <Card_other className={` right-2 z-0 w-[20rem] blur-sm scale-75 translate-x-[-10em] absolute`} name={cur} image="joseph.jpg"/>
        
        </div>
        <button
  className="px-3 py-1 w-28 bg-fourth-mid border-2 border-black mt-3 rounded-2xl font-lusitana font-bold text-md hover:bg-fourth hover:scale-105 hover:shadow-xs transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
  onClick={handleClick}
>
  <span>Next</span>
  
</button>
      
    </div>
  );
}


// import React, { useEffect, useRef, useState } from "react";
// import Card_other from "./Card_other";

// export default function Wrap_other(props) {
//   // Add state to track whether the card is clicked
//   const [isClicked, setIsClicked] = useState(false);
//     const [index, setIndex] = React.useState(0);
//     const num = 10; // Total number of cards
//   // Handle click event
//   const handleClick = () => {
//     setIsClicked(true);
    
//     // Reset the animation after it completes
//     setTimeout(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % num); // Update the index to the next card
//       setIsClicked(false)
//     }, 1000); // Adjust timing based on your animation duration
//   };
  

//   const cur = index;
//   const left = (cur+num-1)%num;
//   const right = (cur+1)%num;

//   return (
//     <>
//       <div className="flex border-2 left-1/3 item-left overflow-auto w-full">
//         <Card_other className={` w-[40rem] blur-sm scale-75 translate-x-[10em] `} name={cur} image="joseph.jpg"  />
//         <Card_other className={` w-[40rem] flex-none  ${isClicked ? 'motion-ease-in-out motion-scale-out-75 motion-blur-out-sm motion-translate-x-out-[-1em]' : 'z-10'} : ''}`} name={cur} image="joseph.jpg"/>
//         <Card_other className={` w-[40rem] blur-sm scale-75 translate-x-[-10em] z-1 ${isClicked ? 'animate-zoom-lg' : ''} `} name={cur} image="joseph.jpg" />
//         <Card_other className={` right-2 z-0 w-[20rem] blur-sm scale-75 translate-x-[-10em] absolute`} name={cur} image="joseph.jpg"/>
        
//         </div>
//         <button
//   className="px-3 py-1 w-28 bg-fourth-mid border-2 border-black mt-3 rounded-2xl font-lusitana font-bold text-md hover:bg-fourth hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
//   onClick={handleClick}
// >
//   <span>Next</span>
  
// </button>
      
//     </>
//   );
// }