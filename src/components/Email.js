import React from 'react'
import emailjs from "emailjs-com"
export default function Email() {
    function sendEmail(e){
         e.preventDefault()
         emailjs.sendForm("service_sjra0ik","template_0n55rgh", e.target,"CfaqL2GH02i7espVX").then(res=>{
            console.log(res)
         }).catch(err=>console.log(err))
    }
  return (
<>
<div className='container border email-box'>
    <h2 className='center'>Get In Touch</h2>
    <form className='form' onSubmit={sendEmail}>
        <label>Name</label>
        <input placeholder='username' type="name" name="name" className='form-control'/>
        <label>Email</label>
        <input placeholder='username@gmail.com' type="email" name="user_email" className='form-control'/>
        <label>Message</label>
        <textarea placeholder="Hello I'm......." name='message' rows="4" />
        <button className='btn form-btn' id='form-btn'>Send</button>
    </form> 
</div>

</>
   )
}
