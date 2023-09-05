import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { FormRegister} from "../components/Register/FormRegister";
import Footer from "../components/Footer/Footer";
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