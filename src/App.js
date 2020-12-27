import "./App.scss";
import React from "react";
import Creative from   "./layouts/Creative/Creative";
import Navigation from "./layouts/Navigation/Navigation";
import WeOffer from    "./layouts/WeOffer/WeOffer";
import OurSkills from  "./layouts/OurSkills";
import Register from   "./layouts/Register/Register";
import Foots from      "./layouts/FootersSection";

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
