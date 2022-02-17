import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FavoritePage.scss";
import { API } from "../../shared/services/api";


const FavoritePage = () => {
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
    <div className="favsPage">
      <div className="favsPage__icons">
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


      <div className="favsPage__text">
        <h3>Tus productos favoritos.</h3>
        <p>Añade tus comentarios para completar tu información.</p>
      </div>

      <div className="favsPage__inform">
      <>
        {searchs.filter((search) => search.diary === true).map((search) => (
          <figure className="favInfo" key={search._id}>
            <img src={search.product.photo} className={"favInfo__img "+search.isAlergic} alt={search.product.name}></img>
            <div className="favInfo__box">
              <p className="favInfo__info">09-02-2022</p>
              <figcaption className="favInfo__info">{search.product.name}</figcaption>
              <p className="favInfo__info">Notas: {search.notes}</p>
            </div>
            <div className="favInfo__buttons">
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

    
      </>
      </div>

    </div>
    
  );
};

export default FavoritePage;
