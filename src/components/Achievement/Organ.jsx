import React, { useState } from "react";
import ImageSlider from "./Image_slider";

const orgData = {
  tsa: {
    name: "TSA (Tanoto Scholars Association)",
    desc: "Tanoto Scholars Association is a community of scholarship recipients committed to leadership, social contribution, and personal development.",
    items: [
      <><strong>Human Capital Staff</strong> — awarded <em>Best Staff</em></>,
      <><strong>PIF (Pay It Forward) 2023</strong> — Content Division Staff</>,
      <><strong>Sospro (Social Project)</strong> — Event Division Staff</>,
      <><strong>GELEX (Gelanggang Expo)</strong> — Decoration Division Staff</>,
    ],
    images: [
      "hc (1).jpg",
      "hc (2).jpg",
      "hc (3).jpg",


    ],
  },
  oti: {
    name: "Omah TI",
    desc: "Omah TI is a student-led tech community dedicated to learning, collaboration, and innovation in the field of IT.",
    items: [
      <><strong>Skill Development Staff</strong> — Staff for technical skill-sharing events</>,
      <><strong>OLC (Omah TI Learning Class)</strong> — Event Coordinator</>,
      <><strong>OEMOEM</strong> — Event Staff</>,
    ],
    images: [
      "oti (1).jpg",
      "oti (2).jpeg",
      

    ],
  },
  pmk: {
    name: "PMK",
    desc: "PMK is a spiritual community on campus that emphasizes faith, fellowship, and servant leadership.",
    items: [
      <><strong>HR Division</strong> — Internal team support</>,
      <><strong>Welcome Party</strong> — Public Relations & Publication Staff</>,
      <><strong>Easter Celebration</strong> — Public Relations & Publication Staff</>,
      <><strong>Christmas 2023</strong> — Social Contribution Division Staff</>,
      <><strong>Christmas 2024</strong> — Vice Chief Executive</>,
    ],
    images: [
      "pmk (1).jpg",
      "pmk (3).jpg",
      "pmk (2).JPG",
    ],
  },
};

export default function Organ() {
  const [selected, setSelected] = useState("pmk");
  const org = orgData[selected];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-4/7 w-full m-6 bg-fifth rounded-4xl p-6 shadow-sm border-2">
        <h1 className="font-itim text-3xl mb-4">Organizational Experience</h1>
        <div className="flex bg-fifth p-1 justify-around rounded-full border-2 w-full max-w-md mb-4">
          {Object.keys(orgData).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`font-itim px-4 py-2 rounded-full w-1/3 text-center transition ${
                selected === key
                  ? "bg-fifth-dark text-white scale-105"
                  : "bg-fifth hover:bg-fifth-dark hover:text-white"
              }`}
            >
              {orgData[key].name.split(" ")[0]}
            </button>
          ))}
        </div>
        <h2 className="font-itim text-xl mb-2">{org.name}</h2>
        <p className="mb-3">{org.desc}</p>
        <ul className="list-disc ml-6 space-y-1">
          {org.items.map((item, idx) => (
            <li key={idx} className="font-itim">{item}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-2/7 w-full m-6 flex items-center justify-center">
        <ImageSlider
          className="w-full h-full object-cover rounded-4xl shadow-sm"
          images={org.images}
        />
      </div>
    </div>
  );
}