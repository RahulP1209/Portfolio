import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onButtonClick = () => {
     
      fetch("SamplePDF.pdf").then((response) => {
          response.blob().then((blob) => {
           
              const fileURL =
                  window.URL.createObjectURL(blob);
                   
              let alink = document.createElement("a");
              alink.href = fileURL;
              alink.download = "rahul_resume.pdf";
              alink.click();
          });
      });
    };
    
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "313309f2-0b4d-4db6-9793-a392ca3064a6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    
  };

  return (
    <div id="con">
      <h2 className="contactTitle">Contact Me</h2>
      <div id='contact'>
        <div className="contact-col">
          <h3>Send me a Message <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through contact form or find our my contact 
              information below. Your feedback, questions, and suggestions are 
              important to me as I strive to provide exceptional service to my 
              clients.
          </p>
          <ul>
              <li><img src={mail_icon} alt="" />rahul120901@gmail.com</li>
              <li><img src={phone_icon} alt="" />+91 9113388165</li>
              <li><img src={location_icon} alt="" />Noida, UP - India</li>
          </ul>
          <button className='btn' onClick={onButtonClick}> My Resume</button>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type="text" name="name" placeholder='Enter your name' required/>
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
              <label>Email</label>
              <input type="email" name="email" placeholder='Enter your Email' required/>
              <label>Write your message here</label>
              <textarea name="message" rows="6" placeholder='Enter you message' required></textarea>
              <button type='submit' className='btn'>Submit</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact