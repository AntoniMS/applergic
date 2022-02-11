import React from "react";
import "./Step4.scss";
import { Link } from "react-router-dom";
const Step4 = ({ setStep }) => {
  return (
    <div className="welcome">
      <div className="welcome__page">
        <img src="/images/welcome/logo.png" alt="logo" />
        <img src="/images/welcome/traduccion.png" alt="traduccion" />
        <div className="welcome__hero">
          <p>
            Viaja a donde quieras. Tendrás a tu disposición un traductor
            off-line y tu informe de alergias e intolerancias traducido al
            idioma local.
          </p>
        </div>
        <div className="welcome__dots">
          <a>&bull;</a>
          <a>&bull;</a>
          <a>&bull;</a>
          <p className="welcome__dots__blue">&bull;</p>
        </div>
        <div className="welcome__buttons">
          <Link className="welcome__link" to="/login">
            <h5> Saltar </h5>
          </Link>

          <Link className="welcome__link" to="/login">
            <h5>Terminar</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Step4;
