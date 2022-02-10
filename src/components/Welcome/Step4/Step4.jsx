import React from "react";
import "./Step4.scss";
import { Link } from "react-router-dom";
const Step4 = ({ setStep }) => {
  return (
    <div className="welcome">
      <img src="/images/welcome/logo.png" alt="logo" />
      <img src="/images/welcome/traduccion.png" alt="traduccion" />
      <p>
        Viaja a donde quieras.Tendrás a tu disposición un traductor off-line y
        tu informe de alergias e intolerancias traducido al idioma local.
      </p>
      <h5> Saltar</h5>

      <Link to="/">
        <h5> Terminar </h5>
      </Link>
    </div>
  );
};
export default Step4;
