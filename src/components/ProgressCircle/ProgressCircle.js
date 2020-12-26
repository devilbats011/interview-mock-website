import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./index.scss";

function ProgressCircle({ num = 50 ,name="No-Name"}) {
  return (
    <section className="progressx p-4 flex flex-col gap-4 bg-black b-checkx">
      <div className=" b-check-x relative">
        <CircularProgress
          variant="determinate"
          value={num}
          size={120}
          thickness={1.5}
          className="rotate-180"
        />
        <h1 className="progress-number raleway-extra-bold great-h1 thinner-light-grey relative">{num}%</h1>
      </div>
      <h3 className="normal-grey txt1 text-center raleway-extra-bold tracking-wide uppercase" > {name} </h3>
    </section>
  );
}

export default ProgressCircle;
