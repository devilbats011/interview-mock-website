import "./index.scss";
import LeftTail from "./../../assets/left-tail.png";
import RightTail from "./../../assets/right-tail.png";
import React from 'react'

function index({className="",right,left}) {

  const classMix = `relative flex flex-row xb-check ${className}`;


  return (
    <div className={classMix}>
      {left ?(<img src={LeftTail} alt="left" width="29" height="20" className="mr-2" /> ): ""}
      <div className="relative w-full flex flex-col justify-center align center gap-2">
        <hr className="line1" />
        <hr className="line2" />
      </div>
      {right ?(<img src={RightTail} alt="right" width="29" height="20" className="ml-2" /> ): ""}

    </div>
  )
}

export default index

