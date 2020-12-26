import "./index.scss";
import React from "react";
import Btn from "./../Button/Button";

function OfferCard({title,icon,x="0px",y="21px"}) {
  return (
    <div className="offer-card m-3 relative text-center ">
      <div className="offer-card__icon rounded-full h-24 w-24 bg-black block my-5 mx-auto">
        <img className="offer-card__img" src={icon} alt="iconx" style={{transform:`translate(${x},${y})`}} />
      </div>
      <h2 className="uppercase h2 raleway-extra-bold light-black my-5"> {title}</h2>
      <p className="txt1 mx-auto px-2 b-check-x great-grey raleway-medium">
        Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum
        fringilla accumsan ornare quis.
      </p>
      <div className="my-5">
        <Btn variant="outlined"> <span className="uppercase color-8a8a8a raleway-extra-bold btn-span" > READ MORE </span> </Btn>
      </div>
      <br></br>
    </div>
  );
}

export default OfferCard;
