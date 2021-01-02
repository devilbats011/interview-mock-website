import "./index.scss";
import Button from "./../SquareButton/SquareButton";
import React from "react";
import Logo1 from "./../../assets/logos/logo-1.jpg";
import Logo2 from "./../../assets/logos/logo-2.jpg";
import Logo3 from "./../../assets/logos/logo-3.jpg";
/* import Logo4 from "./../../assets/logos/logo-4.jpg"; */

function Slide() {
  
  /*
  const slider = useRef(null);
  const sliderStyles = {
    position: " relative",
    overflow: " hidden",
    width: " 100%",
    display: " flex",
    justifyContent: " flex-end",
  };
  // Mounted
  useEffect(() => {
    console.log("mounted????");
    setWidthSize();
    window.addEventListener("resize", () => {
      setWidthSize();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidthSize();
      });
    };
  });


  function setWidthSize() {
    console.log("setWitdh???????");
    // .2 .4 .6 .8 .1
    const childrenSlide = slider.current.children;
    const parentWidth = slider.current.offsetWidth; ;
    const eachWidth = parentWidth * 0.2;
    // one margin collapse = 2, in 4 item have 3 gaps (it become 3 gaps because of  first and last child left and right are excluded.)
    const eachMargin =  eachWidth / 6;


    for (var i = 0; i < childrenSlide.length; i++) {
      childrenSlide[i].style.width = eachWidth + "px";
      childrenSlide[i].style.margin = "0px " + eachMargin + "px";

      if (i === 0) {
        console.log("parentWidth:", parentWidth);
        console.log("eachWidth:", eachWidth, eachMargin);
        childrenSlide[i].style.marginLeft = "0px";
        console.log("children[i]:", childrenSlide[i]);
      }
      if (i === childrenSlide.length - 1) {
        childrenSlide[i].style.marginRight = "0px";
      }
    }
  }
  */

  return (
    <div className=" flex flex-row justify-center items-center text-center relative gap-2">
      <Button direction="left" variant="white" />
      <div className="slider" >
        <section className="slider__wrapper">
        <img src={Logo1} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo1} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo1} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo2} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        </section>

      </div>
      <Button direction="right" variant="teal" />
    </div>
  );
}

export default Slide;
