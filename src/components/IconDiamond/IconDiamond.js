import "./index.scss";
import React,{useState} from "react";

function IconDiamond({className="",icon,black,teal,...p}) {

  const classx = `w-10 h-10 thin-grey relative my-5 flex flex-row ${className}`
  const [bg] = useState(BgHandler())

  function BgHandler(){
    let clasx = "";
    if(black) {
      clasx = `rounded absolute w-9 h-9 transform rotate-45 thin-grey ${black ? 'bg-black': 'bg-thinner-light-grey'}`
    }

    else if(teal)
    {
      clasx = `rounded absolute w-9 h-9 transform rotate-45 thin-grey ${teal ? 'bg-teal': 'bg-thinner-light-grey'}`

    }
    else
    {
      clasx = 'rounded absolute w-9 h-9 transform rotate-45 thin-grey bg-thinner-light-grey';
    }

    return clasx
    
    

  }

  return (
      <div className={classx} {...p} >
        <div className={bg}></div>
        <img src={icon} alt="icon"  className="icon-diamond" height="10" />
      </div>
  );
}

export default IconDiamond;
