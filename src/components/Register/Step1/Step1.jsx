import React from "react";
import { useForm } from "react-hook-form";
import "./Step1.scss";
import { RegisterContext } from "../../../shared/contexts/RegisterContext";
import { Link } from "react-router-dom";

const Step1 = ({ setStep }) => {
  const { user } = React.useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ criteriaMode: "all", mode: "onBlur" });

  const onSubmit = (formData) => {
    user.name = formData.name;
    if (formData.photo.length > 0) user.photo = formData.photo[0];
    user.email = formData.email;
    user.password = formData.password;
    user.phone = formData.phone;
    setStep(2);
    console.log(user);
  };

  const setImage = (e) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("photo_img").setAttribute("src", e.target.result);
      document.getElementById("photo_img").setAttribute("alt", 'user photo');
    };

    document.getElementsByClassName('register__photo')[0].classList.add('no_photo');

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="register">
      <nav>
        <Link to="/login">
          <img src="../../../images/icons/volver.png" />
        </Link>
        <p>Paso 1 de 4</p>
      </nav>
      <div>
        <h3>Dinos quien eres.</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <label className="register__photo">
            <img id="photo_img" src={user.photo} alt={user.photo && 'user photo'} />
            <input
              type="file"
              id="photo"
              value={user.photo && user.photo[0]}
              accept="image/png, image/jpg, image/jpeg"
              {...register("photo")}
              onChange={setImage}
            />
          </label>

          <div className="register__label">
            <label className="register__info" htmlFor="name">
              <input
                className="register__info--input"
                id="name"
                placeholder="Tu nombre completo"
                value={user.name}
                {...register("name", {
                  required: "Introduce tu nombre, por favor.",
                })}
              />
            </label>

            {errors.name ? (
              <>
                {errors.name.type === "required" && (
                  <span className="register__errors">
                    {errors.name.message}
                  </span>
                )}
              </>
            ) : null}

            <label className="register__info" htmlFor="email">
              <input
                className="register__info--input"
                id="email"
                type="text"
                value={user.email}
                placeholder="Email"
                {...register("email", {
                  required: "Introduce un email, por favor.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message:
                      "Introduce un email con formato válido: xxx@xxx.com",
                  },
                })}
              />

              {errors.email ? (
                <>
                  {errors.email.type === "required" && (
                    <span className="register__errors">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email.type === "pattern" && (
                    <span className="register__errors">
                      {errors.email.message}
                    </span>
                  )}
                </>
              ) : null}
            </label>

            <label className="register__info" htmlFor="phone">
              <input
                className="register__info--input"
                type="text"
                id="phone"
                value={user.phone}
                placeholder="Móvil"
                {...register("phone", {
                  required: "Introduce un nº de teléfono, por favor.",
                  pattern: {
                    value: /^[9|8|7|6]\d{8}$/i,
                    message: "Introduce correctamente tu teléfono.",
                  },
                })}
              />
              {errors.phone ? (
                <>
                  {errors.phone.type === "required" && (
                    <span className="register__errors">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone.type === "pattern" && (
                    <span className="register__errors">
                      {errors.phone.message}
                    </span>
                  )}
                </>
              ) : null}
            </label>

            <label className="register__info" htmlFor="password">
              <input
                className="register__info--input"
                name="password"
                id="password"
                type="password"
                value={user.password}
                placeholder="Contraseña"
                {...register("password", {
                  required: "Introduce una contraseña, por favor.",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                    message:
                      "Debe contener mínimo 8 carácteres, 1 mayúscula, 1 minúscula, 1 símbolo y 1 número.",
                  },
                })}
              />
              {errors.password ? (
                <>
                  {errors.password.type === "required" && (
                    <span className="register__errors">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password.type === "pattern" && (
                    <span className="register__errors">
                      {errors.password.message}
                    </span>
                  )}
                </>
              ) : null}
            </label>

            <button
              disabled={!isValid}
              className="register__button"
              type="submit"
            >
              Guardar perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
