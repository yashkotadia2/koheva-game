import React from "react";
import logo from '../image/koheva_logo.png' 
import 'animate.css';
import '../css/splash.css'


export default function Splash() {
  return <div className="splash_container d-flex flex-column align-items-center">
      <img class="animate__animated animate__zoomIn" src={logo} width="50%"></img>
      <div className="sub_heading_text animate__animated animate__flipInX animate__delay-3s animate__flipOutX"><i>The Art of Finest Skincare</i></div>
  </div>;
}
