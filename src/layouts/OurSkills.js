import React from "react";
import ContactCard from "./../components/ContactCard/ContactCard";
import Tag from "./../components/Tagtooth/TagTooth";
import Btn from "./../components/Button/Button";
import ProgressCircle from "./../components/ProgressCircle/ProgressCircle"
import LeftTail from "./../assets/left-tail.png";
import RightTail from "./../assets/right-tail.png";


function Title () {
  return (

      <div className=" mx-1 h1 raleway-extra-bold width-fit xb-check relative thinner-light-grey" style={{top:"2px" }} > OUR POWERFUL <span className="teal" >SKILLS</span></div>

  )
}

function OurSkills() {
  return (
    <>
      <section className="section bg-black">
        <div className="section__container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center">

          <div className="col-span-2 md:col-span-3 lg:col-span-6 h-test-100">
            <div className="py-5 section__container flex justify-center gap-1">
              <img src={RightTail} alt="left" className="hide--maxmd" style={{width:'28px',height:'15px',transform:"translateY(14px)"}} />
              <Title/>
              <img src={LeftTail} alt="left"  className="hide--maxmd" style={{width:'28px',height:'15px',transform:"translateY(14px)"}} />
            </div>
          </div> 

          <ProgressCircle num="75" name="web design" />
          <ProgressCircle num="92" name="web development" />
          <ProgressCircle num="68" name="speed optimization" />
          <ProgressCircle num="100" name="customer support" />
          <ProgressCircle num="83" name="marketing" />
          <ProgressCircle num="50" name="advertisment" />

        </div>
      </section>



      <section className="section bg-white">
        <div className="section__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-justify">
          <div className=" bg-white">
            <Tag />
          </div>
          <div className="h-test-100  bg-white">2</div>
          <div className="h-test-100  bg-teal">3</div>
          <div className="h-test-100  bg-white">4</div>
          <div className="h-test-100  bg-teal">5</div>
          <div className="h-test-100  bg-white">6</div>
        </div>
      </section>


      <section className="section  bg-black py-10 pt-20">
        <div className="section__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center b-check-x gap-7">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
        <div className="section__container relative py-5">
          {/* <Btn className="rounded bg-teal w-full  font-extrabold txt2 leading-5 tracking-wider thinner-light-grey"> */}
          <Btn className="w-full">
            <span className="font-extrabold txt2 leading-5 tracking-wider thinner-light-grey m-1">
              view all work
            </span>
          </Btn>
        </div>
      </section>
    </>
  );
}

export default OurSkills;
