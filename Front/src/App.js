
import React from "react";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Card } from "./components/Card";
import { Images } from "./components/Images";
import { MyForm } from "./components/MyForm";
import "./App.css"
import { Route,Routes } from "react-router-dom";

export const App = ()=> {
  return (
        <div className="background "> 
          <Navbar/>
            <Routes>
              <Route exact path="/MyForm" element={<MyForm/>}/>
            </Routes>
        <div>
        <Carousel />
        </div>
        <div>
          <Images />
        </div> 
      <div className='row space-left'>
        <div className= "col">
        <Card
        titulo="Cerveza IPA"
        texto="Texto de descripcion"
        imagen='IPA.png'
      />
      
      </div>
      <div className= "col">
        <Card
        titulo="Cerveza APA"
        texto="Texto de descripcion"
        imagen="APA.png"
      />
      
      </div>
      <div className= "col">
        <Card
        titulo="Cerveza Roja"
        texto="Texto de descripcion"
        imagen='Roja.png'
      />
      </div>
      <div className= "col">
        <Card
        titulo="Cerveza Rubia"
        texto="Texto de descripcion"
        imagen='Rubia.png'
      />
      </div>
      <div className= "col">
        <Card
        titulo="Cerveza Negra"
        texto="Texto de descripcion"
        imagen='Negra.png'
      />
      </div>
      </div>
      <div>
        <MyForm/>
      </div>

    </div>
    )
}
export default App