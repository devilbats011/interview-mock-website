import React from "react";
import Line from "../components/Line";
import DownIcon from "./../assets/icons/teal-carrot-down.svg";
function Creative() {
  return (
    <section className="section">
      <div
        className="img-homepage grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: "600px" }}
      >
        <section className="grid-span-2 lg:grid-span-1 b-check-x lg:flex lg:justify-end py-32 ">
          <div className="text-center width-fit mx-auto lg:mx-0 uppercase relative xl:left-20">
            <h3 className="txt1 relative b-checkx raleway-medium" style={{ top: "9px" }}>
              What are you waiting for?
            </h3>
            <h1 className="raleway-extra-bold size-26 size-45--md size-60--xl">
              Let's be creative ! <br></br>
            </h1>
            <h2 className="bg-black txt1 uppercase lg:text-left thinner-light-grey p-1">
              <span className="lg:ml-3 italic"> lorem impsum Dolor Si Amet</span>
            </h2>
            <div className="relative h2 uppercase raleway-extra-bold black my-6 flex justify-center items-center gap-1 b-checkx">
              <Line className="w-0 md:w-1/3" right />
              <h3 className="w-3/3 md:w-1/3">
                <span className="teal"> Start </span> Doing It
              </h3>
              <Line className="w-0 md:w-1/3" left />
            </div>
            <div className="mx-auto rounded-full w-10 h-10 border-teal cursor-pointer"> 
              <img src={DownIcon} alt="down"/>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Creative;
