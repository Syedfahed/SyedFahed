import React from 'react'
import img from './image/syed-cropped.png'
import {Link} from "react-router-dom"
function Profile() {
  return (
    <>
    <div className='center'>
        <img className='profilePic' src={img} alt="img"/> <br></br>
       <h4>Hi I’m Syed Motesim Fahed</h4>
I'm a Professional Front-end Developer. I’ve been working with HTML5, CSS3, Bootstrap, Javascript, Jquery, Ajax, WordPress, React, Php and mongo compass server.
Always up for opportunities where I can show my abilities to solve problems and Bring ease in people's lives.
 <br></br>Will make your imaginations come true😊 
        <br></br>
    </div>
    <div className='center'>
      <Link className='About' to="/about">About More</Link>
    </div>
   </>
  );
  }  

export default Profile
<<<<<<< HEAD







=======
>>>>>>> 4f41d388a854531d9471db8c594439c0c27e5297
