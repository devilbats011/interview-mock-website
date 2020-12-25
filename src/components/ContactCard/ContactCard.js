import React from "react";
import Person1 from "./../../assets/people/person-1.png";
import "./index.scss";

function ContactCard({
  name = "ALEXIS SIMPSON",
  title = "CEO-DEVELOPER",
  email = "a.simpson@unique.com",
  phone = "+1911(77)222-1111",
}) {
  return (
    <div className="contact-card thinner-light-grey">
      <div className="contact-card__upper_box mb-4">
        <img src={Person1} alt="person face" className="bg-cover w-full" />
        <div className="contact-card__upper_box__name txt2">{name}</div>
      </div>
      <div className="contact-card__under_box b-check-x">
        <h2 className="contact-card__under_box__title light-black weight-medium py-3 text-center txt2">
          {title}
        </h2>

      <div className="mt-3 text-center b-check-x txt-2 thin-grey ">
          <p className="h2 width-fit b-checkx mx-auto">
            <span> M </span> {email}
          </p>
          <p className="h2 b-checkx mx-auto">
            <span> E </span> {phone}
          </p>
      </div>
      </div>
    </div>
  );
}

export default ContactCard;
