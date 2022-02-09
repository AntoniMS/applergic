import React from "react";
import "./Step1.scss";

const Step1 = ({ setStep }) => {
  return (
    
      
      <div>

        <img src="/images/welcome/logo.png" alt="logo" />
        <img src="/images/welcome/scan2.png" alt="scan2" />
        <p>¡Bienvenido a Applergic! escanea el código de barras de tu producto y Applergic te dirá si es apto para ti.</p>
        <h5> Saltar</h5> 
        <h5 onClick={(()=>{setStep(2)})}> Siguiente </h5>
    </div>
    
  );
}
export default Step1;  
        
         

            
        