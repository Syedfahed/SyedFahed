
import emailjs from "emailjs-com"
export default function Email() {
    function sendEmail(e){
         
         emailjs.sendForm("service_sjra0ik","template_0n55rgh", e.target,"CfaqL2GH02i7espVX").then(res=>{
            console.log(res)
         }).catch(err=>console.log(err))
    }

  return (
<>

<div className='container  email-box'>
    <h2 className='center'>Get In Touch</h2>
    <form className='form' onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' placeholder='username'  name="name" className='text'></input>
        <label>Email</label>
        <input type="email" placeholder='username@gmail.com'  name="user_email"/>
        <label>Message</label>
        <textarea placeholder="Hello I'm......." name='message' rows="4" />
        <button className='btn form-btn' id='form-btn'>Send</button>
        
    </form> 
</div>
</>
   )
}
