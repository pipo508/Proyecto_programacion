import React from "react";
import APA from "../images/APA.png"
import IPA from "../images/IPA.png"
import ROJA from "../images/Roja.png"
import RUBIA from "../images/Rubia.png"
import VINO from "../images/vino1.png"
import NEGRA from "../images/Negra.png"
import "./Carousel-styles.css"
export const Carousel = () => {
    return(
  <div id="carouselExample" className="carousel slide">
    <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
    <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: '0px', marginBottom: '0px' }} />
    <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
    <div className="carousel-inner background-carousel">
      <div className="carousel-item active">
        <div className="inline-content">
          <h1 className="underline-on-hover"><a href="/Nuestras_cervezas">Cervezas RUBIAS</a></h1>
          <img className="carousel-image zoom" src={RUBIA} alt="hola"/> 
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><a href="/Nuestras_cervezas">Cervezas Rojas</a></h1>
          <img className="carousel-image zoom" src={ROJA} alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><a href="/Nuestras_cervezas">Cervezas IPAS</a></h1>
          <img className="carousel-image zoom" src={IPA} alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><a href="/Nuestras_cervezas">VINOS</a></h1>
          <img className="carousel-image zoom" src={VINO} alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><a href="/Nuestras_cervezas">Cervezas NEGRAS</a></h1>
          <img className="carousel-image zoom" src={NEGRA} alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="inline-content">
          <h1 className="underline-on-hover"><a href="/Nuestras_cervezas">Cervezas APAS</a></h1>
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
    <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
    <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: '0px', marginBottom: '0px' }} />
    <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '50px' }} />
  </div>
)
}