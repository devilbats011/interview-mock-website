import "./index.scss";
import Logo1 from "./../../assets/logos/logo-1.jpg";

import React from "react";

function Slide() {
  return (
    <div className=" flex flex-row justify-center items-center text-center relative gap-2">
      <div className="h-8 p-3 py-4 rounded raleway-extrabold inline-block bg-white" > <p className="relative" style={{top:'-13px'}}>{" < "}</p> </div>
      <div className="relative flex flex-row justify-center items-center text-center overflow-x-hidden w-12/12 gap-8">
        <img src={Logo1} alt={"logo"} className="h-30  slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30  slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30  slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30 slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30 slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30 slide-img" />
      </div>
      <div className="h-8 p-3 py-4 rounded raleway-extrabold inline-block bg-teal" > <p className="relative" style={{top:'-13px'}}>{" > "}</p> </div>

    </div>
  );
}

export default Slide;
