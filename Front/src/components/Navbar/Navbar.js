import "./Navbar.css";
import Logo from "../images/logo.png";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export const Navbar = () => {
const {user,setUser} = useContext(UserContext);

const handleLogOut = () => {
    setUser(false)
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
                        
                    </ul>
                // usuario
                ) : user.role === "2" ? (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link zoom underline-on-hover button fonts" aria-current="page" href="/Nuestras_cervezas">
                            Nuestras Cervezas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link zoom underline-on-hover button fonts" href="#">
                            Nuestro Menu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link zoom underline-on-hover button fonts" href="/">
                            Home
                            </a>
                        </li>
                    </ul>
                // cuando no esta registrado
                ) : (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link zoom underline-on-hover button fonts" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link zoom underline-on-hover button fonts" href="/login">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link zoom underline-on-hover button fonts" href="/Register">
                                Register
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link zoom underline-on-hover button fonts"onClick={handleLogOut} href="/Register">
                                Salir
                            </a>
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
