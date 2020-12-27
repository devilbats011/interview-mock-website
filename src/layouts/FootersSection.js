import React from "react";
import Slide from "./../components/Slide/Slide";
import Button from "./../components/SquareButton/SquareButton";
import close from "./../assets/white-icon_close.svg";

function FootersSection() {
  return (
    <>
      <section className="section bg-teal pb-3">
        <div className="section__container flex flex-col justify-center items-center">
          <div className="m-5 rounded bg-thinner-light-grey txt2 uppercase">
            <p className="p-3 px-4 text-center">
              <span className="teal raleway-extra-bold  ">
                alexis simpson
              </span>
              <span className="aaa raleway-medium"> - CEO & Developer</span>
            </p>
          </div>
          <p className="my-3 raleway-medium h2 thinner-light-grey text-center b-x-check mx-4 md:mx-2 ">
            <img src={close} alt="" className="width-fit"  style={{height:"35px",display:"inline-block",transform:"rotate(180deg) translateY(4px)"}} />
            Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis,
            sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum
            mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.
            <img src={close} alt="" className="width-fit"   style={{height:"35px",display:"inline-block",transform:"translateY(2px)"}} />
          </p>
          <div className="flex gap-1">
                <Button direction="left"  variant="white" />
                <Button direction="right"  />
          </div>
        </div>
      </section>
      <section className="section bg-black py-10">
        <div className="section__container">
          <Slide />
        </div>
      </section>
      <footer className="section bg-blacker">
        <div className="section__container py-3">
          <p className="text-center txt1 thin-light-grey font-myriad">
            Copyright © 2017 APD Digital Services Sdn Bhd, All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default FootersSection;
