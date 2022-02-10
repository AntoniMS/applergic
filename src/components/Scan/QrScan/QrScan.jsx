import React from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

function QrScan({changeData}) {


  return (
    <>
      <BarcodeScannerComponent
        width={"100%"}
        height={"auto"}
        onUpdate={(err, result) => {
          if (result) changeData(result.text)
        }}
      />
    </>
  )
}

export default QrScan;