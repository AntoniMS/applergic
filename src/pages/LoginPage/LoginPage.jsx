import React, { useContext } from 'react'
import { useForm } from "react-hook-form";

export default function LoginPage () {
    const { register, handleSubmit } = useForm();

    const onSubmit = formData => {
    
    }



    return (
        <div>
            <div className="login__page"></div>
            <nav>
            <img class="imgA1"src="/images/loginregister/platos.png" alt="platos" />
            <img class="imgB1"src="/images/welcome/logo.png" alt="logo" />
                
            </nav>
            <nav>
                <h3>¡Bienvenido de nuevo¡</h3>
            </nav>
            <nav>
                <p>Por favor, introduce tus datos para continuar.</p>
            </nav>

        <form onSubmit={handleSubmit(onSubmit)}>
        <label className="register__info" htmlFor="Direccion">
              <input
                className="register__info--input"
                id="Direccion"
                type="text"
                placeholder="Dirección"/>
                
              </label>
            
              <label className="register__info" htmlFor="password">
              <input
                className="register__info--input"
                id="passwoard"
                type="text"
                placeholder="passwoard"
                {...register("passwoard", {
                  required: "Introduce tu contraseña.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message:
                      "Contraseña no valida",
                  },
                })}
              />
              </label>
              <a href="">¿Olvidaste tu contraseña?</a>     

            
            <button className="register__button" type="submit">
              Entrar
            </button>

            <nav>
                <h4>¿nuevo en Applergic?</h4>
            </nav>
            <nav>
            <a href="">Crea tu cuenta aquí</a>
            </nav>
            <nav>
            <a href="">Me registraré en otro momento</a>
            </nav>
        </form>
        </div>
    )
}