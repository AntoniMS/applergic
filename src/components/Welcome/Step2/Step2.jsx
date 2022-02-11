import React from "react";
import "./Step2.scss";

const Step2 = ({ setStep }) => {
  return (


    <div className="welcome">
    <div className="welcome__page">
    <img src="/images/welcome/logo.png" alt="logo" />
      <img src="/images/welcome/rectangle.png" alt="rectangle" />
      <div className="welcome__hero">
        
        <p>
        Lleva tu diario de compras y actividades.
        </p>
      </div>

      <div className="welcome__dots">
        <a>&bull;</a>
        <p className="welcome__dots__blue">&bull;</p>
        <a>&bull;</a>
        <a>&bull;</a>
      </div>

      <div className="welcome__buttons">
        <div>
          <a href="/login">Saltar</a>
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
