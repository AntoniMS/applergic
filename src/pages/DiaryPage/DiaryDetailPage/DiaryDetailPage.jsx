import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../shared/services/api";
import "./DiaryDetailPage.scss";


const DiaryDetailPage = () => {

const [searchs, setSearchs] = useState([]);
const user = JSON.parse(localStorage.getItem('user'));

const getUserSearchs = () =>{
  const userSearchs = [];
  user.searchs.map((search) => {
    console.log(search);
    API.get(`search/${search}`).then((res) => {
      userSearchs.push(res.data)
      setSearchs([...userSearchs]);        
    });
  })
}

useEffect(() => {
  getUserSearchs();      
},[])


  return (
    <div className="diaryDetail">
      <div className="diaryDetail__hero">
        <h3>Este es el informe basado en tu Diario.</h3>
        <p>Actividad del mes de {}</p>
        <div className="diaryDetail__text">
          <p>Nombre: {user.name} </p>
          <h4 className="diaryDetail__allergens">
            Alérgico a:{}.
          </h4>
          <p>Fecha:{" 9 de Febrero de 2022"}</p>
          <p>Nuevos productos APTOS incluidos en tu diario:</p>
        </div>
      </div>



      <div className="diaryDetail__toPdf">
      {searchs.filter((search) => search.diary === true && search.isAlergic === "No").map((search) => (
          <figure className="toPdf" key={search._id}>
            <div className="toPdf__box">
              <img src={search.product.photo} className={"toPdf__img "+search.isAlergic} alt={search.product.name}></img>
              <div className="toPdf__text">
                <div>
                  <p className="toPdf__info">{search.createdAt.substr(0, 10)}</p>
                  <p className="toPdf__info--name">{search.product.name}</p>
                  <p className="toPdf__info">Notas: {search.product.notes}</p>
                </div>
              </div>
            </div>
            <div className="toPdf__ingredients">
              <p className="toPdf__info">Ingredientes: {search.product.ingredients}</p>
            </div>
          </figure>
        ))}
      </div>
      <div className="diaryDetail__save">
        <button className="diaryDetail__button">Guardar en PDF</button>
        <a href="/">Ir a informe siguiente</a>
      </div>
    </div>
  );
};

export default DiaryDetailPage;
