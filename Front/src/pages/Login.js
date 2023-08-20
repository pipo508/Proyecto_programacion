import React from "react";
import { Navbar } from "../components/Navbar";
import { MyForm } from "../components/MyForm";
export const Login = ()=> {
  return (
        <div className="background "> 
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