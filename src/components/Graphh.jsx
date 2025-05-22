import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network/standalone";

const graph = {
  nodes: [
    { id: 1, label: "Joseph's\nCore", color: "#F9ECDB", font: { size: 18, bold: true, color: '#000000', face: 'itim' }, shape: "box", borderWidth: 1, shadow: true },
    { id: 2, label: "Joyfull", color: "#FED363", font: { color: '#000000', bold: true,face: 'itim'  }, shadow: true },
    { id: 3, label: "Intimate", color: "#5189D3", font: { color: '#000000', bold: true,face: 'itim' }, shadow: true },
    { id: 4, label: "Analysis", color: "#FE6B75", font: { color: '#000000', bold: true, face: 'itim' }, shadow: true },
    { id: 5, label: "Growth-\nOriented", color: "#FF984D", font: { color: '#000000', bold: true,face: 'itim' }, shadow: true },
    { id: 6, label: "Think\nBefore Act", color: "#01BBB6", font: { color: '#000000', bold: true,face: 'itim' }, shadow: true },

  ],
  edges: [
    { from: 1, to: 2, width: 3 },
    { from: 1, to: 3, width: 3 },
    { from: 1, to: 4, width: 3 },
    { from: 1, to: 5, width: 3 },
    { from: 1, to: 6, width: 3 },
  ]
};;

const options = {
  height: "500px",
  
  
  autoResize: true,
  nodes: {
    shape: "box",
    borderWidth: 2,
    borderWidthSelected: 3,
    borderRadius: 10,
    shadow: true,
    font: {
      size: 16
    },
    margin: 10,
    heightConstraint: { minimum: 60 },
    widthConstraint: { minimum: 60 }
  },
  edges: {
    color: {
      color: "#000000",
      highlight: "#000000",
      hover: "#000000"
    },
    smooth: {
      forceDirection: "none"
    }
  },
  
 

};

export default function Graphh(props) {
  const containerRef = useRef(null);
  const networkRef = useRef(null);

  useEffect(() => {
    // Only create network when running in the browser and the DOM is ready
    if (typeof window !== 'undefined' && containerRef.current) {
      const network = new Network(containerRef.current, graph, options);
      networkRef.current = network;
      
      network.on("click", function (params) {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0];
          const nodeLabel = graph.nodes.find(node => node.id === nodeId).label;
          props.setCore(nodeLabel);
        }
      });
      
      // Clean up on unmount
      return () => {
        network.destroy();
      };
    }
  }, []);

  const handleFocusCentral = () => {
    if (networkRef.current) {
      networkRef.current.focus(1, {
        scale: 1.2,
        animation: {
          duration: 800, 
          easingFunction: 'easeInOutQuad'
        }
      });
    }
  };

  return (
    <div class="">
      <div 
        ref={containerRef} 
        class="rounded-4xl"
        style={{ height: "500px" ,


        }}
      />
      <div class="">
        
        <button
          onClick={handleFocusCentral}
          class = "bg-third-light hover:bg-third-dark font-bold py-2 px-4 rounded-full border-2 mt-4 font-lusitana"
        >
          Focus Me
        </button>
      </div>
      
    </div>
  );
}