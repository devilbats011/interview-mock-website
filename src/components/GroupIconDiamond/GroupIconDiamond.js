import "./index.scss";
import React from "react";
import Icon from "./../IconDiamond/IconDiamond";
function GroupIconDiamond() {
  // function leftsHandler(ls)
  // {

  // }

  // const lefts = leftsHandler()


  return (
    <div className="flex flex-row nowrap">
      <Icon className="group-diamond" />
      <Icon className="group-diamond" black />
      <Icon className="group-diamond" />
      <Icon className="group-diamond" />
      <Icon className="group-diamond" />
    </div>
  );
}

export default GroupIconDiamond;
