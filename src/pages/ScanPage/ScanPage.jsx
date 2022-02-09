import React, { useState } from "react";
import './ScanPage.scss';

import Code from "../../components/Scan/Code/Code";

const ScanPage = () => {
    const [selected, setSelected] = useState('ean13');

    return (
        <div className='scanPage-container'>
        
            <h2>Componente Escaneando...</h2>
           
            <p>Tan solo tienes que centrar el código de barras del producto en el recuadro</p>
            <div className="imgScan-container"></div> 
            <div className="scanAssets-container">
                { <Code type="qr" isSelected={selected === 'qr'} /> }
                { <Code type="ean13" isSelected={selected === 'ean13'} /> }
            </div>  
        </div>
    );
};

export default ScanPage;
