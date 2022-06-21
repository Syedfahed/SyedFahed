import React from "react";
import {Link} from "react-router-dom"
export default function NavBar(pro) {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {pro.Name}
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page"to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/connect">
                  Connect
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
