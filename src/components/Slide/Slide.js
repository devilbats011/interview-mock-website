import "./index.scss";
import Button from "./../SquareButton/SquareButton";
import React,{useRef, useEffect} from "react";
import Logo1 from "./../../assets/logos/logo-1.jpg";
import Logo2 from "./../../assets/logos/logo-2.jpg";
import Logo3 from "./../../assets/logos/logo-3.jpg";
import Logo4 from "./../../assets/logos/logo-4.jpg"; 

function Slide() {

let countSliderImg = 0;
const sliderWrapper = useRef(null)
function clickHandler (direction) {
      const sliderChildrenLength = sliderWrapper.current.children.length;
      /*
      console.log('sliderChildrenLength:', sliderWrapper.current.children[7]  ) 
      start dgn zero 
      */
      

      const sliderImg = sliderWrapper.current.firstChild;
      const styxImg = window.getComputedStyle(sliderImg)
      console.log('sliderImg:', parseFloat(styxImg.getPropertyValue('margin-left')))
      console.log('sliderImg:', parseFloat(styxImg.getPropertyValue('margin-right')))
      
      let slideLeftNumber = sliderImg.offsetWidth;
      slideLeftNumber = parseFloat(slideLeftNumber);
      console.log(sliderWrapper.current.style.left)
      const SliderLeftpx = sliderWrapper.current.style.left
      console.log('SliderLeftpx:', SliderLeftpx)
      let sum = 0;
      
      switch(direction){
        case "left":
          // console.log('sliderWrapper.current.parentElement.offsetWidth:', sliderWrapper.current)
          sum = sumPx(SliderLeftpx,slideLeftNumber*1)
          let sumNumber = sum.replace("px", "") 
          sumNumber = parseFloat(sumNumber);

          if( slideLeftNumber*sliderChildrenLength <= sumNumber){
             
             break;
          }
          countSliderImg++
           
           console.log('countSliderImg:', countSliderImg)
          console.log("left enter")
          sliderWrapper.current.style.left = sum;
          break;
        case "right":
            countSliderImg--
            console.log("right enter")
            sum = sumPx(SliderLeftpx,slideLeftNumber*-1)
            if(sum === "0px"){
              styleLeft0pxForSliderWrapper();
              break;
            }
          sliderWrapper.current.style.left = sum;
          break;
        default:
            break;
      }
}
function styleLeft0pxForSliderWrapper() {
  countSliderImg = 0;
  sliderWrapper.current.style.left = "0px";
}
function sumPx(px,number){
  console.log('number:', number)
  console.log('px:', px)
  let regexp = /(\d+)/gm;
  let numArray = px.match(regexp)
  let num = numArray[0]
  num = parseFloat(num)
  console.log('num:', num)
  const sum = num + number
  console.log('SUMPX sum:', sum, `parseToPX: ${sum}px`)
  if(sum <= 0 )
  {
    return "0px"
  }
  return `${sum}px`
}

// Mount
useEffect(() => {

  window.addEventListener("resize", ()=>styleLeft0pxForSliderWrapper())
  
  return () => {
    window.removeEventListener("resize", styleLeft0pxForSliderWrapper())
  }
})

 

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
  */

  /*
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
      <Button direction="left" variant="white" onClick={() =>{
        clickHandler("left");
      }} />
      <div className="slider" >
        <section className="slider__wrapper" ref={sliderWrapper} style={{left:"0px"}} >
        <img src={Logo1} alt={"logo"} className="slider__img slider__img-md"  />
        <img src={Logo2} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo4} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo1} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo2} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo3} alt={"logo"} className="slider__img slider__img-md" />
        <img src={Logo4} alt={"logo"} className="slider__img slider__img-md" />
        </section>

      </div>
      <Button direction="right" variant="teal" onClick={(e) =>{ clickHandler("right") }}  />
    </div>
  );
}

export default Slide;
