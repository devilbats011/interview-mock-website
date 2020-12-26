import React from 'react'
import LeftTail from "./../assets/left-tail.png";
import RightTail from "./../assets/right-tail.png";
import OfferCard from "./../components/OfferCard/OfferCard";
import Desktop from "./../assets/icons/white-icon_desktop.svg";
import Puzzle from "./../assets/icons/white-icon_puzzle.svg";
import Target from "./../assets/icons/white-icon_target.svg";
import "./weoffer.scss";


function Hr () {
  return (
    <div className="flex flex-col justify-center align-center gap-1 hide--maxmd w-1/4 mx-1 ">
      <hr className="offer-hr-1" />
      <hr className="offer-hr-2" />
    </div>
  )
}

function Title () {
  return (

      <div className=" mx-1 h1 raleway-extra-bold width-fit xb-check relative" style={{top:"2px" }} >WHAT WE <span className="teal" >OFFER</span></div>

  )
}

function WeOffer() {
    return (
        <section className="section relative bg-white flex flex-col py-20">
        <div className="susah section__container flex justify-center">
            <Hr/>
            <img src={RightTail} alt="left" className="hide--maxmd" style={{width:'28px',height:'15px',transform:"translateY(14px)"}} />
            <Title/>
            <img src={LeftTail} alt="left"  className="hide--maxmd" style={{width:'28px',height:'15px',transform:"translateY(14px)"}} />
            <Hr/>
        </div>
        <div className="section__container h2 text-center pt-5 pb-12 normal-grey raleway-medium">
          We offer our customers the best services & solutions, this is our main
          services list
        </div>
        <div className="section__container offer flex flex-col lg:flex-row justify-center items-center">
          <OfferCard title="responsive & multipurpose" icon={Desktop} y="23px" />
          <OfferCard title="easy customization" icon={Puzzle} x="-3px" />
          <OfferCard title="awesome friendly support" icon={Target} />
        </div>
      </section>
    )
}

export default WeOffer
