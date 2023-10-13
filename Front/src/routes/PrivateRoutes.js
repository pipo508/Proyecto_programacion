import React from "react";
import { Route,Routes } from "react-router-dom"; 
import App from "../App";
import {NuestrasCervezas} from "../pages/Nuestras_cervezas";
import {Register} from "../pages/Register";

export const PrivateRoutes = ()=> {
return (
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Nuestras_cervezas" element={<NuestrasCervezas/>}/>
        <Route path="/Register" element={<Register/>}/>

    </Routes>
)
}
export default PrivateRoutes