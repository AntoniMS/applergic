import React, { useState, useEffect } from "react";
import { API } from "../../../shared/services/api";

const Step3 = () => {
  const [allergens, setAllergens] = useState([]);
  const [allergensKeys, setAllergensKeys] = useState([]);
  const allergenUser = [];
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

  const addToAllergens = (id, letra) => {
    const index = allergenUser.indexOf(id);
    const letraDiv = document.getElementsByClassName(letra);
    if (index > -1) {
      allergenUser.splice(index, 1);
      letra in allergenCount && allergenCount[letra]--;
      allergenCount[letra] === 0 && letraDiv[0].classList.remove("active");
    } else {
      allergenUser.push(id);
      letra in allergenCount
        ? allergenCount[letra]++
        : (allergenCount[letra] = 1);
      allergenCount[letra] === 1 && letraDiv[0].classList.add("active");
    }
    console.log(allergenCount);
  };

  return (
    <div className="allergen__page">
      <p> ⬅ volver</p>
      <nav>
        <p>3 de 4</p>
      </nav>
      <div className="allergen__hero">
        <h3>Ahora selecciona tus alergias e intolerancias.</h3>
        <p>
          Los elementos marcados serán identificados en tus busquedas como
          peligrosos para ti.
        </p>
      </div>
      
      <div>
        <div className="letras">
          {allergensKeys.map((letra) => {
            return (
              <div className={letra} key={letra}>
                <a href={"#" + letra}>{letra}</a>
              </div>
            );
          })}
        </div>
        {allergens.map((allergen) => {
          return (
            <div key={JSON.stringify(allergen)}>
              <div id={allergen[0].name[0]} key={JSON.stringify(allergen[0])}>
                {allergen[0].name[0]}
              </div>
              {allergen.map((allergen_item) => {
                return (
                  <p
                    key={allergen_item._id}
                    onClick={() => {
                      addToAllergens(allergen_item._id, allergen_item.name[0]);
                    }}
                  >
                    {allergen_item.name}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Step3;
