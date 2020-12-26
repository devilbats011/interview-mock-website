import React from 'react'
import Logo from  "./../assets/logo.jpg";
import Search from "./../assets/icons/teal-icon_search.svg";
import './navigation.scss'

function Navigation() {
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
                  <nav className="section section--nav-bg-color-border-btm-thin-grey ">
        <div className="section__container great-grey raleway-extra-bold tiny-txt ">
          <ul className="nav">
            <li key={"a"} className="nav__item">
              <img src={Logo} alt={"logo"} width="40" height="40" />
            </li>
            <li key={"b"} className="nav__item">
              <img src={Search} alt="search"  style={{height:"22px",transform:"translateY(-4px)"}} />
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
        </>
    )
}

export default Navigation
