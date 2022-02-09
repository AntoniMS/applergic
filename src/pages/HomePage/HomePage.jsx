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
            src="/images/home/logoApplergicFinal@2x.png"
            alt="logo Applergic"
          />
        </div>

        <div className="home__main">
          <div className="home__btn">
            <Link className="home__link" to="/scan">
              <img src="/images/home/barcode2.png" alt="Logo barcode" />
              <h4>Escaner</h4>
            </Link>
            <p>Escanea un nuevo producto.</p>
          </div>

          <div className="home__btn">
            <Link className="home__link home__link--search" to="/search">
              <img src="/images/home/buscar.png" alt="Logo buscar" />
              <h4>Buscar</h4>
            </Link>
            <p>Busca un comercio o restaurante para ti.</p>
          </div>

          <div className="home__btn">
            <Link className="home__link home__link--sos" to="/sos">
              <img src="/images/home/sos1.png" alt="Logo sos" />
              <h4> S.O.S.</h4>
            </Link>
            <p>¿Necesitas ayuda urgente? contactamos con emergencias.</p>
          </div>
        </div>
      </div>
      <div className="home__footer">
        <Link to="/">
          <img src="/images/home/homeazul@2x.png" alt="Logo home" />
        </Link>

        <Link to="/login">
          <img src="/images/home/favorito@2x.png" alt="Logo favoritos" />
        </Link>

        <Link to="/diary">
          <img src="/images/home/diario@2x.png" alt="Logo diario" />
        </Link>

        <Link to="/register">
          <img src="/images/home/red@2x.png" alt="Logo redes" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
