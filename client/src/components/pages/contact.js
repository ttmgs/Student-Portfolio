import React from "react";
import { useState } from "react";
import "../styles/contact.css";


const Contact = () => {



  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:8080/send", {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
    .then((res) => res.json()) 
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success") {
        alert("Message Sent");
      } else if (resData.status === "fail") {
        alert("Message failed to send");
      }
      setMailerState({
        email: "",
        name: "",
        message: "",
      });
    });
  };









  return (

    <div>

    <h3>Connect with Me</h3>
    <div class="container"/>
      <form onSubmit={submitEmail}>
        <label for="fname">First Name</label>
        <input type="text" id="name" name="name" onChange={handleStateChange} value={mailerState.name} placeholder="Your name.."/>
    
        <label for="email">Email</label>
        <input type="text" id="email" name="email" onChange={handleStateChange} value={mailerState.email} placeholder="Your email.." />
    
        {/* <label for="country">Country</label>
        <select id="country" name="country"> 
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select> */}
    
        <label for="message">Message</label>
        <textarea id="subject" name="message" type="text" onChange={handleStateChange} value={mailerState.message} placeholder="Write something.."></textarea>
    
        <button>Send Email</button>
        </form>
        </div>
        
      
      

  );
};

export default Contact;
