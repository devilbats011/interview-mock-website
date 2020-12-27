import React from "react";
import Person1 from "./../../assets/people/person-1.png";
import "./index.scss";
import GroupIcons from "./../GroupIconDiamond/GroupIconDiamond";
import mailIcon from "./../../assets/icons/icon_mail.svg";
import phoneIcon from "./../../assets/icons/icon_phone.svg";

function ContactCard({
  name = "ALEXIS SIMPSON",
  title = "CEO-DEVELOPER",
  email = "a.simpson@unique.com",
  phone = "+1911(77)222-1111",
}) {
  return (
    <div className="contact-card thinner-light-grey">
      <div className="contact-card__upper_box mb-4">
        <div className="bg-teal w-full contact-card__wallpaper" >
           <GroupIcons/>
           <img src={Person1} alt="person face" className="bg-cover w-full" />
        </div>
        <div className="contact-card__upper_box__name raleway-extra-bold txt2">{name}</div>
      </div>
      <div className="contact-card__under_box b-check-x">
        <h2 className="contact-card__under_box__title light-black weight-medium py-3 text-center tiny-txt">
          {title}
        </h2>

      <div className="mt-3 text-center b-check-x txt2 aaa ">
          <p className=" width-fit b-checkx mx-auto ">
            <img src={mailIcon}  className="contactx-icon mr-1" alt="mail" /> {email}
          </p>
          <p className="b-checkx mx-auto">
            <img src={phoneIcon} className="contactx-icon mr-1" alt="phone" /> 
             {phone}
          </p>
      </div>
      </div>
    </div>
  );
}

export default ContactCard;
