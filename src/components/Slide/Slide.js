import "./index.scss";
import Logo1 from "./../../assets/logos/logo-1.jpg";
import Button from "./../SquareButton/SquareButton";
import React from "react";

function Slide() {
  return (
    <div className=" flex flex-row justify-center items-center text-center relative gap-2">
      {/* <div className="h-8 p-3 py-4 rounded raleway-extrabold inline-block bg-white" > <p className="relative" style={{top:'-13px'}}>{" < "}</p> </div> */}
      <Button direction="left" variant="white" />
      <div className="relative flex flex-row justify-center items-center text-center overflow-x-hidden w-12/12 gap-8">
        <img src={Logo1} alt={"logo"} className="h-30  slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30  slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30  slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30 slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30 slide-img" />
        <img src={Logo1} alt={"logo"} className="h-30 slide-img" />
      </div>
      <Button direction="right" variant="teal" />
    </div>
  );
}

export default Slide;
