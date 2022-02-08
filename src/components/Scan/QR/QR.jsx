import React from "react";
import "./QR.scss";
import { ScanContext } from "../../../pages/ScanPage/ScanPage"

const QR = ({ setQR }) => {
    const { user } = React.useContext( ScanContext );

    return (

        <div className='code'>
            <img src='https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/9856C95E-C5C9-4867-BD00-5458AA869E60.png'/> 
            <p>Codigo QR</p>
        </div>
    ) 
};

export default QR;

