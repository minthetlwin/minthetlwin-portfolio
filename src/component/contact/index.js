import React from "react";
import { useState } from "react";
import '../../assets/css/style.css';
import ContactMe from '../../assets/image/contact/contactme.png';
 
export default function Contact(){
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const TELEGRAM_BOT_TOKEN = "7926902678:AAEosH713jdgU8WVcqhcvYc8Eieye85Dd5E";
  const CHAT_ID = "1818103587";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `New message from your portfolio:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });
      setStatus("Message sent successfully!");
      // Hide notification after 3 seconds
    setTimeout(() => setStatus(""), 3000);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
      // Hide notification after 3 seconds
    setTimeout(() => setStatus(""), 3000);
    }
  };

    return(
        <section class="contact" id="contact">
  
  <h2 class="heading"><i class="fas fa-headset"></i> Contact Me</h2>

  <div class="container">
    <div class="content">
      <div class="image-box">
        <img draggable="false" src={ContactMe} alt=""></img>
      </div>
    <form id="contact-form" onSubmit={handleSubmit}>
      
      <div class="form-group">
        <div class="field">
          <input type="text" name="name" placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)} required></input>
          <i class='fas fa-user'></i>
        </div>
        <div class="field">
          <input type="email" name="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          <i class='fas fa-envelope'></i>
        </div>
        <div class="message">
        <textarea placeholder="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <i class="fas fa-comment-dots"></i>
        </div>
        </div>
      <div class="button-area">
        <button type="submit">
          Send <i class="fa fa-paper-plane"></i></button>
      </div>
    </form>
  </div>
  </div>
  <div className={`notification ${status ? "show" : ""}`}>
  {status}
</div>

</section>
    )
}