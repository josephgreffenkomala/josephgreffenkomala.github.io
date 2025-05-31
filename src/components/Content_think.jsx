import React, { useEffect, useRef } from "react";


export default function Content_think(props) {

    const header= new Map([
    [0, "Think\nBefore Act"],
    [2, "What could go wrong?"],
    [1, "Then what's good?"]
  ]); 
  const content= new Map([
    [0, "Just like I mentioned before, I’m a thoughtful person and I want to highlight this because it really shapes how I make decisions —After all life is about series of taking decision right?. <br>I make decisions with a lot of careful consideration, because I genuinely want to choose the best possible decision. For me, decision-making is like a chain, each choice influences the next. That’s why I treat it seriously, even when it seems like a small decision. <br>But… does that mean I <i>always</i> make the best choice? <b>Actually, no.</b> Sometimes, I still end up making the wrong one. When that happens, I don’t beat myself up about it.  Even if the outcome isn’t ideal, I know I made that decision with the best of intentions and the best version of myself at the time.  <br>This mindset also makes me someone who almost <i>always</i> plans things out. Like i mention it before, Before I do something, I like to map it out first — thinking through what needs to be done, what I want to achieve, and how to get there.  So i can give my best."],
    [1, "Because I tend to think things through carefully, I make sure to gather as much relevant information as possible, look for patterns or benefit, and use them to guide my choices. That’s why every decision I make tends to be <i>data-informed</i> <br>When I’m gathering information, understanding the <i>why</i> behind everything is also one of my main goals. It helps me see what’s really going on and why it's happening. This also where  my \"analytical core\"  comes into play-driven by the curiosity. That curiosity also makes me more adaptive , because when I understand the cause, I can respond better and choose the best decisions. Even when something unexpected happens, I can usually figure out what’s different and where it came from, so I know how to adjust."],
    [2, "Sometimes, I get really focused on a small piece of data. I can spend hours just looking at one part, trying to find as many insights as possible. But that’s not always a good thing. When I focus too much on the details, I sometimes miss the bigger picture — kind of like <i>overfitting</i>. So now, I try to remind myself to zoom out and see things more clearly.<br>Also, because I put so much thought into things, I tend to take more time than others. Not because I’m slow, but because I want to make sure I’m thorough and fair in how I approach things. Quality over speed, you know? Though I’m learning when to say “okay, this is good enough” and move on. <br> <br>  <i>note: Overfitting is a term in Artificial Intelligence that describes an AI learning patterns too specifically — so specific that it can’t be applied to new or general situations. That’s why it’s usually considered a bad thing </i>"]
  ]);
  const cur=props.index;
  const title=header.get(cur);
  const contentText=content.get(cur);

  
  return (<div 
      className={`rounded-4xl h-full p-5 border-2 bg-fourth-mid shadow-sm-left`}

    >
        <p class="font-itim text-center text-3xl" 
           dangerouslySetInnerHTML={{ __html: title}}>

        
          
        </p>
        <p class="font-lusitana text-justify mt-10 text-lg   "
                   dangerouslySetInnerHTML={{ __html: contentText }}>

        
  
        </p>
        

    </div>
     );
}