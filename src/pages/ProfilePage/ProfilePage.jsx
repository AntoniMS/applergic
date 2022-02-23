import React, { useEffect, useState } from "react";
import { API } from "../../shared/services/api";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const [searchs, setSearchs] = useState([]);
  const [allergen, setAllergen] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const getUserSearchs = () => {
    const userSearchs = [];
    user.searchs.map((search) => {
      API.get(`search/${search}`).then((res) => {
        userSearchs.push(res.data);
        setSearchs([...userSearchs]);
      });
    });
  };

  const searchUserAllergens = () => {
    const userAllergens = [];
    API.get("allergens").then((res) => {
      userAllergens.push(res.data);
      setAllergen([...userAllergens]);
    });
  };

  useEffect(() => {
    getUserSearchs();
    searchUserAllergens();
  }, []);

  return (
    <div className="profilePage">
        <h3>Tu perfil de Applergic.</h3>
      <div className="profilePage__text">
        <img src={!user.photo || user.photo === undefined || user.photo === null ? user.photo = "/images/loginregister/user.png" : user.photo} alt="foto perfil" />
        <p><b>Nombre: </b> {user.name} </p>
        <p>
        <b>Alérgico a: </b>{" "}
          {allergen.length > 0 &&
            allergen[0]
              .filter((item) => user.allergens.includes(item._id))
              .map((item) => item.name)
              .join(", ")}
          .
        </p>
        <p><b>Teléfono: </b> {user.phone} </p>
        <p><b>Email: </b>{user.email} </p>
      </div>

        <h3>Tu contacto personal.</h3>
      <div className="profilePage__text">
        <p><b>Nombre: </b> {user.contact} </p>
        <p><b>Teléfono: </b> {user.phoneContact} </p>
        <p><b>Email: </b> {user.emailContact} </p>
        <p><b>Póliza: </b> {user.polize} </p>
      </div>

      <a href="/">Volver</a>
    </div>
  );
};

export default ProfilePage;
