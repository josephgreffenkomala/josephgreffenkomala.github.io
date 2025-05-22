import React, { useEffect, useRef } from "react";
import Graphh from "./Graphh";
import Core from "./Core";


export default function Wrap(props) {
  const [core, setCore] = React.useState("Joseph's\nCore");
  return (
    <div class="flex px-10 my-15 gap-10 ">
        <div class="w-1/2 inline">
            <Graphh setCore={setCore} />
        </div>
        <div class="w-1/2">
             <Core core={core} />
        </div>
       
    </div>
  );
}