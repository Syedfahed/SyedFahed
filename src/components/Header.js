import React from 'react'
import Hm from "../image/icon-hamburger.svg"
import { Link } from 'react-router-dom'
import Logo from "../image/7730252.jpg"
export default function Header() {
    function uncheckbox(){
       document.getElementById("toggle").checked = false;
    }
  return (
  
   <>
    <header>
        <div className="containner">
            <nav>
                
          <img  src={Logo} alt="" class="logo-sf"/>
                <input type="checkbox" className="check" id="toggle"/>
                <label for="toggle" className="humburgar" id="humburgar">
                    <img src={Hm} alt=""/>
                </label>

                <ul className="nav-ul" id="nav-ul">
                    <li onClick={uncheckbox} className="nav-link"><Link to="/">Home</Link></li>
                    <li onClick={uncheckbox} className="nav-link"><Link to="/about">About</Link></li>
                    <li onClick={uncheckbox} className="nav-link"><Link to="/project">Project</Link></li>
                    <li onClick={uncheckbox} className="nav-link"><Link to="/connect">Connect</Link></li>
                </ul>
            </nav>
        </div>
    </header>
   
   </>
  )
}
