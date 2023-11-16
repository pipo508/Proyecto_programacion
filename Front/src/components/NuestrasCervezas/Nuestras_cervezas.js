import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Card } from "../Card/Card";
import Hr from "../Hr/Hr";

// Importa las imágenes con la URL completa
import IPAImage from "../images/IPA.png";
import APAImage from "../images/APA.png";
import RojaImage from "../images/Roja.png";
import RubiaImage from "../images/Rubia.png";
import NegraImage from "../images/Negra.png";
import "./Nuestras_cervezas.css";
import Footer from "../Footer/Footer";
export const NuestrasCervezas = () => {
return (
    <div className="background content ">
        <Navbar />
        <Hr />
        <div>
            <div>
                <div className='row space-left'>
                    <div className="col card-image">
                        <Card
                            titulo="Cerveza IPA"
                            
                            texto="Una explosión tropical de lúpulos que despierta tus sentidos con frescura audaz."
                            imagen={IPAImage}
                        />
                    </div>
                    <div className="col">
                        <Card
                        titulo="Cerveza APA"
                        texto="Una American Pale Ale vibrante con lúpulos cítricos, perfecta para aventuras refrescantes."
                        imagen={APAImage}
                        />
                    </div>
                    <div className="col">
                        <Card
                        titulo="Cerveza Roja"
                        texto="Cerveza roja con notas frutales y caramelo, equilibrio perfecto entre dulzura y amargor."
                        imagen={RojaImage}
                        />
                    </div>
                    <div className="col">
                        <Card
                        titulo="Cerveza Rubia"
                        texto="Una cerveza rubia suave y dorada con toques refrescantes y un final delicadamente equilibrado."
                        imagen={RubiaImage}
                        />
                    </div>
                    <div className="col">
                        <Card
                        titulo="Cerveza Negra"
                        texto="Cerveza negra robusta con toques de café y chocolate, una experiencia intensa y seductora.."
                        imagen={NegraImage}
                        />
                    </div>
                </div>
            </div>
            <Hr />
            <div>  
                <Footer />
            </div>
        </div>
        </div>
);
};

export default NuestrasCervezas;
