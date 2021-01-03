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
      const sliderChildrenArray = sliderWrapper.current.children;
      const sliderChildrenLength = sliderWrapper.current.children.length;

      const sliderImg = sliderWrapper.current.firstChild;
      
      let slideLeftNumber = sliderImg.offsetWidth;
      slideLeftNumber = parseFloat(slideLeftNumber);
      const SliderLeftpx = sliderWrapper.current.style.left
      let sum = 0;
      
      switch(direction){
        case "left":
          console.log("left enter")
          const selectedChildLeft = sliderChildrenArray[countSliderImg++]
          if(selectedChildLeft === undefined){
            styleLeft0pxForSliderWrapper();
            break
          }
          let totalMargin1 = totalSumMargin(selectedChildLeft)
          sum = sumPx(SliderLeftpx,(slideLeftNumber*1) + totalMargin1)
          if( countSliderImg >= sliderChildrenLength ) {
            styleLeft0pxForSliderWrapper() 
            break
            }
          sliderWrapper.current.style.left = sum;
          break;
        case "right":
          console.log("right enter")
          const selectedChildRight = sliderChildrenArray[countSliderImg--]
          if(selectedChildRight === undefined){
            styleLeft0pxForSliderWrapper();
            break
          }
          let totalMargin2 = totalSumMargin(selectedChildRight)
          sum = sumPx(SliderLeftpx, (slideLeftNumber+ totalMargin2)*-1)
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
function totalSumMargin(theChild){
  const sliderImgMargin = window.getComputedStyle(theChild)
  const getMarginLeft = parseFloat(sliderImgMargin.getPropertyValue('margin-left'))
  const getMarginRight = parseFloat(sliderImgMargin.getPropertyValue('margin-right'))
  let sumLR = getMarginLeft + getMarginRight
  return sumLR
}

function styleLeft0pxForSliderWrapper() {
  countSliderImg = 0;
  sliderWrapper.current.style.left = "0px";
}

function sumPx(px,number){
  console.log('number:', number)
  console.log(' px:', px)
  let regexp = /(\d+)/gm;
  let numArray = px.match(regexp)
  let num = numArray[0]
  num = parseFloat(num)
  console.log('num:', num)
  const sum = num + number
  console.log('SUMPX sum:', sum, ` parseToPX: ${sum}px`)
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
