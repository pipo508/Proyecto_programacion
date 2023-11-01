import React from "react";
import { Route,Routes } from "react-router-dom"; 
import {NuestrasCervezas} from "../components/NuestrasCervezas/Nuestras_cervezas";
import {Home} from "../components/Inicio/Home";
import {Product} from "../components/Product/Product"
import { ProductList } from "../components/ProductList";
export const PrivateRoutes = ()=> {
return (
    <Routes>
        <Route path="/NuestrasCervezas" element={<NuestrasCervezas/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/ventas" element={<ProductList/>}/>
        <Route path="/ProductList" element={<Product/>}/>
        <Route path='/Home' element={<Home/>} />
        {/* <Route path='*' element={<Navigate to='/' replace />} /> */}


    </Routes>
)
}
export default PrivateRoutes