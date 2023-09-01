import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Card } from "../components/Card/Card";
import Hr from "../components/Hr/Hr";

// Importa las imágenes con la URL completa
import IPAImage from "../components/images/IPA.png";
import APAImage from "../components/images/APA.png";
import RojaImage from "../components/images/Roja.png";
import RubiaImage from "../components/images/Rubia.png";
import NegraImage from "../components/images/Negra.png";

export const NuestrasCervezas = () => {
return (
    <div className="background">
        <Navbar />
        <Hr />
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
    </div>
);
};

export default NuestrasCervezas;
