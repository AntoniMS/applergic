import React from "react";
import "./Code.scss";

const Code = ({ type, isSelected }) => {
    const codeImages = { 
        'qr': {
            'image':'https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/78F6C2BA-D0FD-4E0E-9D65-DAB96C71FFD3.png',
            'title': 'Código QR'
        },
        'ean13': {
            'image': 'https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/9856C95E-C5C9-4867-BD00-5458AA869E60.png',
            'title': 'Código de Barras'
        },
    };
 
    const changeCodeType = () => {

    }
    return (
        <div className={`code-button${isSelected ? " selected " : " "}code-button-${type}`}>
            
             <p>{codeImages[type].title}</p>
        </div>
    );
};

export default Code;