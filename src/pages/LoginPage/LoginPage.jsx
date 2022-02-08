import React, { useContext } from 'react'
import { useForm } from "react-hook-form";

export default function LoginPage () {
    const { register, handleSubmit } = useForm();

    const onSubmit = formData => {
    
    }



    return (
        <div>
            <nav>
                <img src="./pages/LoginPage/image.png"/>
                <img src="./pages/LoginPage/logo.png"/>
            </nav>
            <nav>
                <h3>¡Bienvenido de nuevo¡</h3>
            </nav>
            <nav>
                <h2>Por favor, introduce tus datos para continuar.</h2>
            </nav>

        <form onSubmit={handleSubmit(onSubmit)}>
        
            <label htmlFor="email">Dirección e.mail</label>
            <input  id="email" placeholder="email"
                   {...register("email",{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
            
            <label htmlFor="password">Password</label>
            <input  id="password" type="password" placeholder={'Contraseña'}
                   {...register("password",{
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                   })}/>

            <button>¿Olvidaste tu contraseña?</button>       

            <button type="submit" value="Login">Entrar</button>

            <nav>
                <h3>¿nuevo en Applergic?</h3>
            </nav>
            <nav>
                <h2>Crea tu cuenta aquí</h2>
            </nav>
            <nav>
                <h5>Me registraré en otro momento</h5>
            </nav>
        </form>
        </div>
    )
}