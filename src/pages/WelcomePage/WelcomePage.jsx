import "./WelcomePage.scss";
import React, { useState} from "react";
import Step1 from "../../components/Welcome/Step1/Step1";
import Step2 from "../../components/Welcome/Step2/Step2";
import Step3 from "../../components/Welcome/Step3/Step3";
import Step4 from "../../components/Welcome/Step4/Step4";
import Intro from "../../components/Welcome/Intro";


const WelcomePage = () => {
  const [step, setStep] = useState(0);


  
  return (
    <div className="Welcome">
      
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
      {step === 0 && <Intro setStep={setStep} />}
    
    </div>
  );
  }

export default WelcomePage;