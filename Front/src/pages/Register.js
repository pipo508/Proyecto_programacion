import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { FormRegister} from "../components/Register/FormRegister";
import Footer from "../components/Footer/Footer";
export const Register = ()=> {
    return (
        <div className="background "> 
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