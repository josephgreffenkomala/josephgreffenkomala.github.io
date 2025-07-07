import React, { useEffect, useRef, useState } from "react";
import Card_other from "./Card_other";

export default function Wrap_other(props) {
  // Add state to track whether the card is clicked
  const [isClicked, setIsClicked] = useState(false);
    const [index, setIndex] = React.useState(0);
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
    // 0: { name: "Vania Sahda Annabelle", image: "joseph.jpg",content:"At first, I thought you were the quiet type and wouldn’t be that active in discussions. Maybe it’s because this is a new environment for you in Tribe 9, so you were still adjusting and observing how the group interacts. But honestly, I think you adapted really fast and observed things well. I could see that over time, you started to enjoy going with the flow of our conversations and discussions in the tribe.I didn’t realize at first that you actually like to throw in little jokes or funny comments when you talk. But after a few sessions, I noticed it—and I think that’s one of your unique traits. It makes people remember you when they talk to you, which is really cool.I also feel like you know how to read the room really well when it comes to humor. When things get serious, you can keep it serious. But when the mood feels a bit too heavy, you know how to ease it up with a quick joke or light comment—and that really helps make the discussion feel more fun and relaxed.And for my feedback, I just want to say that you don’t need to hold back or be afraid to show that side of you when talking or making friends with others. Like I said earlier, you already have a good sense of when to be serious and when to add a bit of humor. That’s actually a strength—it can be a powerful tool in social settings, and I believe it will also be one of your strengths when you enter the professional world, engage with society, and go through life after college.",title:"Assistant Guardian Angle" },
    // 1: { name: "Brandon Rafael Lovelyno",title:"Assistant Guardian Angel", image: "aldo.jpg",content:"- jago socialize via jokes (important) - punya potensi di tech (tinggal diasah peh) - susah fokus (sometimes we dont lack time peh, we lack focus) - easy going- cepat paham materi"},
  
    0: { name: "Emanuela Putri",title:"Manager of Human Capital TSA 2024", image: "john.jpg",content:"selama kita bekerja bareng aja ya, karena relasi kita lebih ke rekan kerja di divisi yaa, maksudku scr personal mungkin aku kurang bisa maksimal dlm kasih review hehe, i will let others give it aja utk personalmuu - a happy virus, menyebarkan positive vibes, cenderung *terlihat* happy (even if ternyata lagi sedih, capek, dll.), jadi aku gatau kamu lagi feel bad kalau kamu ga cerita ke kami. it's okay to not be okay loh yaa - a good listener (menghargai orang yg berbicara and actually listen) dan dapat memberikan feedback / tanggapan yg cukup berbobot dan sesuai konteks. tidak takut untuk berpendapat / salah dalam berpendapat ga menghalangimu utk kemudian berpendapat lagi juga, bisa membaca ruangan - a discipline and consistent person, kalau rapat ga telat (jika memang bisa), tugas dikerjakan tepat waktu (rarely terlewat), bahkan dipersiapkan dari jauh hari, juga di-crosscheck apakah yang dikerjakan sudah sesuai dg yg dibutuhkan, terbuka dg saran dan masukan utk memperbaiki pekerjaannya, dan hal ini dilakukan scr konsisten despite berbagai kesibukan yg juga diikuti (slh satu alasan utk best staff hehe *gpp ya ku spill. bisa jadi masukan jg utk kamu pertahankan - sopan, not that aku gila hormat as an older person tp as simple as aku merasa di-respect sama kamu, typingan maupun kata2mu IRL juga sopan (krn these days byk banget yg terlalu `santai` dan udah borderline ke gasopan huft) - have a good time management. udah di-mention sih tadi, kerjaan apik dan konsisten most of the time padahal banyak juga kesibukan lain (ga gabut2 banget, bahkan lomba kemana2, organisasi bbrp juga)"},   
    1: { name: "Enricko Wisnu Arkana",title:"Vice-Manager of Human Capital TSA 2024", image: "alice.jpg",content:"joseph adalah seorang yang tangguh dan punya mimpi besar. setiap langkah yang diambil selalu ia hargai dan selalu mengusahakan yang terbaik di setiap detailnya. kalau disuruh sekelompok sm joseph aku akan jadi orang pertama yang akan mengajukan diri karena joseph punya jiwa kepemimpinan yang besar hingga tubuhnya pun tidak mampu menyaingi besarnya semangat kepemimpinannya wkwkwk.  Pesenku, terus menjadi versi yang terbaik ya jos, ingat juga bahwa tidak semua apel harus kamu tangkap."},
  2: { name: "Canesha Louise Putri Yantati",title:"Lead Human Resource PMK MIPA 2024", image: "aldo.jpg",content:"Joseph orangnya baikk pol, sangaat perhatian & tanggung jawab juga. Pengalaman organisasi sama Joseph anaknyaa selalu punya inovasi yg baru dan ngga pernah ragu2 buat nyampeinnya. Sekalipun dia sibuk, gapernah ninggalin kerjaannyaa juga. Kerenn pol deh pokoknyaa, nice to know youu sephh!!"},
    3: { name: "Ken Bima Satria Gandasasmita",title:"CEO of OMAHTI 2025", image: "aldo.jpg",content:"JOSEPH IS GOATED! Some of his best attributes are:1. his ability to work in multiple fields! When I first met him, he had the skill in data science and AI, but he can integrate it with software development, and currently working in game development, he is as versatile as you could imagine 2. his soft management skills are also notable, as he already dealing with one of our organization's big events and manages to do it well, better than exceeding and outperforming some of his peers! 3. can't wait to work again with Joseph! he is also fun, soft-hearted, yet visionary and intelligent guy, being his peers In some project is a bless"},
  
    4: { name: "Fadhil Ibrahim",title:"My Funmate and Teammate", image: "bob.jpg",content:"Joseph adalah individu yang kritis dan penuh akan pertimbangan. Ia bisa menghabiskan banyak waktu untuk menentukan apa yang terbaik bagi dirinya. Ia juga merupakan pembelajar dengan rasa keingintahuan yang super tinggi dan sudut pandang yang unik. Ketika ia tertarik pada sesuatu, ia akan mencurahkan perhatiannya secara mendalam dan menyeluruh untuk memahami hal tersebut. Namun di sisi lain, terkadang ia bisa terjebak dalam pikirannya yang panjang dan berbelit belik karena terlalu lama mempertimbangkan sebuah keputusan."},
    5: { name: "Geraldine Angelie",title:"My Academic Lifesaver", image: "aldo.jpg",content:"you're a nice person, ga pelit ilmu, playful and likes to tease your friend a lot, tapi bukan yang in an offensive way and that makes you very approachable. you're also easy to talk to, yang bisa diliat dari how kating and adting seems to talk easily to you. overall lu orang yang gacor sih"},
    // 8: { name: "Novianti Kusuma Dewi",title:"Chief Executive of \"Topi\"", image: "aldo.jpg",content:"Cair bgt, seruu, sok asik wkwkw, kreatif, totalitas"},
    // 9: { name: "Izzet Eddin",title:"My Partner in HC", image: "aldo.jpg",content:"I honestly thought he was a total nerd, with glasses, anime-obsessed, the type you just know is from the Faculty of Science, majoring in Computer Science. I wasn’t even surprised when I found out he was. But after knowing him for over a year, and especially after we once partnered up as Katsa (kawan TSA) from Human Capital last year, I got to see the real him. Total plot twist. Turns out he’s way more of a feeler (F) than the thinker (T) I expected. He’s super in tune with emotions, even tho his thoughts can get kinda wild sometimes."},
    6: { name: "Lisa Olivia Putri Maharani",title:"Multi-threaded Partner", image: "aldo.jpg",content:"kamu temen yang baik banget!! penuh consideration ke temen kamu. aku rasa temen-temenmu gapernah merasa ga nyaman di sekitarmu, bahkan ketika kamu marah. kamu bikin ambience yang bagus dengan orang-orang di sekitarmu. kamu peduli sama orang lain juga."},
    
  }
  
  const num =7; // Total number of cards

  const cur = index;
  const left = (cur+num-1)%num;
  const right = (cur+1)%num;
  const right2 = (cur+2)%num;
  const leftData = data[left] || { name: "Unknown", image: "default.jpg", content: "", title: "" };
  const rightData = data[right] || { name: "Unknown", image: "default.jpg", content: "", title: "" };
  const curData = data[cur] || { name: "Unknown", image: "default.jpg", content: "", title: "" };

  return (
    <div className="bg-fourth-light mt-10 min-h-screen p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-itim text-center">Meet My Friends</h1>
      <p className="text-base sm:text-lg md:text-xl mb-4 font-lusitana text-center px-4">
        Wanna hear what other people think about me?  </p>
      <div className="p-2 sm:p-4 md:p-5 flex left-1/3 item-left w-full justify-center overflow-hidden relative">
        <Card_other className={` w-[10rem] sm:w-[16rem] md:w-[20rem] blur-sm scale-50 sm:scale-75 shadow-sm translate-x-[4em] sm:translate-x-[8em] md:translate-x-[10em] `} index={left} name={leftData.name} image="joseph.jpg"  />
        <Card_other className={` w-[16rem] sm:w-[30rem] md:w-[40rem] shadow-sm ${isClicked ? 'animate-left-lg' : 'z-10'} mx-2 sm:mx-0`} index={cur} name={curData.name} image="joseph.jpg" content={curData.content} title={curData.title}/>
        <Card_other className={` w-[10rem] sm:w-[16rem] md:w-[20rem] shadow-sm blur-sm scale-50 sm:scale-75 translate-x-[-4em] sm:translate-x-[-8em] md:translate-x-[-10em] z-1 ${isClicked ? 'animate-zoom-lg' : ''} `} index={right} name={rightData.name} image="joseph.jpg" />
        <Card_other className={` shadow-sm z-0 w-[10rem] sm:w-[16rem] md:w-[20rem] absolute blur-sm scale-50 sm:scale-75 translate-x-[20em] sm:translate-x-[40em] md:translate-x-[50em]`} index={right2} name={cur} image="joseph.jpg"/>
        
        </div>
        <button
  className="px-3 py-1 w-20 sm:w-24 md:w-28 bg-fourth-mid border-2 border-black mt-3 rounded-2xl font-lusitana font-bold text-sm sm:text-md hover:bg-fourth hover:scale-105 hover:shadow-xs transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
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