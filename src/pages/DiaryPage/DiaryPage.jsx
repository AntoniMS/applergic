import React from 'react';

const DiaryPage = () => {
  return(
  <div className="Diary">
  
    <img src="/images/icons/calendario.png" alt="close" />
    <img src="/images/icons/filter.png" alt="filter" />
    <img src="/images/icons/close.png" alt="close"/>
    
    <h3>Incluimos la seleccion en tu diario</h3>
    <p>
      Añade tus comentarios para completar tu información.
    </p>
      <img src="/images/icons/close.png" alt="close" />
      <img src="/images/icons/edit.png" alt="edit" />

      <button  className="login__button" type="submit">
              Entrar
      </button>
      <h2>Generar informe</h2>
    
  </div>
  )
};

export default DiaryPage;
