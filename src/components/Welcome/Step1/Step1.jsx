import React from "react";
import "./Step1.scss";

//welcome 0 al pasar por primera vez o alguien le de a saltar, crear una variable en localStorage (Intro: true) y si
// y si es true que vaya directamente a home.

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
          <a>&bull;</a>
          <a>&bull;</a>
          <a>&bull;</a>
        </div>
      </div>
      <div className="welcome__buttons">
        <div>
          <a href="/login">Saltar</a>
        </div>
        <div>
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
