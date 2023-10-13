import React from "react";
import { Route,Routes,Navigate } from "react-router-dom"; 
import {Login} from '../components/Login/Login';
import App from "../App";
import {NuestrasCervezas} from "../pages/Nuestras_cervezas";
import {Register} from "../pages/Register";

export const PublicRoutes = ()=> {
return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<App/>}/>
        <Route path="/Nuestras_cervezas" element={<NuestrasCervezas/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path='*' element={<Navigate to='/' replace />} />

    </Routes>
)
}
export default PublicRoutes