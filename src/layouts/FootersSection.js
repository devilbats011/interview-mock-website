import React from "react";
import Slide from "./../components/Slide/Slide";


function FootersSection() {
  return (
    <>
      <section className="section bg-teal pb-3">
        <div className="section__container flex flex-col justify-center items-center">
          <div className="m-5 rounded bg-thinner-light-grey txt2 uppercase">
            <p className="p-3 px-4">
              <span className="teal raleway-extra-bold  ">
                {" "}
                alexis simpson{" "}
              </span>
              <span className="aaa raleway-medium">- CEO & Developer</span>
            </p>
          </div>
          <p className="my-1 raleway-medium great-h2 thinner-light-grey text-center">
            {/* close-icon kiv */}
            <span
              style={{ fontSize: "80px", top: "50px", left: "-25px" }}
              className="absolute"
            >
              "
            </span>{" "}
            Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis,
            sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum
            mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.
            <span
              style={{ fontSize: "80px", lineHeight: "55px" }}
              className="absolute"
            >
              "
            </span>
          </p>
          <ul className="flex flex-row gap-1">
            <li key={1} className="b-check">
              {" "}
              {"< "}{" "}
            </li>
            <li key={2} className="b-check">
              {" "}
              {">"}{" "}
            </li>
          </ul>
        </div>
      </section>
      <section className="section bg-black py-10">
        <div className="section__container">
          <Slide />
        </div>
      </section>
      <footer className="section bg-blacker">
        <div className="section__container py-3">
          <p className="text-center txt1 thin-light-grey ">
            Copyright © 2017 APD Digital Services Sdn Bhd, All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default FootersSection;
