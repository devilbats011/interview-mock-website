import "./App.scss";
import React from "react";
import Logo from "./assets/logo.jpg";
import Tag from "./components/Tagtooth/TagTooth";
import ProgressCircle from "./components/ProgressCircle/ProgressCircle";
import ContactCard from "./components/ContactCard/ContactCard";
import Btn from "./components/Button/Button";
import Logo1 from "./assets/logos/scenthound.png";
import Logo2 from "./assets/logos/logo-2.jpg";

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
      <section className="section bg-white xb-check">
        <div className="img-homepage">
          <div className="section__container">
            <h1 className="h1 text-center lg:text-justify">
              Let's be creative whatever<br></br>
            </h1>
            <p className="font-avenir" > AvenirNext 012345</p>
            <p className="font-myriad" > MyriadPro 012345</p>
            <p className="font-raleway" > Raleway 012345</p>
            <p> Default raleway also in body 0123456789 </p>
            <ProgressCircle />
            <div className="b-check m-3 relative text-center" style={{width:"400px"}}>
              <div className="rounded-full h-24 w-24 bg-black block my-5 mx-auto"></div>
              <h2 className="uppercase h2"> responsive & multipurpose </h2>
              <p className="txt1 mx-auto px-2 b-check-x">
                Proin in magna a ipsum viverra scelerisq enec turp, Nunc
                vestibulum fringilla accumsan ornare quis.
              </p>
              <Btn variant="outlined" > READ More </Btn>
              {/* <Button variant="contained">Default</Button> */}
              <img src={Logo1} alt="logo-1" className="test-img" />
              <img src={Logo2} alt="logo-1" className="test-img" />
            </div>
          </div>
        </div>
      </section>
      {/* bg-white/ bg-thinner-grey */}
      <nav className="section section--nav-bg-color-border-btm-thin-grey ">
        <div className="section__container great-grey weight-x-bold tiny-txt ">
          <ul className="nav">
            <li key={"a"} className="nav__item">
              <img src={Logo} alt={"logo"} width="40" height="40" />
            </li>
            <li key={"b"} className="nav__item">
              icon
            </li>
            {navText.map((item, index) => {
              return (
                <li key={index} className="nav__item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <aside className="aside fixed z-10 top-0 left-0 w-44 bg-black opacity-95 flex flex-col hidden tiny-txt">
        <div className="aside__item">
          <span className="cursor-pointer p-1"> X </span>
        </div>
        {navText.map((item, index) => {
          return (
            <div className="aside__item" key={index}>
              {item}
            </div>
          );
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
      <section className="section  bg-black py-10 pt-20">
        <div className="section__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center b-check-x gap-7">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
        <div className="section__container relative ">
          <button className="rounded bg-teal w-full my-5 p-3 font-extrabold txt2 leading-5 tracking-wider thinner-light-grey">
            view all work
          </button>
        </div>
      </section>
      <section className="section bg-white py-20">
        <div className="section__container flex flex-col text-justify">
          <h1 className=" greater-h1 teal font-avenir weight-semi-bold"> Register Your Interest </h1>
          <main  className="register rounded">
          <article className=" grid grid-cols-1 md:grid-cols-2 p-8 b-check-x">
              <input type="text"  className="register__item" placeholder="name" />
              {/* <input type="text"  className="register__item" placeholder="occupation" /> */}
              <select id="occupation" name="occupation" placeholder="occupation" className="register__item">
                <option className="register__option" value="Chef">Chef</option>
                <option className="register__option" value="Food Tester">Food Tester</option>
                <option className="register__option" value="Waiter">Waiter</option>
                <option className="register__option" value="Receptionist">Receptionist</option>
              </select>
              <input type="email" className="register__item" placeholder="email address" />
              <input type="text"  className="register__item" placeholder="contact no" />
              {/* <input type="text"  className="register__item" placeholder="message" /> */}
              <textarea name="message" className="register__item" rows="4" cols="50" placeholder="message" ></textarea>
              <div className="offset" ></div>
              <div className="b-check-x relative mx-4 mt-5" >
                <Btn className="w-7/12" variant="contained">
                  SUBMIT MESSAGE
                </Btn>
              </div>
          </article>

          </main>
        </div>
      </section>
    </>
  );
}

export default App;
