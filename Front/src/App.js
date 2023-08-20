import React from "react";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Images } from "./components/Images";
import "./App.css"
import Footer from "./components/Footer";

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


