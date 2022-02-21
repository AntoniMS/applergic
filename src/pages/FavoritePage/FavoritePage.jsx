import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../shared/services/api";
import ScanResult from "../../components/ScanResult/ScanResult";
import { useForm } from "react-hook-form";
import "./FavoritePage.scss";


const FavoritePage = () => {
    const [searchs, setSearchs] = useState([]);
    const [searchUpdate, setSearchUpdate] = useState(null);
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

    
    const saveSearchFavorite = (search) => {
      let fd = {favorite: false}
      API.put(`search/${search._id}`, fd).then((res) => {
          console.log(res.data.new);
          getUserSearchs();
      });
    }

  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ criteriaMode: "all", mode: "onBlur" });
  
    const updateNotes = (formData) => {
      const notes = searchUpdate.notes;
      notes.push(formData.notes)
      let fd = { notes: notes };
      API.put(`search/${searchUpdate._id}`, fd).then((res) => {
        console.log(res.data.new);
        setSearchUpdate(null);
        getUserSearchs();
      });
    }
  
    useEffect(() => {
      getUserSearchs();    
    },[])

  return (<>
    {searchUpdate === null ? ( 
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
              <p className="favInfo__info">Notas: {search.notes.join(", ")}</p>
            </div>
            <div className="favInfo__buttons">
              <img
                onClick={() => {
                  saveSearchFavorite(search);
                }}
                src="/images/icons/close.png"
                alt="logo cerrar"
              />
              <img
                onClick={() => {
                  setSearchUpdate(search);
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
    ) : (
        <>
          <div className="scanDetail">
            <div className="scan">
              {searchUpdate.isAlergic === "Yes" ? (
                <ScanResult result="unfit" photo={searchUpdate.product.photo} />
              ) : searchUpdate.isAlergic === "Maybe" ? (
                <ScanResult
                  result="unknown"
                  photo={searchUpdate.product.photo}
                />
              ) : (
                <ScanResult result="fit" photo={searchUpdate.product.photo} />
              )}
              <div className="scan__info">
                <h3>{searchUpdate.product.name}</h3>
                <h4>{searchUpdate.product.brand}</h4>
                <p>
                  <b>Ingredientes:</b> {searchUpdate.product.ingredients}
                </p>
                <form onSubmit={handleSubmit(updateNotes)} className="register__form">
                <div className="note_info">
                  {searchUpdate.notes.length > 0 &&
                  <p>
                    <b>Notas:</b> {searchUpdate.notes.join(", ")}
                  </p>
                  }
                  <label  htmlFor="notes">Introduce nueva nota:</label>
                  <input type="text" name="notes" {...register("notes", {
                  required: "Añade tu nota, por favor.",
                })}/>
                {errors.notes ? (
                <>
                  {errors.notes.type === "required" && (
                    <span className="register__errors">
                      {errors.notes.message}
                    </span>
                  )}
                </>
              ) : null}
                </div>

                <div className="scan__btn">
                  <button className="scan__link" type="submit">
                    <h4>Guardar</h4>
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FavoritePage;
