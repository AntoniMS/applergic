import React from "react";
import { Link } from "react-router-dom";
import "./Step5.scss";

const Step5 = () => {
  return (
    <div className="ok">
      <nav>
      <Link to="/">
        <img src="../../../images/icons/volver.png" />
      </Link>
      <p>Paso 4 de 4</p>
      </nav>
      <div className="ok__container">
        <img className="okletsgo" src="/images/loginregister/ok.png" alt="mano ok" />

        <div className="ok__info">
          <h3>Hemos terminado, ya puedes escanear tu primer producto.</h3>
          <div className="ok__btn">
            <Link className="ok__link" to="/scan">
              <h4> Escanea un producto</h4>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
