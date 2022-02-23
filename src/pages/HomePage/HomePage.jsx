import "./HomePage.scss";
import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { JwtContext } from "../../shared/contexts/JwtContext";

const HomePage = () => {
  const { setJwt } = useContext(JwtContext);
  const menu = useRef(null);
  const navigate = useNavigate();

  let items = [
    { label: "", icon: "pi pi-fw pi-times closebutton" },

    {
      label: "Perfil",
      icon: "pi pi-fw pi-user",
      command: () => {
        navigate("/profile");
      },
    },
    {
      label: "Favoritos",
      icon: "pi pi-fw pi-star",
      command: () => {
        navigate("/favs");
      },
    },
    {
      label: "Diario",
      icon: "pi pi-fw pi-book",
      command: () => {
        navigate("/diary");
      },
    },
   /*  {
      label: "Compartir",
      icon: "pi pi-fw pi-share-alt",
      command: () => {
        navigate("/");
      },
    }, */
    {
      label: "Informe",
      icon: "pi pi-fw pi-file-pdf",
      command: () => {
        navigate("/diaryDetail");
      },
    },
    // {
    //   label: "Términos",
    //   icon: "pi pi-fw pi-info-circle",
    //   command: () => {
    //     navigate("/welcome");
    //   },
    // },
    {
      label: "Salir",
      icon: "pi pi-fw pi-sign-out",
      command: () => {
        setJwt(null);
        localStorage.removeItem("token");
        localStorage.removeItem('user');
        localStorage.removeItem('expiredToken');
        navigate("/bye");
      },
    },
  ];

  return (
    <div className="home">
      <div className="home__nav">
        <Menu className="home__menu" model={items} popup ref={menu} />
        <Button
          label=""
          icon="pi pi-bars"
          onClick={(event) => menu.current.toggle(event)}
        />
      </div>
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
            <a className="home__link home__link--search" target="_blank" rel="noreferrer" href="https://www.google.es/maps/search/restaurantes+alergicos/">
              <img src="/images/home/buscar.png" alt="Logo buscar" />
              <h4>Buscar</h4>
            </a>
            <p>Busca un comercio o restaurante para ti.</p>
          </div>

          <div className="home__btn">
            <a className="home__link home__link--sos" href="tel:112">
              <img src="/images/home/sos1.png" alt="Logo sos" />
              <h4> S.O.S.</h4>
            </a>
            <p>¿Necesitas ayuda urgente? contactamos con emergencias.</p>
          </div>
        </div>
      </div>
      <div className="home__footer">
        <Link to="/">
          <img src="/images/home/homeazul@3x.png" alt="Logo home" />
        </Link>

        <Link to="/favs">
          <img src="/images/home/favorito@3x.png" alt="Logo favoritos" />
        </Link>

        <Link to="/diary">
          <img src="/images/home/diario@3x.png" alt="Logo diario" />
        </Link>
          <SocialMedia/>
        
      
        
      </div>
    </div>
  );
};

export default HomePage;
