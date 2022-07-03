import React from "react";

import Email from "./Email";
import Footer from "./Footer";

export default function connect() {
  return (
    <>
      <Email />
      <div className="container mt-5">
        <h2 className="center">Follow On</h2>
        <ul className="social-list">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100007310595156">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/syed_fahed21/">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/syed-motesim-fahed-72167222b/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Syedfahed">
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <Footer/>
    </>
  );
}
