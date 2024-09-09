import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
              <li class="nav-item">
                <a class="nav-link" href="#Quinceañera">Sobre mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Date">Fecha</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Location">Lugar</a>
              </li>
              <li>
                <a class="navbar-brand nav-link" href="#MisXV">Mis XV</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#Gifts">Regalos</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#DressCode">Vestimenta</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#Assistance">Asistencia</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar