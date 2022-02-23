import "./Step2.scss";
import React from "react";
import { useForm } from "react-hook-form";
import {RegisterContext} from "../../../shared/contexts/RegisterContext";
import { Link } from "react-router-dom";

const Step2 = ({ setStep }) => {
  const { user } = React.useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (formData) => {
    user.contact = formData.contactName;
    user.emailContact = formData.contactEmail;
    user.phoneContact = formData.contactPhone;
    user.polize = formData.policy;
    setStep(3);
   
  };


  return (
      <div className="contact__page"> 
        <nav>
      <a onClick={()=>setStep(1)}>
        <img src="../../../images/icons/volver.png" />
      </a>
      <p>Paso 2 de 4</p>
      </nav>

      <div className="contact__hero">
        <h3>Vamos a añadir tu contacto en caso de emergencia.</h3>
        <p>
          Nos pondremos en contacto con tu persona de confianza y/o compañia de
          seguros en caso de emergencia.
        </p>
      </div>

      <div className="contact__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact__label">
            <label className="contact__info" htmlFor="contactName">
              <input
                className="contact__info--input"
                id="contactName"
                value={user.contact}
                placeholder="Nombre completo de tu contacto."
                {...register("contactName")}
              />
            </label>

            <label className="contact__info" htmlFor="contactEmail">
              <input
                className="contact__info--input"
                id="contactEmail"
                type="text"
                value={user.emailContact}
                placeholder="Dirección e.mail"
                {...register("contactEmail", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message:
                      "Introduce un email con formato válido: xxx@xxx.com",
                  },
                })}
              />

              {errors.contactEmail ? (
                <>
                  {errors.contactEmail.type === "pattern" && (
                    <p className="contact__errors">
                      {errors.contactEmail.message}
                    </p>
                  )}
                </>
              ) : null}
            </label>

            <label className="contact__info" htmlFor="contactPhone">
              <input
                className="contact__info--input"
                type="text"
                id="contactPhone"
                value={user.phoneContact}
                placeholder="Teléfono de tu contacto."
                {...register("contactPhone", {
                  pattern: {
                    value: /^[9|8|7|6]\d{8}$/i,
                    message: "Introduce correctamente el teléfono.",
                  },
                })}
              />
              {errors.contactPhone ? (
                <>
                  {errors.contactPhone.type === "pattern" && (
                    <p className="contact__errors">
                      {errors.contactPhone.message}
                    </p>
                  )}
                </>
              ) : null}
            </label>

            <label className="contact__info" htmlFor="policy">
              <input
                className="contact__info--input"
                id="policy"
                value={user.polize}
                placeholder="Compañía de seguros / Nº Póliza"
                {...register("policy")}
              />
            </label>

            <button disabled={!isValid} className="contact__button" type="submit">
              Guardar emergencias
            </button>

            <p className="contact__skip" onClick={()=>setStep(3)}>
              Registraré mi contacto en otro momento
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
