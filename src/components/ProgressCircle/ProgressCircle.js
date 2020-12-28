/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState,useRef} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./index.scss";

function ProgressCircle({ num = 0 ,name="No-Name",startRace=false}) {


  let i = 0
  const [ii,setII] = useState(0)
  let tick =  useRef(null);

  useEffect(() => {
    if(startRace){
      TimeTick()
    }

  }, [startRace])

  /*
  useEffect(() => {
    console.log("i",ii)
  }, [ii])
  */

  function TimeTick()
  {
    tick = setInterval(()=>{
        i++
        setII(i)
        if(i >= num)
        {
          clearInterval(tick)
        }
        
      },50);
  } 

  return (
    <section className="progressx p-4 flex flex-col gap-4 bg-black b-checkx">
      <div className=" b-check-x relative">
        <CircularProgress
          variant="determinate"
          value={ii}
          size={120}
          thickness={1.8}
          className="rotate-180"
        />
        <h1 className="progress-number raleway-extra-bold great-h1 thinner-light-grey relative">{ii}%</h1>
      </div>
      <h3 className="normal-grey txt1 text-center raleway-extra-bold tracking-wide uppercase" > {name} </h3>
    </section>
  );
}

export default ProgressCircle;
