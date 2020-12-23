import "./App.scss";
import React from "react";
import Logo from "./assets/logo.jpg";
function App() {
  // const homeImg = './../assets/homepage.jpg';
  const navText = [ 'HOME','PORTFOLIO','BLOG','PAGES','FEATURES','MEGA MENU', 'CONTACT']
  return (
    <>
      {/* section for pages */}
      {/* nav for dashboard navigation */}
      {/* footer */}
      <section className="section bg-white xb-check">
        <div className="img-homepage">
          <div className="section__container">
            <h1 className="h1 text-center lg:text-justify">
              Let's be creative whatever
            </h1>
          </div>
        </div>
      </section>
      <nav className="section bg-thinner-grey section--nav-bg-color-border-btm-thin-grey ">
        <div className="section__container great-grey weight-x-bold very-tiny-txt ">
          <ul className="nav">
            <li className="nav__item"><img src={Logo} alt={"logo"} width="40" height="40"  /> </li>
            {
              navText.map((item) => {
                return (<li className="nav__item">{item}</li>)

              })
            }

          </ul>
        </div>
      </nav>
      <aside className="aside fixed z-10 top-0 left-0 w-44 bg-black opacity-95 flex flex-col hidden tiny-txt">
        <div className="aside__item"><span className="cursor-pointer p-1" > X </span></div>
        {
          navText.map((item) => {
            return (<div className="aside__item">{item}</div>)
          })
        }
      </aside>
      {/* <section className="section test bg-white">jnjk</section>

      <section className="section test bg-black">jkbnj</section>

      <section className="section test bg-white">jbhjbjb</section>

      <section className="section test bg-black">knjk</section>

      <section className="section test bg-white">hbjhb</section>

      <section className="section test bg-teal">nmn m</section>

      <section className="section test bg-black">nb mn</section>

      <footer className="section test bg-blacker">n mn</footer> */}
    </>
  );
}

export default App;
