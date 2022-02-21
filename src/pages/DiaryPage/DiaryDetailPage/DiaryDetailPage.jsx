import React, { useEffect, useState } from "react";
import { API } from "../../../shared/services/api";
import "./DiaryDetailPage.scss";
import ReactToPdf from "react-to-pdf";

const DiaryDetailPage = () => {
  const [searchs, setSearchs] = useState([]);
  const [allergen, setAllergen] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const event = new Date();
  const monthYear = { month: "long", year: "numeric" };
  const allDate = { day: "numeric", month: "long", year: "numeric" };

  const getUserSearchs = () => {
    const userSearchs = [];
    user.searchs.map((search) => {
      console.log(search);
      API.get(`search/${search}`).then((res) => {
        userSearchs.push(res.data);
        setSearchs([...userSearchs]);
      });
    });
  };

  const searchUserAllergens = () => {
    const userAllergens = [];
    API.get("allergens").then((res) => {
      userAllergens.push(res.data);
      setAllergen([...userAllergens]);   
    });
  };
  //console.log(userAllergens) //  res.data.filter((item) => user.allergens.includes(item._id))

  useEffect(() => {
    getUserSearchs();
    searchUserAllergens();
  }, []);

   console.log(allergen)
  const ref = React.createRef();
  const options = {
    orientation: 'landscape',
    unit: 'in'
  };
  
  return (
    <ReactToPdf filename="informe-diario.pdf" options={options} x={.5} y={.5} scale={.8}>
      {({ toPdf, targetRef }) => (
        <div ref={targetRef}>
        <div className="diaryDetail">
          <div className="diaryDetail__hero">
            <h3>Este es el informe basado en tu Diario.</h3>
            <p>
              Actividad del mes de{" "}
              {event.toLocaleDateString("es-ES", monthYear)}
            </p>
            <div className="diaryDetail__text">
              <p>Nombre: {user.name} </p>

              <h4>Alérgico a: {allergen.length > 0 && allergen[0].filter((item) => user.allergens.includes(item._id)).map((item) => item.name).join(", ")}.</h4>
              
              <p>Fecha: {event.toLocaleDateString("es-ES", allDate)}</p>
              <p>Nuevos productos APTOS incluidos en tu diario:</p>
            </div>
          </div>

          <div className="diaryDetail__toPdf">
            {searchs
              .filter(
                (search) => search.diary === true && search.isAlergic === "No"
              )
              .map((search) => (
                <figure className="toPdf" key={search._id}>
                  <div className="toPdf__box">
                    <img
                      src={search.product.photo}
                      className={"toPdf__img " + search.isAlergic}
                      alt={search.product.name}
                    ></img>
                    <div className="toPdf__text">
                      <div>
                        <p className="toPdf__info">
                          {search.createdAt.substr(0, 10)}
                        </p>
                        <p className="toPdf__info--name">
                          {search.product.name}
                        </p>
                        <p className="toPdf__info">
                          Notas: {search.product.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="toPdf__ingredients">
                    <p className="toPdf__info">
                      Ingredientes: {search.product.ingredients}
                    </p>
                  </div>
                </figure>
              ))}
          </div>
          <div className="diaryDetail__save">
            <button onClick={toPdf} className="diaryDetail__button">Guardar en PDF</button>
            <a href="/diary">Volver al diario</a>
          </div>
        </div>
        </div>
      )}
    </ReactToPdf>
    
  );
};

export default DiaryDetailPage;
