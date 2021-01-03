import "./index.scss";

import React,{useState} from "react";
/* bg --> black|white|teal */

function SquareButton({variant = "black", direction, ...p}) {
  
  function VariantHandler() {
    let pack = {};
    if(variant === "black"){
      pack = {
        bg: "#383838",
        arrowColor: "#e4e4e4",
      }
    }
    else if(variant === "white"){
      pack = {
        bg: "#e4e4e4",
        arrowColor: "#00a99d",

      }
    }
    else if(variant === "teal"){
       pack = {
        bg: "#00a99d",
        arrowColor: "#e4e4e4",

       }
    }
    return pack;
  }

  function DirectionHandler() {
    let arrowDiv = "arrow"
    
    if (direction === "right") {
       arrowDiv = "arrow arrow--right"
    }

    else if(direction=== "left") {
       arrowDiv = "arrow arrow--left"
    }

    return arrowDiv;
  }

  const [arrow] = useState(DirectionHandler())
  const [pack] = useState(VariantHandler())

  return (
    <div className="arrow-wrapper bg-light-black " style={{ backgroundColor: pack.bg }} {...p} >
      <div className="arrow-contain">
      <div className={arrow}  style={{ borderTop:`0.6rem solid ${pack.arrowColor}` }} ></div>
      </div>
    </div>
  );
}

export default SquareButton;
