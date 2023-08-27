import React from "react";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Card } from "./components/Card";
import { Images } from "./components/Images";
import { MyForm } from "./components/MyForm";
import "./App.css"
import { Route,Routes } from "react-router-dom";

export const App = () => {
  const cardData = [
    {
      titulo: "Cerveza IPA",
      texto: "Texto de descripcion",
      imagen: "IPA.png",
      article: "+Info IPA",
    },
    {
      titulo: "Cerveza APA",
      texto: "Texto de descripcion",
      imagen: "APA.png",
      article: "+Info APA",
    },
    {
      titulo: "Cerveza Roja",
      texto: "Texto de descripcion",
      imagen: "Roja.png",
      article: "+Info Roja",
    },
    {
      titulo: "Cerveza Rubia",
      texto: "Texto de descripcion",
      imagen: "Rubia.png",
      article: "+Info Rubia",
    },
    {
      titulo: "Cerveza Negra",
      texto: "Texto de descripcion",
      imagen: "Negra.png",
      article: "+Info Negra",
    },
  ];

  return (
    <div className="background content">
      <Navbar />
      <Routes>
        <Route exact path="/MyForm" element={<MyForm />} />
      </Routes>
      <div>
        <Carousel />
      </div>
      <div>
        <Images />
      </div>
      <div className="row space-left">
        {cardData.map((card, index) => (
          <div className="col" key={index}>
            <Card
              titulo={card.titulo}
              texto={card.texto}
              imagen={card.imagen}
              article={card.article}
            />
          </div>
        ))}
      </div>
      <div>
        <MyForm />
      </div>
    </div>
  );
};

export default App;
