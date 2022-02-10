import "./RegisterPage.scss";
import React, { useState} from "react";
import Step1 from "../../components/Register/Step1/Step1";
import Step2 from "../../components/Register/Step2/Step2";
import Step3 from "../../components/Register/Step3/Step3";
import Step4 from "../../components/Register/Step4/Step4";
import Step5 from "../../components/Register/Step5/Step5";
import Step6 from "../../components/Register/Step6/Step6";

export const RegisterContext = React.createContext({})

const user = { allergens: []}
const userAllergens = [];

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  
  return (
    <div className="register">
      <RegisterContext.Provider value={{user, userAllergens}}>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
      {step === 5 && <Step5 setStep={setStep} />}
      {step === 6 && <Step6 setStep={setStep} />}
    </RegisterContext.Provider>
    </div>
  );
};

export default RegisterPage;
