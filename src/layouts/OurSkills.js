import React from "react";
import ContactCard from "./../components/ContactCard/ContactCard";
import Tag from "./../components/Tagtooth/TagTooth";
import Btn from "./../components/Button/Button";
import ProgressCircle from "./../components/ProgressCircle/ProgressCircle"
import LeftTail from "./../assets/left-tail.png";
import RightTail from "./../assets/right-tail.png";
import Desktop from "./../assets/icons/white-icon_desktop.svg";
import Puzzle from "./../assets/icons/white-icon_puzzle.svg";
import Star from "./../assets/icons/white-icon_star.svg";
import Menu from "./../assets/icons/white-icon_menu.svg";
import Cart from "./../assets/icons/white-icon_cart.svg";
import Target from "./../assets/icons/white-icon_target.svg";
import homer from "./../assets/people/homer.jpg";
import jack from "./../assets/people/jack.jpg";
import thor from "./../assets/people/thor.jpg";
import scarlet from "./../assets/people/scarlet.jpg";

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

          <ProgressCircle num={75} name="web design" />
          <ProgressCircle num={92} name="web development" />
          <ProgressCircle num={68} name="speed optimization" />
          <ProgressCircle num={100} name="customer support" />
          <ProgressCircle num={83} name="marketing" />
          <ProgressCircle num={50} name="advertisment" />

        </div>
      </section>



      <section className="section bg-white py-8 pt-14">
        <div className="section__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-justify">
            <Tag  h1="responsive & multipurpose" h2="Desktops, Tablets & Phones" icon={Desktop} />
            <Tag  h1="easy customization" h2="Desktops, Tablets & Phones" icon={Puzzle} translate="translate(-3px,10px)"  />
            <Tag  h1="unlimited features" h2="Shortcodes, Typography & Different Layouts" icon={Star} />
            <Tag  h1="clean & modular coding" h2="100% Clean, Valid & Well-Commented Coding" icon={Menu} translate="translate(-2px,10px)" />
            <Tag  h1="the best e-commerce solutions" h2="WooCommerce Fully Integration" icon={Cart} />
            <Tag  h1="awesome friendly support" h2="Free Lifetime Support & Updates" icon={Target} />
        </div>
      </section>


      <section className="section  bg-black py-10 pt-20">
        <div className="section__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center b-check-x gap-5">
          <ContactCard  person={homer}   />
          <ContactCard  person={jack}  name="STEVEN COLE" title="User Interface Designer" email="s.cole@unique.com" />
          <ContactCard  person={thor}  name="FRANK PIENER" title="Sales Manager" email="f.piener@unique.com" />
          <ContactCard  person={scarlet}  name="ASHLEY LENNON" title="IT Specialist" email="a.lennon@unique.com" />
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
