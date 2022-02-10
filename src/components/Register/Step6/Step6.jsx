import React from "react";
import { Link } from "react-router-dom";
import "./Step6.scss";

const Step6 = ({setStep}) => {
  return (
    <div className="ok">
      <div className="ok__container">
        <img src="/images/loginregister/ko.jpg" alt="mano ko" />

        <div className="ok__info">
          <h3>Ya hay un usuario registrado con ese usuario.</h3>
          <div className="ok__btn">
            <button className="ok__link" onClick={() => setStep(1)}>
              <h4> Probar de nuevo</h4>
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
