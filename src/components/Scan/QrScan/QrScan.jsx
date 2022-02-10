import React from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

function QrScan({setData}) {


  return (
    <>
      <BarcodeScannerComponent
        width={"100%"}
        height={"auto"}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
      />
    </>
  )
}

export default QrScan;