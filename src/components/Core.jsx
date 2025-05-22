import React, { useEffect, useRef } from "react";


export default function Core(props) {
  let core=props.core;
  const cores= new Map([
    ["Joyfull", " people always think, introvert are quite all the time. But it's not like that, at least for me.. I like to joke around, tease my friends (in a good way-maybe) and do random things. Sure, I recharge through solitude and enjoy peaceful moments, but that doesn’t mean I’m always silent or reserved.I feel joy in life. For me, joy comes from within, so no matter what the situation is, as long as we can enjoy it, we will be filled with joy - that's my thoughtI believe that when we open ourselves up to small moments, embrace the present, and stay curious, we can find joy anywhere. Whether it's sharing a weird idea with a friend, laughing at a silly mistake, or simply enjoying a quiet walk, that inner sense of joy is what keeps me going.It’s not about forcing happiness — it’s about appreciating the little things and letting that appreciation grow into something bright. That mindset helps me stay grounded, open-hearted, and excited about life, even when things get tough."],
    ["Intimate","I have a _blue personality type_, which means I'm someone who values depth, empathy, and meaningful connection. I'm not the kind of person who enjoys large crowds or shallow conversations—instead, I love building close relationships with a few people I truly connect with."],
    ["Analysis", "I enjoy breaking down systems—be it code, workflows, or abstract ideas—to see how they work, then rebuild them in a better, more efficient way. Optimizing things brings me joy. It’s like solving a puzzle that actually improves real life."],
    ["Joseph's\nCore", "Joseph's cores are things that define, describe, and are attached to who i am. this section contains some of characteristics that dominate my personality. These characteristics doesn't show up only at particular moments, but grows with me on my daily basis. That's why, these characteristic affect how i behave. these characteristics are developed both naturally and by nurture. Every interaction i had with my surroundings helps me develop this character. and when those experience blend with my natural character, they form me"],
    ["Growth-\nOriented","I _love feedback_—seriously. Whether it's praise or constructive critique, I genuinely enjoy hearing how people perceive things. It helps me grow, and I see every comment as a new perspective worth considering. even tho, i some times feel so sad when get some deep critism"],
    ["Think\nBefore Act", "I don't jump into things blindly. Every decision I make goes through several mental filters—rationality, possibilities, impact, and how it aligns with what I value. This “penuh pertimbangan” side of me means I’m rarely *impulsive*. The upside? When I commit to something, it’s with full intention and clarity. The downside? Maybe I take a little longer to decide where to eat lunch (oops)."],
  ]);
  const colors= new Map([
    ["Joyfull", "#FED363"],
    ["Intimate","#5189D3"],
    ["Analysis","#FE6B75"],
    ["Joseph's\nCore", "#FFF5E1"],
    ["Growth-\nOriented","#FF984D"],
    ["Think\nBefore Act","#01BBB6"],
  ]);
  const coreDescription = cores.get(core);
  const color = colors.get(core);
  return (
    <div 
      className={`rounded-4xl h-full p-20 border-2`}
        style={{ backgroundColor: color,    
          boxShadow: '10px 11px 7px rgba(0, 0, 0, 0.7)'

         }}

    >
        <p class="font-lusitana text-center text-4xl">
        <b>{core}</b>
        </p>
        <p class="font-lusitana text-justify mt-20 text-xl">
   
        {coreDescription}
        </p>

    </div>
  );
}