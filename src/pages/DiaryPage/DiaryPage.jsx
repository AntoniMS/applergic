import React from "react";
import { Link } from "react-router-dom";
import "./DiaryPage.scss";

const products = [
  {
    name: "Special K",
    image:
      "https://images.kglobalservices.com/www.kelloggs.es/es_es/product/product_4508681/prod_img-198168_prod_img-198168.png",
    ingredients: ["Arroz", "Trigo", "Cebada", "Azúcar"],
    notes: "Copos tostados para desayunar.",
  },
  {
    name: "Smacks",
    image:
      "https://images.kglobalservices.com/www.kelloggs.es/es_es/product/product_4508675/kicproductimage-124836_kicproductimage-124836.png",
    ingredients: ["Trigo", "Miel", "Azúcar"],
    notes: "Trigo inflado con azúcar y miel.",
  },
];

const DiaryPage = () => {
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
        {products.map((product, index) => (
          <figure className="inform" key={index}>
            <img src={product.image} className="inform__img"></img>
            <div className="inform__box">
              <p className="inform__info">09-02-2022</p>
              <figcaption className="inform__info">{product.name}</figcaption>
              <p className="inform__info">Notas: {product.notes}</p>
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
      </div>

      <button className="diaryPage__button" type="submit">
        Guardar
      </button>
      <a href="/DiaryDetail">Generar informe</a>
    </div>
  );
};

export default DiaryPage;
