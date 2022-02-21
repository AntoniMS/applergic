import React from "react";
import "./Step2.scss";
import { Link } from "react-router-dom";

const Step2 = ({ setStep }) => {
  return (
    <div className="welcome">
      <div className="welcome__page">
        <img src="/images/welcome/logo.png" alt="logo" />
        <img src="/images/welcome/rectangle.png" alt="rectangle" />
        <div className="welcome__hero">
          <p>Lleva tu diario de compras y actividades.</p>
        </div>

        <div className="welcome__dots">
          <a
            onClick={() => {
              setStep(1);
            }}
          >
            &bull;
          </a>
          <p className="welcome__dots__blue">&bull;</p>
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
          <div>
            <Link className="welcome__link" to="/login">
              <h5> Saltar </h5>
            </Link>
          </div>
          <div>
            <h5
              onClick={() => {
                setStep(3);
              }}
            >
              {" "}
              Siguiente →{" "}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step2;
