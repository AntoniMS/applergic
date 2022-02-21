import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { JwtContext } from "../../shared/contexts/JwtContext";
import "./LoginPage.scss";

export default function LoginPage() {
  const { jwt, setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ criteriaMode: "all", mode: "onBlur" });

  const onSubmit = (formData) => {
    API.post("users/login", formData).then((res) => {
      if (res.data.code === 404) {
        document.getElementById("login_subit_error").innerHTML =
          res.data.message;
      } else {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("expiredToken", new Date().getTime() + 86400000);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setJwt(res.data.token);
        navigate("/welcome");
      }
    });
  };

  useEffect(() => {
    jwt !== null && navigate("/");
  }, []);

  return (
    <div className="login">
      <div className="login__page">
        <img src="/images/loginregister/platoslogo.png" alt="platos" />
        <div className="login__hero">
        <h3>¡Bienvenido de nuevo!</h3>
        <p>Por favor, introduce tus datos para continuar.</p>
        </div>

        <div className="login__form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="login__info" htmlFor="email">
              <input
                className="login__info--input"
                id="email"
                type="text"
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
                    <span className="login__errors">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email.type === "pattern" && (
                    <span className="login__errors">
                      {errors.email.message}
                    </span>
                  )}
                </>
              ) : null}
            </label>

            <label className="login__info" htmlFor="password">
              <input
                className="login__info--input"
                name="password"
                id="password"
                type="password"
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
                    <span className="login__errors">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password.type === "pattern" && (
                    <span className="login__errors">
                      {errors.password.message}
                    </span>
                  )}
                </>
              ) : null}
            </label>
            <div className="login__footer">

            <a href="#">¿Olvidaste tu contraseña?</a>

            <button  disabled={!isValid}  className="login__button" type="submit">
              Entrar
            </button>

            <span id="login_subit_error" className="login__errors"></span>

            
              <p>¿nuevo en Applergic?</p>
              <Link to="/register"><h2>Crea tu cuenta aquí</h2></Link>
              <a href="/welcome">Me registraré en otro momento</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
