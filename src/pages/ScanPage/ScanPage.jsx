import React from "react";
import { Link } from "react-router-dom";
import "./ScanPage.scss";
import  Barcode  from "../../components/Scan/Barcode/Barcode";
import QrScan from "../../components/Scan/QrScan/QrScan";
import { API } from "../../shared/services/api";
import {SearchContext} from "../../shared/contexts/SearchContext"; 
import ScanDetailPage from './ScanDetailPage/ScanDetailPage';


const ScanPage = () => {
  const [search, setSearch] = React.useState(null)
  const [product, setProduct] = React.useState({})
  const [data, setData] = React.useState("Not Found");
  const [option, setOption] = React.useState("barcode");
  let barcode_class = (option === "barcode") ? "active" : "";
  let qr_class = (option === "qr") ? "active" : "";

  const changeData = (code)=>{
    console.log("enter", code);
    if(code !== data){
      console.log("change", code);
      setData(code);
      findCode(code);
      //searchCode(code);
    }
  }

  const findCode = (code) => {
    API.get("products/barcode/"+code).then((res) => {
      console.log(res.data);
      setProduct(res.data);
      saveSearch(res.data._id);
    });
  }

  const saveSearch = (id) => {
    let fd = {product: id}
    API.post("search", fd).then((res) => {
      const user = JSON.parse(localStorage.getItem('user'));
      user.searchs.push(res.data._id);
      localStorage.setItem("user", JSON.stringify(user));
      setSearch(res.data);
    });
  }

  // const searchCode = (code) => {
  //   console.log("search", code);
  //   var hash = CryptoJS.HmacSHA1(code,"Mf37C9t4s7To5Gb1",true);
  //   console.log(hash)

  //   axios({
  //     method: 'get',
  //     url: "https://www.digit-eyes.com/gtin/v2_0/?upcCode="+code+"&language=es&app_key=/zkyD/oBFDst&signature="+hash.toString(CryptoJS.enc.Base64),
  //     responseType: 'stream',
  //     headers: {'Accept': 'application/json',
  //   'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
  //   }).then(
  //     (res) => {
  //       console.log(res.data)
  //     }
  //   );
  // }

  return (
    <SearchContext.Provider value={{product, setProduct, search, setSearch}}>
    {console.log(search)}
    { search === null ? (
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
          (option === "barcode" && data === "Not Found") ? <Barcode changeData={changeData}/>:<QrScan changeData={changeData}/>
          
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
    ): <ScanDetailPage/>
    }
    </SearchContext.Provider>

  );
};

export default ScanPage;
