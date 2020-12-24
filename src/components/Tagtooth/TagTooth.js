import React from "react";
import "./index.scss";

function TagTooth() {
  /*
    const useState()
  const teal = "#00a99d";
  const black = "#404040";

  const styles1 = {
    zIndex: "2",
  };
  const styles2 = {
    backgroundColor: black,
    zIndex: "1",
    top: "-1rem",
  };
*/

  return (
    <article className="flex flex-row b-check-x pb-10">
      <section className="b-check-x relative" style={{ width: "fit-content" }}>
        <div className="tag-tooth1">
          <div className="tag-tooth1__fang"></div>
        </div>
        <div className="tag-tooth2">
          <div className="tag-tooth2__fang"></div>
        </div>
      </section>
      <section className="px-4">
        <h2 className="h2" >responsive & multipurpose</h2>
        <h3 className="h2" >Desktops, Tablets & Phones</h3>
        <p className="txt1 mt-3" >
          Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc
          vestibulum fringilla accumsan. Praesent arcu turpis.
        </p>
      </section>
    </article>
  );
}

export default TagTooth;
