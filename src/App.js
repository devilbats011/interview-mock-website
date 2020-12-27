import "./App.scss";
import React from "react";

// import ProgressCircle from "./components/ProgressCircle/ProgressCircle";
// import GroupIconDiamond from "./components/GroupIconDiamond/GroupIconDiamond";
// import Logo1 from "./assets/logos/scenthound.png";
// import Logo2 from "./assets/logos/logo-2.jpg";
import Creative from "./layouts/Creative";
import Navigation from "./layouts/Navigation";
import WeOffer from "./layouts/WeOffer";
import OurSkills from "./layouts/OurSkills";
import Register from "./layouts/Register/Register";
import Foots from "./layouts/FootersSection";

function App() {

  return (
    <>
      <Creative/>
      <Navigation/>
      <WeOffer/>
      <OurSkills/>
      <Register/>
      <Foots/>
    </>
  );
}

export default App;
