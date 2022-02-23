import "./Step4.scss";
import React, { useContext } from "react";
import {RegisterContext} from "../../../shared/contexts/RegisterContext";
import { API } from "../../../shared/services/api";
import { JwtContext } from "../../../shared/contexts/JwtContext";

const Step4 = ({ setStep }) => {
  const { user, userAllergens } = React.useContext(RegisterContext);
  const { setJwt } = useContext(JwtContext);
  

  const saveUser = () => {
    let fd = new FormData();
    for (let key in user) {
      if(key === "photo"){
        fd.append(key, user[key])
      }else{
        if(key === "allergens"){
          for (let allergenKey in user[key]){
           
            fd.set(`allergens[${allergenKey}]`, user[key][allergenKey]);
          }
        }else{
          fd.set(key, user[key]);
        }
      }
      
    }
    
    API.post("users/", fd).then((res) => {
      if(res.data.code === 404){
        setStep(6);
      }else{
        
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setJwt(res.data.token);
        setStep(5);
      }
    });
  };

  return (
    <div className="confirm">
      <nav>
      <a onClick={()=>setStep(3)}>
        <img src="../../../images/icons/volver.png" />
      </a>
      <p>paso 3 de 4</p>
      </nav>
      <div className="confirm__hero">
        <h3>Confirma tu selección.</h3>
        <p>
          A continuación te resumimos los alimentos registrados como peligrosos
          para ti.
        </p>
      </div>
      <div className="confirm__allergens">
        {userAllergens.map((allergen) => {
          return (
            <div className="confirm__options">
              <span key={JSON.stringify(allergen)}>{allergen.name}</span>
            </div>
          );
        })}
        <button onClick={() => setStep(3)} className="confirm__new">
          Añadir nuevos
        </button>
      </div>

      <button onClick={() => saveUser()} className="confirm__save">
        CONFIRMAR
      </button>
    </div>
  );
};

export default Step4;
