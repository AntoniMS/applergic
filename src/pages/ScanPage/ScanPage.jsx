import React  from "react";
import './ScanPage.scss';
import { Barcode } from './../../components/Scan/Barcode/Barcode'



const ScanPage = () => {
    return (
        <div className='scanPage-container'>
            <Barcode/>
        </div>  
      
    );
};

export default ScanPage;

