import React from "react";
import { Route,Routes } from "react-router-dom"; 
import Login from "../pages/Login";
import App from "../App";
import NuestrasCervezas from "../pages/Nuestras_cervezas";
import Register from "../pages/Register";

export const PublicRoutes = ()=> {
return (
    <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<App/>}/>
        <Route path="/Nuestras_cervezas" element={<NuestrasCervezas/>}/>
        <Route path="/Register" element={<Register/>}/>
    </Routes>
)
}
export default PublicRoutes