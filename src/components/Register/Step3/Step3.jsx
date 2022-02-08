import React, { useState, useEffect, useRef } from "react";
import { API } from "../../../shared/services/api";
import "./Step3.scss";
import Step3Button from "./Step3Button/Step3Button";

const Step3 = () => {
  const [allergens, setAllergens] = useState([]);
  const [allergensKeys, setAllergensKeys] = useState([]);

  const allergenUser = [];
  const allergenId = [];
  const allergenCount = {};

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
    const index = allergenId.indexOf(allergen._id);
    console.log(allergen);
    const letraDiv = document.getElementsByClassName(letra);
    console.log(letraDiv);
    if (index > -1) {
      allergenId.splice(index, 1);
      allergenUser.splice(index,1);
      letra in allergenCount && allergenCount[letra]--;
      allergenCount[letra] === 0 &&
      <>
      {letraDiv[0].classList.remove("active")};
      {letraDiv[1].classList.remove("active")};
      </>
    } else {
      allergenId.push(allergen._id);
      allergenUser.push(allergen);
      letra in allergenCount
        ? allergenCount[letra]++
        : (allergenCount[letra] = 1);
      allergenCount[letra] === 1 && 
      <>
      {letraDiv[0].classList.add("active")};
      {letraDiv[1].classList.add("active")};
      </>
    }
    console.log(allergenCount);
    console.log(allergenUser);
  };


  return (
    <div className="allergen">
      <nav>
      <h5> ⬅ volver</h5>
        <h5>3 de 4</h5>
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
            return (
              <div className={"allergen__letra " + letra} key={letra}>
                <a href={"#" + letra}>{letra}</a>
              </div>
            );
          })}
        </div>

        <div className="allergen__list">
        {allergens.map((allergen) => {
          return (
            <div className="allergen__item" key={JSON.stringify(allergen)}>
              <div id={allergen[0].name[0]} className={"allergen__capital "+ allergen[0].name[0]} key={JSON.stringify(allergen[0])}>
                {allergen[0].name[0]}
              </div>
              <div className="allergen__options">
              {allergen.map((allergen_item) => {
                return (
                  <Step3Button allergen_item={allergen_item} addToAllergens={addToAllergens}/>  
                );
              })}
              </div>
            </div>
          );
        })}
        </div>
        <button className="allergen__save" type="submit" >Guardar</button>
      </div>
    </div>
  );
};

export default Step3;
