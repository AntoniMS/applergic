import React from "react";
import { useForm } from "react-hook-form";
import "./Step1.scss";
import {RegisterContext} from "../../../pages/RegisterPage/RegisterPage"


const Step1 = ({setStep}) => {

  const {user} = React.useContext(RegisterContext)
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    user.name=formData.name
    user.photo=formData.photo
    user.email=formData.email
    user.password=formData.password
    setStep(2);
    console.log(user);
  };

  return (
    <div>
      <nav>
        <p> ⬅ volver</p> <p>1 de 4</p>
      </nav>

      <div>
        <h3>Dinos quien eres.</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <label className="register__photo">
            <h3>Subir Foto</h3>
            <input
              type="file"
              id="photo"
              accept="image/png, image/jpg, image/jpeg"
              {...register("photo", { required: true })}
            />
          </label>
          <div className="register__label">
            <label className="register__info" htmlFor="name">
              <input
                className="register__info--input"
                id="name"
                placeholder="Tu nombre completo"
                {...register("name", { required: true })}
              />
            </label>
            <label className="register__info" htmlFor="email">
              <input
                className="register__info--input"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
            </label>
            <label className="register__info" htmlFor="mobile">
              <input
                className="register__info--input"
                type="text"
                id="mobile"
                placeholder="Móvil"
              />
            </label>
            <label className="register__info" htmlFor="password">
              <input
                className="register__info--input"
                name="password"
                id="password"
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                })}
              />
            </label>
            <button
              className="register__button"        
            >Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
