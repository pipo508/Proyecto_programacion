import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Carousel } from "./components/Carrousel/Carousel";
import { Images } from "./components/Imagenes/Images";
import "./App.css"
import Footer from "./components/Footer/Footer";

export const App = () => {
  return (
    <div className="background">
      <Navbar />
      <Carousel />
      <Images />
      <Footer/>
    </div>
  );
};

export default App;


