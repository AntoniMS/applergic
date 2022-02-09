import React, {useState} from "react";
import "../Step3.scss";


const Step3Button = ({ allergen_item, addToAllergens }) => {
const [active, setActive] = useState("")

  return (

  <button
    className={"allergen__btn "+ (active ? "active" : "") }
    key={allergen_item._id}
    onClick={() => {
      addToAllergens(allergen_item, allergen_item.name[0]);
      setActive(!active);
    }}
  >
    {allergen_item.name}
  </button>
  )
};

export default Step3Button;
