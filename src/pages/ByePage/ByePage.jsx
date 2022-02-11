import React from 'react';
import { Link } from "react-router-dom";
import './ByePage.scss';

const ByePage = () => {
  return (
    <div className="bye">
        <div className="bye__turn">
            <Link to="/login">
                <img src="../../../images/icons/volver.png"/>
            </Link>
    
        </div>
        <img className='img' src='/images/bye/logoApplergicFigurasGiro/logoApplergicFigurasGiro.png'/>
        <h3>¡Gracias por usar Applergic!</h3>
        <h3>Por favor, evalua tu<br></br> experiencia.</h3>
        <img src='/images/bye/botNSatisfacciN/botNSatisfacciN.png'/>
        
    </div>
  );
};

export default ByePage;