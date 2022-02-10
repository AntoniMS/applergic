import React from "react";
import "./Step2.scss";

const Step2 = ({ setStep }) => {
  return (
    <div className="welcome">
      <img src="/images/welcome/logo.png" alt="logo" />
      <img src="/images/welcome/rectangle.png" alt="rectangle" />
      <p>Lleva tu diario de compras y actividades.</p>
      <h5> Saltar</h5>
      <h5
        onClick={() => {
          setStep(3);
        }}
      >
        {" "}
        Siguiente →
      </h5>
    </div>
  );
};
export default Step2;
