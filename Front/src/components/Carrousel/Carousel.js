import React from "react";
import APA from "../images/APA.png"
import IPA from "../images/IPA.png"
import ROJA from "../images/Roja.png"
import RUBIA from "../images/Rubia.png"
import VINO from "../images/vino1.png"
import NEGRA from "../images/Negra.png"
import "./Carousel-styles.css"
import Hr from "../Hr/Hr";
import {Link} from "react-router-dom";
export const Carousel = () => {
    return(
  <div id="carouselExample" className="carousel slide">
    <Hr /> 
    <div className="carousel-inner background-carousel">
      <div className="carousel-item active">
        <div className="inline-content">
          <h1 className="underline-on-hover"><Link to="/NuestrasCervezas">Nuestras Cervezas</Link></h1>
          <img className="carousel-image zoom" src={RUBIA} alt="hola"/> 
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><Link to="/NuestrasCervezas">Nuestras Cervezas</Link></h1>
          <img className="carousel-image zoom" src={ROJA} alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><Link to="/NuestrasCervezas">Nuestras Cervezas</Link></h1>
          <img className="carousel-image zoom" src={IPA} alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><Link to="/NuestrasCervezas">Nuestras Cervezas</Link></h1>
          <img className="carousel-image zoom" src={VINO} alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><Link to="/NuestrasCervezas">Nuestras Cervezas</Link></h1>
          <img className="carousel-image zoom" src={NEGRA} alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><Link to="/NuestrasCervezas">Nuestras Cervezas</Link></h1> 
          <img className="carousel-image zoom" src={APA} alt="..."/>
        </div> 
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    <Hr />
  </div>
)
}