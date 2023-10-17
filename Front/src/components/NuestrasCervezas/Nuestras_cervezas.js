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
                            texto="Aromática y amarga, perfecta para los amantes del lúpulo."
                            imagen={IPAImage}
                        />
                    </div>
                    <div className="col">
                        <Card
                        titulo="Cerveza APA"
                        texto="Refrescante y equilibrada, ideal para cualquier ocasión."
                        imagen={APAImage}
                        />
                    </div>
                    <div className="col">
                        <Card
                        titulo="Cerveza Roja"
                        texto="Notas tostadas y dulces, una experiencia única en sabor."
                        imagen={RojaImage}
                        />
                    </div>
                    <div className="col">
                        <Card
                        titulo="Cerveza Rubia"
                        texto="Suave y ligera, para disfrutar en días soleados."
                        imagen={RubiaImage}
                        />
                    </div>
                    <div className="col">
                        <Card
                        titulo="Cerveza Negra"
                        texto="Intensa y oscura, cautivará a los amantes del malta."
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
