import React from "react";
import "./index.scss";

function TagTooth({
  h1 = "no header",
  h2 = "no caption",
  icon,
  translate = "translate(0,10px)",
  m = "0 auto",
  h = "25px",
}) {
  return (
    <article className="tag flex flex-row pb-10 pt-4 b-checkx pl-5">
      <section className=" relative width-fit b-checkx top-1">
        <div className="tag-tooth1">
          <img
            src={icon}
            alt="iconx"
            style={{ transform: translate, margin: m, height: h }}
          />
          <div className="tag-tooth1__fang"></div>
        </div>
        <div className="tag-tooth2">
          <div className="tag-tooth2__fang"></div>
        </div>
      </section>
      <section className="px-4 text-left">
        <h2 className="h2 light-black raleway-extra-bold txt1 uppercase">
          {h1}
        </h2>
        <h3 className="h2 aaa raleway-medium txt tiny-txt">{h2}</h3>
        <p className="txt1 my-2 txt1 great-grey raleway-medium ">
          Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc
          vestibulum fringilla accumsan. Praesent arcu turpis.
        </p>
      </section>
    </article>
  );
}

export default TagTooth;
