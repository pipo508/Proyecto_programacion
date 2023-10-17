import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; 
import {Login} from '../components/Login/Login';
import {Home} from "../components/Inicio/Home";
import {Register} from "../components/Register/Register";
export const PublicRoutes = ()=> {
return (
    <Routes>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='*' element={<Navigate to='/' replace />} />

    </Routes>
)
}   
