import React from "react";
import { Link } from "react-router-dom";

import "./Step3.scss";

const Step3 = ({ setStep }) => {
  return (
    <div className="welcome">
      <div className="welcome__page">
        <img src="/images/welcome/logo.png" alt="logo" />
        <img src="/images/welcome/ambulancia.png" alt="Ambulancia" />
        <div className="welcome__hero">
          <p>
            En caso de emergencia nos pondremos en cotacto con la persona que
            nos digas.
          </p>
        </div>
        <div className="welcome__dots">
          <a
            onClick={() => {
              setStep(1);
            }}
          >
            &bull;
          </a>
          <a
            onClick={() => {
              setStep(2);
            }}
          >
            &bull;
          </a>
          <p className="welcome__dots__blue">&bull;</p>

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
              setStep(4);
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
export default Step3;
