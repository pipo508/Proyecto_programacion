import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { FormRegister} from "./FormRegister";
import Footer from "../Footer/Footer";
import "./Register.css"
export const Register = ()=> {
    return (
        <div className="background content"> 
            <div>
                <Navbar/>
            </div>
            <div>
                <FormRegister/>
            </div>  
            <div>
                <Footer/>
            </div>   
        </div>
)
}
export default Register