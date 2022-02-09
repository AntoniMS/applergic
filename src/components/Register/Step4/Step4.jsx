import "./Step4.scss";
import React from "react";

const Step4 = () => {
  return (
    <div className="confirm">
      <div className="confirm__hero">
        <h3>Confirma tu selección.</h3>
        <p>
          A continuación te resumimos los alimentos registrados como peligrosos
          para ti.
        </p>
      </div>
      <div className="confirm__allergens">
        <div className="confirm__options">los alergenos confirmados.</div>
        <button className="confirm__new">Añadir nuevos</button>
      </div>

      <button className="confirm__save">CONFIRMAR</button>
    </div>
  );
};

export default Step4;
