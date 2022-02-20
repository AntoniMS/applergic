import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../shared/services/api";
import "./FavoritePage.scss";


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
        {searchs.filter((search) => search.favorite === true).map((search) => (
          <figure className="favInfo" key={search._id}>
            <img src={search.product.photo} className={"favInfo__img "+search.isAlergic} alt={search.product.name}></img>
            <div className="favInfo__box">
              <p className="favInfo__info">{search.createdAt.substr(0, 10)}</p>
              <h6 className="favInfo__info">{search.product.name}</h6>
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
