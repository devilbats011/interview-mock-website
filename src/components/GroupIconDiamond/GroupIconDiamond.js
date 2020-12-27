import "./index.scss";
import React from "react";
import Icon from "./../IconDiamond/IconDiamond";
import facebook from "./../../assets/icons/socials/social_facebook.svg";
import twitter from "./../../assets/icons/socials/social_twitter.svg";
import google from "./../../assets/icons/socials/social_googleplus.svg";
import v from "./../../assets/icons/socials/social_vimeo.svg";
import dribbble from "./../../assets/icons/socials/social_dribbble.svg";

function GroupIconDiamond() {

  return (
    <div className="group flex flex-row nowrap absolute absolute-center">
      <Icon className="group-diamond" icon={facebook} />
      <Icon className="group-diamond" icon={twitter} black />
      <Icon className="group-diamond" icon={google} />
      <Icon className="group-diamond" icon={v} />
      <Icon className="group-diamond" icon={dribbble} />
    </div>
  );
}

export default GroupIconDiamond;
