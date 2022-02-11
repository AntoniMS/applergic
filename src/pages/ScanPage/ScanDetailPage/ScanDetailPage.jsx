import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ScanDetailPage.scss';
import  ScanResult from '../../../components/ScanResult/ScanResult';

const ScanDetailPage = () => {

    return (
        
        <div className="scan">
            <div className="scan__turn-close">
                <Link className="scan__turn-close__turn" to="/scan">
                    <img src="../../../images/icons/volver.png"/>
                </Link>
                <Link className="close" to="/">
                    <img src="/images/icons/close.png" alt="close" />
                </Link>
            </div>
            <h3>Aqui tienes el<br></br>resultado.</h3>
       
            <p>Este producto NO es apto<br></br>para ti, contiene uva.</p>
            <div className="scan__wraper">
                <ScanResult result="unknown"/>
                <div className="scan__wraper__favorites">
                    
                    <img src="../../../images/scan/favorito/favorito.png" alt="star"/>
                    <Link to="/diary">
                        <img src="../../../images/scan/diario/diario.png" alt="diary"/>
                    </Link>
                    <Link to="/">
                        <img src="../../../images/scan/red/red.png" alt="red"/>
                    </Link>
                </div>
            </div>
            <div className="scan__info">
                <h3>Matarromera Tinto Crianza 2016 -75cl.</h3>
                <p>Bodega Matarromera</p>
                <input></input>
                <div className="scan__btn">
                    <Link className="scan__link" to="/scan">
                    <h4> Escanea otro producto</h4>
                    </Link>
                </div>
            </div>
        </div>
    ); 
};

export default ScanDetailPage;