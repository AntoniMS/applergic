import React, { useContext, useEffect } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { JwtContext } from '../../shared/contexts/JwtContext';

export default function LoginPage () {
  const { jwt, setJwt } = useContext(JwtContext);
  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

    const onSubmit = formData => {
      API.post('users/login', formData).then(res => {
        if(res.data.code === 404){
          document.getElementById('register_subit_error').innerHTML = res.data.message
        }else{
          console.log(res);
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify(res.data.user))
          setJwt(res.data.token);
          navigate('/')
        }
        
        
      })
      
    }

    useEffect(() =>{
      (jwt !== null) && navigate('/')
    },[])


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
        <label className="register__info" htmlFor="email">
              <input
                className="register__info--input"
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
                    <span className="register__errors">{errors.email.message}</span>
                  )}
                  {errors.email.type === "pattern" && (
                    <span className="register__errors">{errors.email.message}</span>
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
                placeholder="Contraseña"
                {...register("password", {
                  required: "Introduce una contraseña, por favor.",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
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
              <a href="#">¿Olvidaste tu contraseña?</a>     

            
            <button className="register__button" type="submit">
              Entrar
            </button>

            <span id="register_subit_error" className="register__errors"></span>

            <nav>
                <h4>¿nuevo en Applergic?</h4>
            </nav>
            <nav>
            <Link to="/register">Crea tu cuenta aquí</Link>
            </nav>
            <nav>
            <a href="#">Me registraré en otro momento</a>
            </nav>
        </form>
        </div>
    )
}