import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg nav-backround">
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
                <li className="nav-item">
                  <a className="nav-link zoom underline-on-hover button fonts" href="/Login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
};
