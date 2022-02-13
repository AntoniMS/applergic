import {useEffect, useContext, useState} from "react";
import { Link } from "react-router-dom";
import './ScanDetailPage.scss';
import  ScanResult from '../../../components/ScanResult/ScanResult';
import {SearchContext} from "../../../shared/contexts/SearchContext";
import { API } from "../../../shared/services/api";

const ScanDetailPage = () => {
    const { product, setProduct, search, setSearch } = useContext(SearchContext);
    const [isAlergic, setIsAlergic] = useState(false);
    const [allergicProducts, setAllProducts] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));

    const searchUserAllergens = () => {
        let allergensList = [];
        API.get("allergens").then((res) => {
            //console.log(res);
            allergensList = res.data &&  (res.data.filter(item => user.allergens.includes(item._id)));
            isAllergicProduct(allergensList);
            //console.log(allergensList)
        });

    }

    const isAllergicProduct = (allergensList) => {
        let isAlergic = "Maybe";
        const allergicProducts = allergensList.filter((item) => 
            (product.ingredients.includes(item.name.toLowerCase() ) || product.allergens.includes(item.name.toLowerCase() ))
        );
        isAlergic = allergicProducts.length > 0 ? "Yes" : (product.ingredients === "" && product.allergens=== "") ? "Maybe" : "No";
        setIsAlergic(isAlergic);
        setAllProducts(allergicProducts);
        saveSearchAlergic(isAlergic);
    }

    const saveSearchAlergic = (isAlergic) => {
        let fd = {isAlergic: isAlergic}
        API.put(`search/${search._id}`, fd).then((res) => {
            console.log(res.data.new);
            setSearch(res.data.new);
        });
    }

    useEffect(() => {
        searchUserAllergens();
    },[])

    return (
        
        <div className="scan">
            <div className="scan__turn-close">
                <Link className="scan__turn-close__turn" to="/scan">
                    <img src="../../../images/icons/volver.png" alt="Volver" />
                </Link>
                <Link className="close" to="/">
                    <img src="/images/icons/close.png" alt="close" />
                </Link>
            </div>
            <h3>Aqui tienes el<br></br>resultado.</h3>
            {isAlergic === "Si" ? 
            <p>Este producto NO es apto<br></br>para ti, contiene {allergicProducts.map((item) => item.name).join(", ")}.</p> 
            : isAlergic === "Maybe"
            ? 
            <p>Lo sentimos, no hay datos suficientes para poder valorar este producto</p>
            :
            <p>Este producto es apto para ti</p>
            }
            
            <div className="scan__wraper">
            {isAlergic === "Si" ? 
                <ScanResult result="unfit" photo={product.photo} /> 
            : isAlergic === "Maybe"
            ? 
            <ScanResult result="unknown" photo={product.photo}/>
            :
            <ScanResult result="fit" photo={product.photo}/>
            }
                
                <div className="scan__wraper__favorites">
                    
                    <img src="../../../images/scan/favorito/favorito.png" alt="star"/>
                    <Link to="/diary">
                        <img src="../../../images/scan/diario/diario.png" alt="diary"/>
                    </Link>
                    <Link to="/">
                        <img src="../../../images/scan/red/red.png" alt="red"/>
                    </Link>
                </div>
            </div>
            <div className="scan__info">
                <h3>{product.name}</h3>
                <h4>{product.brand}</h4>
                <p>{product.ingredients}</p>
                <input></input>
                <div className="scan__btn">
                    <Link className="scan__link" to="/scan">
                    <h4> Escanea otro producto</h4>
                    </Link>
                </div>
            </div>
        </div>
    ); 
};

export default ScanDetailPage;