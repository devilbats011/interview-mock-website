import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./index.scss";

function ProgressCircle({ num = 50 ,name="No-Name"}) {
  return (
    <section className="progressx p-4 flex flex-col width-fit gap-4 bg-black">
      <div className=" b-check-x relative">
        <CircularProgress
          variant="determinate"
          value={num}
          size={120}
          thickness={1.5}
          className="rotate-180"
        />
        <h1 className="progress-number font-raleway great-h1 thinner-light-grey">{num}%</h1>
      </div>
      <h3 className="normal-grey txt1 text-center weight-x-bold tracking-wide" > {name} </h3>
    </section>
  );
}

export default ProgressCircle;
