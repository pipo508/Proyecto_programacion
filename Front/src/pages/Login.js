import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { MyForm } from "../components/Form/MyForm";
export const Login = ()=> {
    return (
        <div className="background content "> 
            <div>
                <Navbar/>
            </div>
            <div>
                <MyForm/> 
            </div>    
        </div>
)
}
export default Login