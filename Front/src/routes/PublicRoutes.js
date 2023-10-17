import React from "react";
import { Route,Routes,Navigate } from "react-router-dom"; 
import {Login} from '../components/Login/Login';
import {NuestrasCervezas} from "../pages/Nuestras_cervezas";
import {Register} from "../pages/Register";
import {Home} from "../components/Home";
export const PublicRoutes = ()=> {
return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Nuestras_cervezas" element={<NuestrasCervezas/>}/>
        <Route path='*' element={<Navigate to='/' replace />} />

    </Routes>
)
}
