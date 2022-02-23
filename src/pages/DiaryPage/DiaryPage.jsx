import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../shared/services/api";
import ScanResult from "../../components/ScanResult/ScanResult";
import { useForm } from "react-hook-form";
import "./DiaryPage.scss";

const DiaryPage = () => {
  const [searchs, setSearchs] = useState([]);
  const [searchUpdate, setSearchUpdate] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

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

  const saveSearchDiary = (search) => {
    let fd = { diary: false };
    API.put(`search/${search._id}`, fd).then((res) => {
      console.log(res.data.new);
      getUserSearchs();
    });
  };


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ criteriaMode: "all", mode: "onBlur" });

  const updateNotes = (formData) => {
    const notes = searchUpdate.notes;
    notes.push(formData.notes)
    let fd = { notes: notes };
    reset({
      notes: ""
    })
    API.put(`search/${searchUpdate._id}`, fd).then((res) => {
      console.log(res.data.new);
      setSearchUpdate(null);
      getUserSearchs();
    });
  }

  useEffect(() => {
    getUserSearchs();
  }, []);

  return (
    <>
      {searchUpdate === null ? (
        <div className="diaryPage">
          <div className="diaryPage__icons">
            {/* <Link to="/">
              <img src="/images/icons/calendario.png" alt="close" />
            </Link>

            <Link to="/">
              <img src="/images/icons/filter.png" alt="filter" />
            </Link> */}

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
              {searchs
                .filter((search) => search.diary === true)
                .map((search) => (
                  <figure className="inform" key={search._id}>
                    <img
                      src={search.product.photo}
                      className={"inform__img " + search.isAlergic}
                      alt={search.product.name}
                    ></img>
                    <div className="inform__box">
                      <p className="inform__info">
                        {search.createdAt.substr(0, 10)}
                      </p>
                      <h6 className="inform__info">{search.product.name}</h6>
                      <p className="inform__info">Notas: {search.notes.length > 0 && search.notes.join(", ")}</p>
                    </div>
                    <div className="inform__buttons">
                      <img
                        onClick={() => {
                          saveSearchDiary(search);
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

              {console.log(searchs)}
            </>
          </div>

          <button className="diaryPage__button" type="submit">
            Guardar
          </button>
          <a href="/DiaryDetail">Generar informe</a>
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
                <form onSubmit={handleSubmit(updateNotes)} className="notes__form">
                <div className="note_info">
                  {searchUpdate.notes.length > 0 &&
                  <p>
                    <b>Notas:</b> {searchUpdate.notes.join(", ")}
                  </p>
                  }
                  <label  htmlFor="notes">Introduce nueva nota:</label>
                  <input id="notes" className="notes__input" type="text" name="notes" {...register("notes", {

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
                  <a href="/">Volver</a>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DiaryPage;