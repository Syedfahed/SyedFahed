import React from "react";
import Img from "../image/syed-cropped.png";

export default function connect() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src={Img}
                  alt="img"
                  width="100"
                  className="rounded-circle"
                />
              </div>

              <div className="text-center mt-3">
                <h5 className="mt-2 mb-0">Syed Motesim Fahed</h5>
                <span>web development</span>

                <div className="px-4 mt-1">
                  <h1 className="fonts">Follow On</h1>
                </div>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
