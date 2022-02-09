import React from "react";
import "./ScanResult.scss";

const scanResult = ({ result }) => {
    return (
        <div className={`scan-result scan-result-${result}`}></div>
    );
};

export default scanResult;