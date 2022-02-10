import React from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import "./Barcode.scss";

function Barcode({setData}) {

  return (
      <BarcodeScannerComponent className="barcode__video"
      onUpdate={(err, result) => {
        if (result) setData(result.text);
        else setData("Not Found");
      }}
    />
  );
}

export default Barcode;
