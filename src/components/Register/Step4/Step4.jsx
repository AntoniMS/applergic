import "./Step4.scss";
import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { RegisterContext } from "../../../pages/RegisterPage/RegisterPage";
import { API } from "../../../shared/services/api";
import { JwtContext } from '../../../shared/contexts/JwtContext';

const Step4 = ({ setStep }) => {
  const { user, userAllergens} = React.useContext(RegisterContext);
  const { jwt, setJwt } = useContext(JwtContext);
  const navigate = useNavigate();
  console.log(user);
  
  const saveUser = () => {

    API.post('users/', JSON.stringify(user)).then(res => {
      console.log(JSON.stringify(user))    
        console.log(res);
    })


    // API.post('users/login', user).then(res => {
    //   if(res.data.code === 404){
    //     document.getElementById('register_subit_error').innerHTML = res.data.message
    //   }else{
    //     console.log(res);
    //     localStorage.setItem('token', res.data.token)
    //     localStorage.setItem('user', JSON.stringify(res.data.user))
    //     setJwt(res.data.token);
    //     navigate('/')
    //   }  
    // })
  }

  return (
    <div className="confirm">
      <div className="confirm__hero">
        <h3>Confirma tu selección.</h3>
        <p>
          A continuación te resumimos los alimentos registrados como peligrosos
          para ti.
        </p>
      </div>
      <div className="confirm__allergens">
        {
          userAllergens.map((allergen) => {
        
            return <div className="confirm__options"><span key={JSON.stringify(allergen)}>{allergen.name}</span></div>
          })
        }
        <button onClick={()=> setStep(3)} className="confirm__new">Añadir nuevos</button>
      </div>

      <button onClick={()=> saveUser()}className="confirm__save">CONFIRMAR</button>
    </div>
  );
};

export default Step4;
