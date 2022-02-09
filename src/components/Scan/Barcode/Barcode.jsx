import Quagga from "quagga";
import { useEffect } from "react"; // ES6
import { Link } from "react-router-dom";
import "./Barcode.scss";
export function Barcode() {
  const initBarcode = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector(".c-barcode-scanner__cam"), // Or '#yourElement' (optional)
        },
        decoder: {
          readers: ["ean_reader"],
          /*  readers: ["code_128_reader", "ean_reader",
                    "ean_8_reader",
                    "code_39_reader",
                    "code_39_vin_reader",
                    "codabar_reader",
                    "upc_reader",
                    "upc_e_reader",
                    "i2of5_reader",
                    "2of5_reader",
                    "code_93_reader",] */
        },
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Inicialización finalizada. Listo para escanear.");
        Quagga.start();
      }
    );
    Quagga.onDetected((code) => console.log(code));
  };
  useEffect(initBarcode, []);
  return (
    <div className="c-barcode-scanner">
      <div className="c-barcode-scanner__close">
        <Link to="/">
          <img src="/images/icons/close.png" alt="close" />
        </Link>
        </div>

        <div className="c-barcode-scanner__hero">
          <h3>Escaneando...</h3>
          <p>
            Tan solo tienes que centrar el <h4>código de barras</h4> del
            producto en el recuadro.
          </p>
        </div>
       
          <div className="c-barcode-scanner__cam"></div>
        
      </div>
    
  );
}

/* import React from "react";
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

export default Code; */
