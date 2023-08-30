import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import {Card} from "../components/Card/Card";
import Hr from "../components/Hr/Hr";

export const NuestrasCervezas = () => {
    return (
        <div className="background">
            <Navbar />
            <div>
                <Hr />
                <div className='row space-left'>
                    <div className="col card-image">
                        <Card
                            titulo="Cerveza IPA"
                            texto="Aromática y amarga, perfecta para los amantes del lúpulo."
                            imagen='IPA.png'
                        />
                    </div>
                    <div className="col">
                        <Card
                            titulo="Cerveza APA"
                            texto="Refrescante y equilibrada, ideal para cualquier ocasión."
                            imagen="APA.png"
                        />
                    </div>
                    <div className="col">
                        <Card
                            titulo="Cerveza Roja"
                            texto="Notas tostadas y dulces, una experiencia única en sabor."
                            imagen='Roja.png'
                        />
                    </div>
                    <div className="col">
                        <Card
                            titulo="Cerveza Rubia"
                            texto="Suave y ligera, para disfrutar en días soleados."
                            imagen='Rubia.png'
                    />
                    </div>
                    <div className="col">
                        <Card
                            titulo="Cerveza Negra"
                            texto="Intensa y oscura, cautivará a los amantes del malta."
                            imagen='Negra.png'
                        />
                    </div>
                </div>
            </div>
            <Hr />
        </div>
);
};

export default NuestrasCervezas;
