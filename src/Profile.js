import React from 'react'
import img from './image/syed-cropped.png'
import {Link} from "react-router-dom"
function Profile() {
  return (
    <>
    <div className='center'>
        <img className='profilePic' src={img} alt="img"/> <br></br>
       <h4>Hi I’m Syed Motesim Fahed</h4>
<<<<<<< HEAD
<span className='userabout' id='userabout'>I'm a Professional Front-end Developer. I’ve been working with HTML5, CSS3, Bootstrap, Javascript, Jquery, Ajax, React, Php,and Mongodb server.
=======
I'm a Professional Front-end Developer. I’ve been working with HTML5, CSS3, Bootstrap, Javascript, Jquery, Ajax, React, Php and mongodb compass server.
>>>>>>> 0c4e760c2812b7b905894f01ab611fb342ff5197
Always up for opportunities where I can show my abilities to solve problems and Bring ease in people's lives.
 <br></br>Will make your imaginations come true😊 </span>
        <br></br>
    </div>
    <div className='center'>
      <Link className='About' to="/about">About More</Link>
    </div>
   </>
  );
  }  

export default Profile






