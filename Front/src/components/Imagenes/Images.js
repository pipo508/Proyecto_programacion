import React from "react";
import Imagen_2 from "../images/fondo.jpg"
import "./Images-styles.css"
import Imagen_3 from "../images/fabrica.jpg"
import Imagen_4 from "../images/hombres.jpg"
export const Images = () => {
    return(
    <div id="rubias" className="row">
        <div className="col text-center zoom underline-on-hover">
            <img src={Imagen_3} className="border_1" style={{ width: '60%', height: '80%', justifyContent: 'center', marginBottom: '1%' }} alt="..." />
            <h1>Nuestra Fabrica</h1>
        </div>
        <div className="col text-center zoom underline-on-hover">
            <img src={Imagen_2} className="border_1" style={{ width: '60%', height: '80%', justifyContent: 'center', marginBottom: '1%' }} alt="..." />
            <h1 >Nuestra Mision</h1>
        </div>
        <div className="col text-center zoom underline-on-hover">
            <img src={Imagen_4} className="border_1" style={{ width: '60%', height: '80%', justifyContent: 'center', marginBottom: '1%' }} alt="..." />
            <h1>Nuestra Politica</h1>
            </div>
    </div>
)
}