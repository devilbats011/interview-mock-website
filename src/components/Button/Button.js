import "./index.scss";
import Buttonx from "@material-ui/core/Button";

import React from "react";

function Button({ children, variant = "contained",...p }) {
  const stylesContained = { color:"#e3e3e3",backgroundColor: "#00a99d" };
  const stylesOutlined  = { color:"inherit",backgroundColor: "transparent",border:"1px solid transparent" };

  function handleStyles() {
    let styles = {};
    if (variant === "contained") {
      styles = stylesContained;
    } else {
      styles = stylesOutlined;
    }
    return styles;
  }

  return (
    <Buttonx variant={variant} style={handleStyles()} {...p} >
      {children}
    </Buttonx>
  );
}

export default Button;
