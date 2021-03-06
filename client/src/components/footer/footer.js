import React from "react";
import "../styles/footer.css";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import react from "../images/react.png";
import nodejs from "../images/node.png";
import html from "../images/html.png";
import css from "../images/css.png";
import jquery from "../images/jquery.png";
import mongo from "../images/mongo.png";
import EJS from "../images/EJS.png";

function Footer() {
  return (
    <div>

      <div id="contact">
    <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-green">Contact</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4" style={{color: "white"}}>
          Phone Number- (226)-759-5872
          <br></br>
          Email- magditiea@gmail.com
          </p>
          <a href="https://www.instagram.com/ttmaggs/" class="fa fa-instagram"></a>
          <a href="https://www.linkedin.com/in/magdi-tiea-6b56071b9/" class="fa fa-linkedin"></a>
          <a href="https://github.com/ttmgs" class="fa fa-github"></a>

<h5>programs I use</h5>
<p style={{color: "white"}}> React, Node.js, EJS, Javascript, HTML, CSS, JQuery, MongoDB, NOSQL </p>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Footer;