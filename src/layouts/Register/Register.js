import React, { useRef } from "react";
import Btn from "../../components/Button/Button";
// import axios from "axios";
const axios = require('axios');

function Register() {

  const name = useRef(null)
  const occupation = useRef(null)
  const email = useRef(null)
  const contact = useRef(null)
  const message = useRef(null)
/*
  useEffect(() => {
    return () => {
    }
  }, [])
  console.log('name:', name.current.value)
  console.log('occupation:', occupation.current.value)
  console.log('email:', email.current.value)
  console.log('contact:', contact.current.value)
  console.log('message:', message.current.value)
*/
  function clickHandler() {
    /*
    */
    const mockDb = axios.create({
      baseURL: 'http://localhost:3005/'
    });

    mockDb
      .post("users", {
        name: name.current.value,
        occupation: occupation.current.value,
        email: email.current.value,
        contact:  contact.current.value,
        message: message.current.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
            <input type="text" className="register__item" placeholder="name" ref={name} />
            <select
              id="occupation"
              name="occupation"
              className="register__item register__select"
              ref={occupation}
            >
              <option defaultValue=""> Occupation </option>
              <option value="Chef">Chef</option>
              <option value="Food Tester">Food Tester</option>
              <option value="Waiter">Waiter</option>
              <option value="Receptionist">Receptionist</option>
            </select>
            <input
              type="email"
              className="register__item"
              placeholder="email address"
              ref={email}
            />
            <input
              type="text"
              className="register__item"
              placeholder="contact no"
              ref={contact}
            />
            <textarea
              name="message"
              className="register__item"
              rows="4"
              cols="50"
              placeholder="message"
              ref={message}
            ></textarea>
            <div className="offset" ></div>
            <div className="b-check-x relative mx-4 mt-5">
              <Btn className="w-full md:w-7/12" variant="contained" onClick={ ()=>{ clickHandler() } } >
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
