import "./Navbar.css";
import Logo from "../images/logo.png";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import {Link} from "react-router-dom";
export const Navbar = () => {
const {user,setUser} = useContext(UserContext);

const handleLogOut = () => {
    setUser({
    logged: false,
    role: ''
    })
    console.log('salir')
    }

    return (
    <div>
        <nav className="navbar navbar-expand-lg nav-backround size-navbar">
            <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center brands zoom underline-on-hover fonts" href="/">
                <img src={Logo} className="logo me-2" alt="Logo" />
                Caver
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            { 
                // admin
                user.role === "1" ? (          
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link zoom underline-on-hover button fonts" aria-current="page" href="/beers">
                            Nuestras Cervezas
                            </a> */}
                        <Link to="/ProductList" className="nav-link zoom underline-on-hover button fonts" >AddProduct</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link zoom underline-on-hover button fonts"onClick={handleLogOut} href="/">
                                Salir
                            </a> */}
                            <Link to="/" className="nav-link zoom underline-on-hover button fonts" aria-current="page" onClick={handleLogOut}>Salir</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link zoom underline-on-hover button fonts"onClick={handleLogOut} href="/">
                                Salir
                            </a> */}
                            <Link to="/Inicio" className="nav-link zoom underline-on-hover button fonts" aria-current="page" onClick={handleLogOut}>Inicio</Link>
                        </li>
                        
                    </ul>
                // usuario
                ) : user.role === "2" ? (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/NuestrasCervezas"className="nav-link zoom underline-on-hover button fonts" aria-current="page">Nuestras Cervezas</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/"className="nav-link zoom underline-on-hover button fonts" aria-current="page" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link zoom underline-on-hover button fonts" aria-current="page" onClick={handleLogOut}>Salir</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ProductList" className="nav-link zoom underline-on-hover button fonts" aria-current="page" onClick={handleLogOut}>Products</Link>
                        </li>
                    </ul>
                // cuando no esta registrado
                ) : (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link zoom underline-on-hover button fonts" href="/">
                                Home
                            </a> */}
                            <Link to="/" className="nav-link zoom underline-on-hover button fonts" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link zoom underline-on-hover button fonts" href="/login">
                                Login
                            </a> */}
                            <Link to="/login" className="nav-link zoom underline-on-hover button fonts" aria-current="page">Login</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link zoom underline-on-hover button fonts" href="/Register">
                                Register
                            </a> */}
                            <Link to="/Register" className="nav-link zoom underline-on-hover button fonts" aria-current="page">Register</Link>
                        </li>
                    </ul>
                    )
                }
                </div>
            </div>
        </nav>
    </div>
    );
};
