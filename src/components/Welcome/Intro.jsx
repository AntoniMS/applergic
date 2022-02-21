import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/contexts/JwtContext";
import "./Intro.scss";


const Intro = ({ setStep }) => {

  const { jwt, setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  useEffect(() => {
    jwt !== null && navigate("/");
  }, []);

  return (
    <div className="intro">
      <div>
      <img src="/images/welcome/group.png" alt="logoApplergicFigurasGiro" />
      </div>
      <div onClick={()=>{
            if(jwt !== null || localStorage.getItem('intros', true)){
              navigate("/")
            }else{
              setStep(1);
            }
            }}>
      <img
        src="/images/welcome/logoApplergicFigurasGiro.png"
        alt="logoApplergicFigurasGiro"
      />
      </div>
    </div>
  );
};
export default Intro;
