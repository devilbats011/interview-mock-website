import "./App.scss";
import React from "react";
import Logo from "./assets/logo.jpg";
import Logo1 from "./assets/logo-1.jpg";
import Tag from "./components/Tagtooth/TagTooth";
import ProgressCircle from "./components/ProgressCircle/ProgressCircle";
// ProgressCircle

function App() {
  const navText = [
    "CONTACT",
    "MEGA MENU",
    "FEATURES",
    "PAGES",
    "BLOG",
    "PORTFOLIO",
    "HOME",
  ];
  return (
    <>
      {/* section for pages */}
      {/* nav for dashboard navigation */}
      {/* footer */}
      <section className="section bg-white xb-check h-test-400">
        <div className="img-homepage-----x">
        <div className="section__container">
          <h1 className="h1 text-center lg:text-justify">
            Let's be creative whatever<br></br>
            <ProgressCircle />
            <br></br>
          </h1>
        </div>
        </div>
      </section>
      {/* bg-white/ bg-thinner-grey */}
      <nav className="section section--nav-bg-color-border-btm-thin-grey ">
        <div className="section__container great-grey weight-x-bold tiny-txt ">
          <ul className="nav">
            <li key={'a'} className="nav__item">
              <img src={Logo} alt={"logo"} width="40" height="40" />
            </li>
            <li key={'b'} className="nav__item">icon</li>
            {navText.map((item,index) => {
              return <li key={index} className="nav__item">{item}</li>;
            })}
          </ul>
        </div>
      </nav>
      <aside className="aside fixed z-10 top-0 left-0 w-44 bg-black opacity-95 flex flex-col hidden tiny-txt">
        <div className="aside__item">
          <span className="cursor-pointer p-1"> X </span>
        </div>
        {navText.map((item,index) => {
          return <div className="aside__item" key={index} >{item}</div>;
        })}
      </aside>
      <section className="section bg-white flex flex-col py-20">
        <div className="section__container flex flex-nowrap justify-center">
          <div className="mx-1">=</div>
          <div className="mx-1">=]</div>
          <div className="mx-1 h1">WHAT WE OFFER</div>
          <div className="mx-1">[=</div>
          <div className="mx-1">=</div>
        </div>
        <div className="section__container h2 text-center pt-5 pb-12">
          We offer our customers the best services & solutions, this is our main
          services list
        </div>
        <div className="section__container offer flex flex-col lg:flex-row justify-center items-center">
          <div className="offer__card h-test-250 b-check"></div>
          <div className="offer__card h-test-250 bg-teal"></div>
          <div className="offer__card h-test-250 b-check"></div>
        </div>
      </section>
      <section className="section bg-black">
        <div className="section__container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center">
          <div className="col-span-2 md:col-span-3 lg:col-span-6 h-test-100 bg-teal">
            <h2> title-1 </h2>
            <p> title-2</p>
          </div>
          <div className="h-test-100  bg-white">1</div>
          <div className="h-test-100  bg-white">2</div>
          <div className="h-test-100  bg-teal">3</div>
          <div className="h-test-100  bg-white">4</div>
          <div className="h-test-100  bg-thinner-grey">5</div>
          <div className="h-test-100  bg-teal">6</div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="section__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-justify">
          <div className=" bg-white">
            <Tag />
          </div>
          <div className="h-test-100  bg-white">2</div>
          <div className="h-test-100  bg-teal">3</div>
          <div className="h-test-100  bg-white">4</div>
          <div className="h-test-100  bg-teal">5</div>
          <div className="h-test-100  bg-white">6</div>
        </div>
      </section>
      <section className="section  bg-black">
        <div className="section__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center b-check">
          <div className="h-test-100  bg-teal">1</div>
          <div className="h-test-100  bg-white">2</div>
          <div className="h-test-100  bg-teal">3</div>
          <div className="h-test-100  bg-white">4</div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4 h-test-100 bg-blacker">
            <button className="bg-teal w-full my-5"> view all work </button>
          </div>
        </div>
      </section>
      <section className="section bg-white py-20">
        <div className="section__container flex flex-col text-justify">
          <h1 className=" greater-h1 teal"> Register Your Interest </h1>
          <article className="grid grid-cols-1 md:grid-cols-2  b-check">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="occupation" />
            <input type="email" placeholder="email address" />
            <input type="text" placeholder="contact no" />
            <input type="text" placeholder="message" className="" />
            <button className="bg-teal  col-start-1 md:col-span-2">
              SUBMIT MESSAGE
            </button>
          </article>
        </div>
      </section>
      <section className="section test bg-teal">
        <div className="section__container flex flex-col justify-center items-center">
          <button className="b-check my-1 mt-3">
            alexis simpson - CEO & Developer
          </button>
          <p className="my-1">
            Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis,
            sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum
            mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.
          </p>
          <ul className="flex flex-row gap-1">
            <li key={1} className="b-check"> {"< "} </li>
            <li key={2} className="b-check"> {">"} </li>
          </ul>
        </div>
      </section>
      <section className="section bg-black py-10">
        <div className="section__container flex flex-row justify-center items-center text-center">
          <div className="h-test-50 b-check pt-3"> {"< "} </div>
          <img
            src={Logo1}
            alt={"logo"}
            width="100"
            className="h-test-100 mx-2"
          />
          <img
            src={Logo1}
            alt={"logo"}
            width="100"
            className="h-test-100 mx-2"
          />
          <img
            src={Logo1}
            alt={"logo"}
            width="100"
            className="h-test-100 mx-2"
          />
          {/* <div className="h-test-100" >Img</div>
          <div className="h-test-100" >Img</div>
          <div className="h-test-100" >Img</div> */}
          <div className="h-test-50 b-check pt-3">{"> "}</div>
        </div>
      </section>
      <footer className="section bg-blacker">
        <div className="section__container py-3">
          <p className="text-center txt1 thin-light-grey ">
            Copyright © 2017 APD Digital Services Sdn Bhd, All Rights Reserved.
          </p>
        </div>
      </footer>
      {/*
       */}
    </>
  );
}

export default App;
