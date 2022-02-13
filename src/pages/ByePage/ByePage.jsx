import React from 'react';
import { Link } from "react-router-dom";
import './ByePage.scss';
import NewPost from '../../components/NewPost/NewPost';

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
        <NewPost/>
    </div>
  );
};

export default ByePage;