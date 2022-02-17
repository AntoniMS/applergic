import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DiaryPage.scss";
import { API } from "../../shared/services/api";




const DiaryPage = () => {
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
    <div className="diaryPage">
      <div className="diaryPage__icons">
        <Link to="/">
          <img src="/images/icons/calendario.png" alt="close" />
        </Link>

        <Link to="/">
          <img src="/images/icons/filter.png" alt="filter" />
        </Link>

        <Link to="/">
          <img src="/images/icons/close.png" alt="close" />
        </Link>
      </div>


      <div className="diaryPage__text">
        <h3>Incluimos la seleccion en tu diario</h3>
        <p>Añade tus comentarios para completar tu información.</p>
      </div>

      <div className="diaryPage__inform">
      <>
        {searchs.filter((search) => search.diary === true).map((search) => (
          <figure className="inform" key={search._id}>
            <img src={search.product.photo} className={"inform__img "+search.isAlergic} alt={search.product.name}></img>
            <div className="inform__box">
              <p className="inform__info">09-02-2022</p>
              <figcaption className="inform__info">{search.product.name}</figcaption>
              <p className="inform__info">Notas: {search.notes}</p>
            </div>
            <div className="inform__buttons">
              <img
                onClick={() => {
                  "";
                }}
                src="/images/icons/close.png"
                alt="logo cerrar"
              />
              <img
                onClick={() => {
                  "";
                }}
                src="/images/icons/edit.png"
                alt="logo editar"
              />
            </div>
          </figure>
        ))}

      {console.log(searchs)}
      </>
      </div>

      <button className="diaryPage__button" type="submit">
        Guardar
      </button>
      <a href="/DiaryDetail">Generar informe</a>
    </div>
    
  );
};

export default DiaryPage;
