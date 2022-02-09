import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ScanDetailPage.scss';


const ScanDetailPage = () => {
    const [selected, setSelected] = useState()
    return (
        
        <div className='scanPage-container'>
        
            <h2>Aqui tienes el resultado.</h2>
       
            <p>Este producto NO es apto para ti, contiene uva.</p>
            <div className="scan-container"></div>
            
            <div className="ok__info">
                <h3>Matarromera Tinto Crianza 2016 -75cl.</h3>
                <p>Bodega Matarromera</p>
                <input></input>
                <div className="ok__btn">
                    <Link className="ok__link" to="/scan">
                    <h4> Escanea otro producto</h4>
                    </Link>
                </div>
            </div>
        </div>
      );
};

export default ScanDetailPage;