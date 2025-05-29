import React, { useEffect, useRef } from "react";


export default function Core(props) {
  let core=props.core;
  const cores= new Map([
    ["Joyfull", "People always think, introvert are quite all the time. But it's not like that, at least for me.. I like to joke around, tease my friends (in a good way-maybe) and do random things. <br> Sure, I recharge through solitude and enjoy peaceful moments, but that doesn’t mean I’m always silent or reserved.<br>	I feel joy in life. For me, joy comes from within, so no matter what the situation is, as long as we can enjoy it, we will be filled with joy - that's my thought <br>	I believe that when we open ourselves up to small moments, embrace the present, and stay curious, we can find joy anywhere. Whether it's sharing a weird idea with a friend, laughing at a silly mistake, or simply enjoying a quiet walk, that inner sense of joy is what keeps me going. <br> It’s not about forcing happiness — it’s about appreciating the little things and letting that appreciation grow into something bright. That mindset helps me stay grounded, open-hearted, and excited about life, even when things get tough."],
    ["Thoughfull","I don’t jump into things blindly. Every decision I make passes through several mental filters — rationality, possibilities, impact, and alignment with my personal values. I always try to gather as much information as possible — including its potential impact, the requirements involved, and the core purpose — before making a decision.  That way, I can ensure I’m making the best choice with clarity and confidence.<br>	<b> For example, at the end of my third semester, I thoughtfully planned my activities for the fourth — including competitions and organizations.</b> <br>I listed out every possible combination I could take on: joining Competition A with Organization B, or maybe Competition B with Organization A, or even balancing multiple organizations.  For each combination, I considered what I wanted to achieve, the pros and cons of the decision, and most importantly — whether I would genuinely enjoy the experience. <br>	Even something as simple as choosing a note-taking app goes through that same thoughtful process. I compare features, weigh the pros and cons, and ask myself: <i>Will this help me stay organized in the long run? Will I actually enjoy using it?</i>"],
    ["Analytical", "I enjoy breaking down systems—whether it's code, workflows, or abstract ideas— to see how they work, then rebuild them in a better, more efficient way. Optimizing things brings me joy. It’s like solving a puzzle that actually improves real life.I'm also someone who loves to ask “why” behind everything. <br> Why does this work the way it does? Why do people act a certain way? Why can we do this, but not that? That curiosity keeps me digging deeper, questioning assumptions, and exploring alternatives. <br>This Character has been sharpening my critical thinking.  It helps me see problems from different angles, connect ideas across fields, and make thoughtful decisions."],
    ["Joseph's\nCore", "Joseph's cores are things that define, describe, and are attached to who i am. this section contains some of characteristics that dominate my personality. These characteristics doesn't show up only at particular moments, but grows with me on my daily basis. That's why, these characteristic affect how i behave. these characteristics are developed both naturally and by nurture. Every interaction i had with my surroundings helps me develop this character. and when those experience blend with my natural character, they form me"],
    ["Growth-\nOriented","I love feedback. Whether it's praise or constructive critique, I genuinely enjoy hearing how people perceive things. It helps me grow, and I see every comment as a new perspective worth considering. even tho, i some times feel so sad when get some deep critism"],
    ["Intimate", "I have a blue personality type, which means I'm someone who values depth, empathy, and meaningful connection. I'm not the kind of person who enjoys large crowds instead, I love building close relationships with a few people I truly connect with. I often need quiet time to recharge and reflect -- whether that’s watching movies, playing games, sleeping, or working on something I can do alone."],
  ]);
  const colors= new Map([
    ["Joyfull", "#FED363"],
    ["Thoughfull","#5189D3"],
    ["Analytical","#FE6B75"],
    ["Joseph's\nCore", "#FFF5E1"],
    ["Growth-\nOriented","#FF984D"],
    ["Intimate","#01BBB6"],
  ]);
  const text_color=
  new Map([
    ["Joyfull", 1],
    ["Thoughfull",1],
    ["Analytical",1],
    ["Joseph's\nCore",1],
    ["Growth-\nOriented",1],
    ["Intimate",1],
  ]);
  const coreDescription = cores.get(core);
  const color = colors.get(core);
  return (
    <div 
      className={`rounded-4xl h-full p-10 border-2 shadow-sm `}
        style={{ backgroundColor: color,    

         }}

    >
        <p class={`font-lusitana text-center text-3xl ${text_color.get(core) ? "text-black" : "text-[#EDEDED]"}`}>
        <b>{core}</b>
        </p>
        <p class={`font-lusitana text-center text-sm ${text_color.get(core) ? "text-black" : "text-[#EDEDED]"}`}>Core</p>
        <p class= {` font-lusitana text-justify mt-10 text-lg ${text_color.get(core) ? "text-black" : "text-[#EDEDED]"}`}
        dangerouslySetInnerHTML={{ __html: coreDescription }} >
   

        </p>

    </div>
  );
}