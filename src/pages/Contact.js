import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import { useState, useEffect } from "react"
import "../styles/Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email-ը դատարկ չպետա լինի․․․");
  const [nameError, setNameError] = useState("Name-ը դատարկ չպետա լինի․․․");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
      if(nameError || emailError) {
         setFormValid(false);
      }
      else {
         setFormValid(true);
      }
  }, [nameError, emailError])

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'name':
        setNameDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    if(!e.target.value) {
      setNameError('Name-ը պետա լրացված լինի...')
    }
    else {
      setNameError('')
    }
    
}

  const emailHandler = (e) => {
      setEmail(e.target.value)
      const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Սխալ Email');
      } else {
        setEmailError('');
      }
  }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          {(nameDirty && nameError) && <div style={{color:'red'}}> {nameError} </div>}
          <input name="name" placeholder="Enter full name..." type="text"  onBlur={e => blurHandler(e)} onChange={nameHandler} />
          <label htmlFor="email">Email</label>
          {(emailDirty && emailError) && <div style={{color:'red'}}> {emailError} </div>}
          <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button disabled={!formValid} type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
