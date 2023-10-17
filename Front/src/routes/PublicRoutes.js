import React from "react";
import { Route,Routes } from "react-router-dom"; 
import {Login} from '../components/Login/Login';
import {Home} from "../components/Home";
import {Register} from "../components/Register";
import NuestrasCervezas from "../components/Nuestras_cervezas";
export const PublicRoutes = ()=> {
return (
    <Routes>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/NuestrasCervvezas" element={<NuestrasCervezas/>}/>
    
    </Routes>
)
}   
