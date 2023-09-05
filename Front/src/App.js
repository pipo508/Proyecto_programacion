import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Carousel } from "./components/Carrousel/Carousel";
import { Images } from "./components/Imagenes/Images";
import Footer from "./components/Footer/Footer";
import "./App.css"
export const App = () => {
  return (
    <div className="background content">
      <Navbar />
      <Carousel />
      <Images />
      <Footer/>
    </div>
  );
};

export default App;


