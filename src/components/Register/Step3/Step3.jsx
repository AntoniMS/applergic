import React, { useState, useEffect } from "react";
import { API } from "../../../shared/services/api";
import "./Step3.scss";
import Step3Button from "./Step3Button/Step3Button";
import {RegisterContext} from "../../../shared/contexts/RegisterContext";
import { useForm } from "react-hook-form";

const Step3 = ({ setStep }) => {
  const { user, userAllergens } = React.useContext(RegisterContext);
  const [allergens, setAllergens] = useState([]);
  const [allergensKeys, setAllergensKeys] = useState([]);


  const {
    handleSubmit
  } = useForm({ criteriaMode: "all" });

  useEffect(() => {
    API.get("allergens").then((res) => {
      getAllergenList(res.data);
    });
  }, []);

  const getAllergenList = (allergensApi) => {
    let allergensList = {};

    for (let i = 65; i <= 90; i++) {
      const result = allergensApi.filter(
        (allergen) => allergen.name[0].toUpperCase() === String.fromCharCode(i) 
      );
      if (result.length !== 0) {
        allergensList[String.fromCharCode(i)] = result;
      }
    }
    setAllergensKeys(Object.keys(allergensList));
    setAllergens(Object.values(allergensList));
  };

  const addToAllergens = (allergen, letra) => {
    const index = user.allergens.indexOf(allergen._id);
    const letraDiv = document.getElementsByClassName(letra);
    if (index > -1) {
      user.allergens.splice(index, 1);
      userAllergens.splice(index,1);
      const result = userAllergens.filter(
        (allergen) => allergen.name[0].toUpperCase() === letra 
      );
      result.length === 0 &&
      <>
      {letraDiv[0].classList.remove("active")};
      {letraDiv[1].classList.remove("active")};
      </>
    } else {
      user.allergens.push(allergen._id);
      userAllergens.push(allergen);
      const result = userAllergens.filter(
        (allergen) => allergen.name[0].toUpperCase() === letra 
      );
      result.length !== 0 && 
      <>
      {letraDiv[0].classList.add("active")};
      {letraDiv[1].classList.add("active")};
      </>
    }
  };


  const onSubmit = (formData) => {  
    setStep(4);
  };


  return (
    <div className="allergen">
         <nav>
      <a onClick={()=>setStep(2)}>
        <img src="../../../images/icons/volver.png" />
      </a>
      <p>paso 3 de 4</p>
      </nav>
      <div className="allergen__hero">
        <h3>Ahora selecciona tus alergias e intolerancias.</h3>
        <p>
          Los elementos marcados serán identificados en tus busquedas como
          peligrosos para ti.
        </p>
      </div>
      
      <div className="allergen__container">
        <div className="allergen__box">
    
          {allergensKeys.map((letra) => {
            const result = userAllergens.filter(
              (allergen) => allergen.name[0].toUpperCase() === letra 
            );  
            const clases = result.length > 0 ? (letra + " active") : letra   
            return (
              <div className={"allergen__letra "+ clases} key={letra}>
                <a href={"#" + letra}>{letra}</a>
              </div>
            );
          })}
        </div>

        <div className="allergen__list">
        {allergens.map((allergen) => {
          const result = userAllergens.filter(
              (userAllergen) => userAllergen.name[0].toUpperCase() === allergen[0].name[0].toUpperCase() 
            );
            const clases = result.length > 0 ? (allergen[0].name[0] + " active") : allergen[0].name[0]   
          return (
            <div className="allergen__item" key={JSON.stringify(allergen)}>
              <div id={allergen[0].name[0]} className={"allergen__capital "+ clases} key={JSON.stringify(allergen[0])}>
                {allergen[0].name[0]}
              </div>
              <div className="allergen__options">
              {allergen.map((allergen_item) => {
                const result = userAllergens.filter(
                  (userAllergen) => userAllergen.name === allergen_item.name 
                );
                const isActive = result.length > 0
                return (
                  <Step3Button allergen_item={allergen_item} addToAllergens={addToAllergens} isActive={isActive}/>  
                );
              })}
              </div>
            </div>
          );
        })}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <button className="allergen__save" type="submit" >Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default Step3;
