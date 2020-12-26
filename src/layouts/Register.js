import React from 'react'
import Btn from "./../components/Button/Button";

function Register() {
    return (
        <section className="section bg-white py-20">
        <div className="section__container flex flex-col text-justify">
          <h1 className=" size-30 size-60--lg teal avenir-semi-bold italic"> Register Your Interest </h1>
          <main  className="register rounded">
          <article className=" grid grid-cols-1 md:grid-cols-2 p-8 b-check-x">
              <input type="text"  className="register__item" placeholder="name" />
              <select id="occupation" name="occupation" className="register__item register__select" >
                <option defaultValue="" disabled hidden> occupation</option>
                <option   className="register__option" value="Chef">Chef</option>
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
    )
}

export default Register
