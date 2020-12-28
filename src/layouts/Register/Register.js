/* eslint-disable no-useless-escape */
import React, { useRef } from "react";
import Btn from "../../components/Button/Button";
import "./register.scss";
const axios = require("axios");


function Register() {
  const name = useRef(null);
  const occupation = useRef(null);
  const email = useRef(null);
  const contact = useRef(null);
  const message = useRef(null);

  const vname = useRef(null);
  const voccupation = useRef(null);
  const vemail = useRef(null);
  const vcontact = useRef(null);

  const EMPTY = "Cannot be Empty"
  const INVALID_EMAIL = "Invalid Email"

  
  function validateEmpty(item) {
    if (item === "" || item === undefined || item === null) {
      return true;
    }
    else
    return false;
  }
  
  function validateEmail() {
    const emailAddress = email.current.value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAddress.match(regexEmail)) {
      return true
    } else {
      return false
    }
  }

  function clickHandler() {
    console.log(occupation.current.value,"occupation.current.value")
    let res_name = true;
    let res_occup = true;
    let res_contact = true;
    let res_email = true

    if(validateEmpty(name.current.value)) {
      vname.current.innerText = EMPTY;
      res_name = false;
      
    }
    else {
      vname.current.innerText = "";
    }

    if(validateEmpty(occupation.current.value)) {
      voccupation.current.innerText = EMPTY;
      res_occup = false;
    }
    else {
      voccupation.current.innerText = "";
    }

    if(validateEmpty(contact.current.value)) {
      vcontact.current.innerText = EMPTY;
      res_contact = false;
    }
    else {
      vcontact.current.innerText = "";
    }

    if(!validateEmail()) {
      vemail.current.innerText = INVALID_EMAIL;
      res_email = false;
    }
    else {
      vemail.current.innerText = "";
    }

    if(!res_name || !res_occup || !res_contact || !res_email ){
      return 
    }

    const mockDb = axios.create({
      baseURL: "http://localhost:3005/",
    });

    mockDb
      .post("users", {
        name: name.current.value,
        occupation: occupation.current.value,
        email: email.current.value,
        contact: contact.current.value,
        message: message.current.value,
      })
      .then(function (response) {
        name.current.value = "";
        occupation.current.value = "";
        email.current.value = "";
        contact.current.value = "";
        message.current.value = "";

        vname.current.innerText = "";
        voccupation.current.innerText = "";
        vemail.current.innerText = "";
        vcontact.current.innerText = "";

        alert(" Register Completed, Thank You for Submit \^_^/! ")
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });
  }

  return (
    <section className="section bg-white py-20">
      <div className="section__container flex flex-col text-justify">
        <h1 className=" size-30 size-60--lg teal avenir-semi-bold italic">
          Register Your Interest
        </h1>
        <main className="register rounded">
          <article className=" grid grid-cols-1 md:grid-cols-2 p-8 b-check-x">
            <div className="b-check-x w-full flex flex-col ">
              <input
                type="text"
                className="register__item"
                placeholder="name"
                ref={name}
              />
              <p className="register__validate" ref={vname}> </p>
            </div>
            <div className="b-check-x w-full flex flex-col ">
              <select
                id="occupation"
                name="occupation"
                className="register__item register__select"
                ref={occupation}
              >
                <option value="" > Occupation </option>
                <option value="Chef">Chef</option>
                <option value="Food Tester">Food Tester</option>
                <option value="Waiter">Waiter</option>
                <option value="Receptionist">Receptionist</option>
              </select>
              <p className="register__validate" ref={voccupation}>  </p>
            </div>
            <div className="b-check-x w-full flex flex-col ">
              <input
                type="email"
                className="register__item"
                placeholder="email address"
                ref={email}
              />
              <p className="register__validate" ref={vemail} ></p>
            </div>
            <div className="b-check-x w-full flex flex-col ">
              <input
                type="text"
                className="register__item"
                placeholder="contact no"
                ref={contact}
              />
              <p className="register__validate" ref={vcontact} ></p>
            </div>
            <textarea
              name="message"
              className="register__item"
              rows="4"
              cols="50"
              placeholder="message"
              ref={message}
            ></textarea>
            <div className="offset"></div>
            <div className="b-check-x relative mx-4 mt-5">
              <Btn
                className="w-full md:w-7/12"
                variant="contained"
                onClick={() => {
                  clickHandler();
                }}
              >
                SUBMIT MESSAGE
              </Btn>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
}

export default Register;
