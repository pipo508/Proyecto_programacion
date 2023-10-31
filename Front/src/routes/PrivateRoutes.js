import React from "react";
import { Route,Routes, Navigate } from "react-router-dom"; 
import {NuestrasCervezas} from "../components/NuestrasCervezas/Nuestras_cervezas";
import {Home} from "../components/Inicio/Home";
import { productList } from "../components/productList"
export const PrivateRoutes = ()=> {
return (
    <Routes>
        <Route path="/NuestrasCervezas" element={<NuestrasCervezas/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<productList/>}/>
        <Route path='*' element={<Navigate to='/' replace />} />


    </Routes>
)
}
export default PrivateRoutes