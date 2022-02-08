import "./HomePage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <nav>menu</nav>

      <div className="home__container">
        <div className="home__logo">
          <img
            src="/images/home/logoApplergicFinal.png"
            alt="logo Applergic"
          />
        </div>

        <div className="home__main">
          <div className="home__btn">
            <Link className="home__link" to="/scan">
              <img src="/images/home/barcode2.png" alt="logo barcode" />
              <h3>Escaner</h3>
            </Link>
            <p>Escanea un nuevo producto.</p>
          </div>

          <div className="home__btn">
            <Link className="home__link" to="/search">
              <img src="/images/home/buscar.png" alt="logo buscar" />
              <h3>Buscar</h3>
            </Link>
            <p>Busca un comercio o restaurante para ti.</p>
          </div>

          <div className="home__btn">
            <Link className="home__link" to="/sos">
            <img src="/images/home/sos1.png" alt="logo sos" />
              <h3>S.O.S.</h3>
            </Link>
            <p>¿Necesitas ayuda urgente? contactamos con emergencias.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
