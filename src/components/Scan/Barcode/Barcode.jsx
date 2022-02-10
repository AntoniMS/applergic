import React from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import "./Barcode.scss";
import { Link } from "react-router-dom";

function Barcode() {
  const [data, setData] = React.useState("Not Found");

  return (
    <div className="barcode">
      <div className="barcode__close">
        <Link to="/">
          <img src="/images/icons/close.png" alt="close" />
        </Link>
      </div>
      <div className="barcode__hero">
        <h3>Escaneando...</h3>
        <p>
          Tan solo tienes que centrar el <b>código de barras</b> del producto
          en el recuadro.
        </p>
      </div>

      <div className="barcode__cam">
          <BarcodeScannerComponent className="barcode__video"
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("Not Found");
          }}
        />
        <h5>{data}</h5>
      </div>

      <div className="barcode__buttons">
        <div>
        <button className="barcode__btn">
          <img src="./images/icons/barcode2@2x.png" alt="codebar img" />
        </button>
        <p>Código de barras</p>
        </div>
        <div>
        <button className="barcode__btn">
          <img src="./images/icons/qr@2x.png" alt="Qr img" />
        </button>
        <p>Código QR</p>
        </div>
      </div>
    </div>
  );
}

export default Barcode;
