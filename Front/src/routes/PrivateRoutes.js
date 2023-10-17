import React from "react";
import { Route,Routes, Navigate } from "react-router-dom"; 
import App from "../App";
import {NuestrasCervezas} from "../components/Nuestras_cervezas";


export const PrivateRoutes = ()=> {
return (
    <Routes>
        <Route path="/NuestrasCrevezas" element={<NuestrasCervezas/>}/>
        <Route path='*' element={<Navigate to='/login' replace />} />

    </Routes>
)
}
export default PrivateRoutes