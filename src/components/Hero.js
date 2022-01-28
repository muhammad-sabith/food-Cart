import React from "react";
import '../app.css'
import{mainImage} from '../Constence'

function Hero() {
  return (
    <div className="hero">
      <img
        src={mainImage}
        alt=""
      />
      <div className="hero-content">
        <h1>Its all about good food & taste</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis
          distinctio odio, ea dolorem veritatis laborum optio ut.
        </p>
      </div>
    </div>
  );
}

export default Hero;
