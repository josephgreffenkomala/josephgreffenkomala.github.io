import React, { useState, useEffect, useRef } from "react";



export default function ImageSlider(props) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const timerRef = useRef();
    const images = props.images || [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+2",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+3",
    ];


  const changeImage = (direction) => {
    setFade(true);
    clearTimeout(timerRef.current); // reset timer saat tombol ditekan
    setTimeout(() => {
      setIndex((prev) =>
        direction === "next"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setFade(false);
    }, 300);
  };

  // Auto next setiap 10 detik
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      changeImage("next");
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [index]); // reset timer setiap index berubah

  return (
    <div className={`${props.className} relative object-cover flex items-center justify-center w-fit mx-auto`}>
      <img
        src={images[index]}
        alt="slider"
         className={`w-full h-full object-cover transition-opacity duration-300 rounded-4xl shadow-sm ${fade ? "opacity-0" : "opacity-100"}`}
      />
      {/* Prev Button */}
      <button
        onClick={() => changeImage("prev")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow transition"
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Next Button */}
      <button
        onClick={() => changeImage("next")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow transition"
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}