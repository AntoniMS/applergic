import React from "react";
import "./EAN13.scss";
import { ScanContext } from "../../../pages/ScanPage/ScanPage"

const EAN13 = () => {
    return (
        <div className='scanPage-container'>
        
            <h2>Componente Escaneando...</h2>
           
            <p>Tan solo tienes que centrar el código de barras del producto en el recuadro</p>

            <div className="imgScan-container">
                
            </div> 
            <div className='scanAssets-container'>
                <div className='code'>
                    <img src='https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/78F6C2BA-D0FD-4E0E-9D65-DAB96C71FFD3.png'/>
                    <p>Codigo de barras</p>
                </div>
                <div className='code'>
                    <img src='https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/9856C95E-C5C9-4867-BD00-5458AA869E60.png'/> 
                    <p>Codigo QR</p>
                </div>
                <div className='code'>
                    <img src='https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/80EC5F2A-CC91-43F7-9D76-1C13BE2A43B0.png'/>
                    <p>NFC</p>
                </div>
            </div>   
                   
        </div>

    );
};
export default EAN13;
