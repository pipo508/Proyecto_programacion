
import React from "react";
import { Route,Routes } from "react-router-dom"; 
import Login from "./Login";
import App from "../App";
import NuestrasCervezas from "./Nuestras_cervezas";
export const Principal_page = ()=> {
return (
    <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<App/>}/>
        <Route path="/Nuestras_cervezas" element={<NuestrasCervezas/>}/>
    </Routes>
)
}
export default Principal_page