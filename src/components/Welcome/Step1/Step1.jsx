import React from "react";
import "./Step1.scss";
import { Link } from "react-router-dom";

const Step1 = ({ setStep }) => {
  return (
    <div className="welcome">
      <div className="welcome__page">
        <img src="/images/welcome/logo.png" alt="logo" />
        <img src="/images/welcome/scan2.png" alt="scan2" />
        <div className="welcome__hero">
          <h3>¡Bienvenido a Applergic!</h3>
          <p>
            Escanea el código de barras de tu producto y Applergic te dirá si es
            apto para ti.
          </p>
        </div>

        <div className="welcome__dots">
          <p className="welcome__dots__blue">&bull;</p>
          <a
            onClick={() => {
              setStep(2);
            }}
          >
            &bull;
          </a>
          <a
            onClick={() => {
              setStep(3);
            }}
          >
            &bull;
          </a>
          <a
            onClick={() => {
              setStep(4);
            }}
          >
            &bull;
          </a>
        </div>
        <div className="welcome__buttons">
          <Link className="welcome__link" to="/login">
            <h5> Saltar </h5>
          </Link>

          <h5
            onClick={() => {
              setStep(2);
            }}
          >
            {" "}
            Siguiente →{" "}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default Step1;
