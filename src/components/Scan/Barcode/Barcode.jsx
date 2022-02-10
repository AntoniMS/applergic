import React from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import "./Barcode.scss";

function Barcode({changeData}) {

  return (
      <BarcodeScannerComponent className="barcode__video"
      onUpdate={(err, result) => {
        if (result) changeData(result.text);
      }}
    />
  );
}

export default Barcode;
