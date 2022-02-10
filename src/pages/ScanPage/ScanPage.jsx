import React from "react";
import { Link } from "react-router-dom";
import "./ScanPage.scss";
import  Barcode  from "../../components/Scan/Barcode/Barcode";
import QrScan from "../../components/Scan/QrScan/QrScan";


const ScanPage = () => {
  const [data, setData] = React.useState("Not Found");
  const [option, setOption] = React.useState("barcode");
  let barcode_class = (option === "barcode") ? "active" : "";
  let qr_class = (option === "qr") ? "active" : "";

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
          Tan solo tienes que centrar el {option === "barcode" ? <b> <br/>código de barras <br/></b>: <b><br/> código QR <br/></b>} del producto en el recuadro.
        </p>
      </div>

      <div className="barcode__cam">
        {
          (option === "barcode") ? <Barcode setData={setData}/>:<QrScan setData={setData}/>
          
        }
          
        
        <h5>{data}</h5>
      </div>

      <div className="barcode__buttons">
        <div>
        
        <button className={"barcode__btn "+barcode_class} onClick={() => setOption("barcode")}>
          <img src="./images/icons/barcode2@2x.png" alt="codebar img" />
        </button>
        <p>Código de barras</p>
        </div>
        <div>
        <button className={"barcode__btn "+qr_class} onClick={() => setOption("qr")}>
          <img src="./images/icons/qr@2x.png" alt="Qr img" />
        </button>
        <p>Código QR</p>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;
