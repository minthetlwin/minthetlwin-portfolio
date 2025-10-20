import React from "react";
import '../../assets/css/style.css';

export default function Footer(){
    return(
        <section class="footer">

  <div class="box-container">

      <div class="box">
          <h3>Min Thet Lwin | Portfolio</h3>
          <p>Thanks for exploring my work! Keep the conversation going — connect with me online. </p>
      </div>

  </div>

  <h1 class="credit"><p>&copy; {new Date().getFullYear()} Min Thet Lwin. All rights reserved.</p></h1>

</section>
    )
}