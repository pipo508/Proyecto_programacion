
import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Carousel } from "../Carrousel/Carousel";
import { Images } from "../Imagenes/Images";
import Footer from "../Footer/Footer";
import "./Inicio.css";
export const Inicio = ()=> {
return (
    <div className="background content">
        <Navbar />
        <Carousel />
        <Images />
        <Footer/>
    </div>
)
}
export default Inicio