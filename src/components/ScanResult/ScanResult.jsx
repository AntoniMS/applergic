import React from "react";
import "./ScanResult.scss";

const ScanResult = ({ result, photo }) => {
    return (
        <div className={`scan-result scan-result-${result}`}>
            <div className="photo-container">
                <img src={photo} alt="foto producto"/>
            </div>
        </div>
        
    );
};

export default ScanResult;