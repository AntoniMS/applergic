import React from "react";

import "./DiaryDetailPage.scss";

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

const DiaryDetailPage = () => {
  return (
    <div className="diaryDetail">
      <div className="diaryDetail__hero">
        <h3>Este es el informe basado en tu Diario.</h3>
        <p>Actividad del mes de {"getDate()"}</p>
        <div className="diaryDetail__text">
          <p>Nombre: {"Pepe Leoncio"} </p>
          <h4 className="diaryDetail__allergens">
            Alérgico a:{"userAllergens.map"}.
          </h4>
          <p>Fecha:{" 9 de Febrero de 2022"}</p>
          <p>Nuevos productos {"APTOS"} incluidos en tu diario:</p>
        </div>
      </div>



      <div className="diaryDetail__toPdf">
        {products.map((product, index) => (
          <figure className="toPdf" key={index}>
            <div className="toPdf__box">
              <img src={product.image} className="toPdf__img"></img>
              <div className="toPdf__text">
                <div>
                  <p className="toPdf__info">09-02-2022</p>
                  <p className="toPdf__info">{product.name}</p>
                  <p className="toPdf__info">Notas: {product.notes}</p>
                </div>
              </div>
            </div>
            <div className="toPdf__ingredients">
              <p className="toPdf__info">Ingredientes:{product.ingredients}</p>
            </div>
          </figure>
        ))}
      </div>



{/*PASAR A DIARYPAGE */}

      <div className="diaryDetail__inform">
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
                onClick={() => {""}}
                src="/images/icons/close.png"
                alt="logo cerrar"
              />
              <img
                onClick={() => {""}}
                src="/images/icons/edit.png"
                alt="logo editar"
              />
            </div>
          </figure>
        ))}
      </div>

      <div className="diaryDetail__save">
        <button className="login__button">Guardar en PDF</button>
        <a href="/">Ir a informe siguiente</a>
      </div>
    </div>
  );
};

export default DiaryDetailPage;
