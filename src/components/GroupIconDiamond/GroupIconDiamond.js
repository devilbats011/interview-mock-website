import "./index.scss";
import React from "react";
import Icon from "./../IconDiamond/IconDiamond";
function GroupIconDiamond() {

  return (
    <div className="group flex flex-row nowrap absolute absolute-center">
      <Icon className="group-diamond" />
      <Icon className="group-diamond" black />
      <Icon className="group-diamond" />
      <Icon className="group-diamond" />
      <Icon className="group-diamond" />
    </div>
  );
}

export default GroupIconDiamond;
