/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect,useRef} from 'react'
import Logo from  "./../../assets/logo.jpg";
import Search from "./../../assets/icons/teal-icon_search.svg";
import './navigation.scss'

function Navigation() {

const navbarx = useRef(null)
const asidex = useRef(null)
let sticky = 0;
const [scroll,setScrolled] = useState(false)
const [isOpen,setIsOpen] = useState(false)
// const ;

  function asideHandler(isItOpen){
    isItOpen ? asidex.current.classList.add("open") : asidex.current.classList.remove("open")
  }



  useEffect(() => {
    setScrolled(true)
  }, [])

   useEffect(() => {
     sticky = navbarx.current.offsetTop;
     window.onscroll = function() {handleNav()};
     console.log(sticky)
     return () => {
      console.log("clean-up")
      window.onscroll = null;
     }
   }, [scroll])

   useEffect(() => {
    asideHandler(isOpen)
  }, [isOpen])
 
  function handleNav() {
      /*console.log("navv",sticky,"w: ", window.pageYOffset)*/

      if (window.pageYOffset >= navbarx.current.offsetTop) {
        navbarx.current.classList.add("sticky")
      }

      if(window.pageYOffset < sticky) {
        navbarx.current.classList.remove("sticky")
      }
  }

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
        <nav className="section section--nav-bg-color-border-btm-thin-grey navigation"  ref={navbarx} id="navbar">
        <div className="section__container great-grey raleway-extra-bold tiny-txt ">
          <ul className="nav">
            <li key={"a"} className="nav__item" onClick={()=>{ setIsOpen(!isOpen) }} >
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
      <aside className="aside fixed z-10 top-0 left-0 w-44 bg-black opacity-95 flex flex-col hiddenx tiny-txt" ref={asidex} >
        <div className="aside__item">
          <span className="aside-exit cursor-pointer p-1" onClick={()=>{ setIsOpen(!isOpen) }} > X </span>
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
