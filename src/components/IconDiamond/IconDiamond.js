import "./index.scss";
import React from "react";

function IconDiamond({className="",icon,black,...p}) {

  const classx = `w-10 h-10 thin-grey relative my-5 flex flex-row ${className}`
  const bg = `rounded absolute w-9 h-9 transform rotate-45 thin-grey ${black ? 'bg-black': 'bg-thinner-light-grey'}`

  return (
      <div className={classx} {...p} >
        <div className={bg}></div>
        {/* <p className="absolute text-center b-x-check w-full h-full top-1 right-1">{}</p> */}
        <img src={icon} alt="icon"  className="icon-diamond" height="10" />
      </div>
  );
}

export default IconDiamond;
