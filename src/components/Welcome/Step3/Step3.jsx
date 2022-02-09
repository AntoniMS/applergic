import React from "react";

import "./Step3.scss";

const Step3 = ({ setStep }) => {
  return (
    
      
      <div>

        <img src="/images/welcome/logo.png" alt="logo" />
        <img src="/images/welcome/ambulancia.png" alt="Ambulancia"/>
        <p>En caso de emergencia nos pondremos en cotacto con la persona que nos digas.</p>
        <h5> Saltar</h5> 
        <h5 onClick={(()=>{setStep(4)})}> Siguiente → </h5>
    </div>
    
  );
}
export default Step3; 