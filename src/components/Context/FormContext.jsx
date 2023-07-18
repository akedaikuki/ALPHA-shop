import { createContext } from "react";
import { useState } from "react";

const cardInfo = {
  card_Name: "",
  card_Num: "",
  card_Date: "",
  card_Cvc: "",
};

const FormContext = createContext();

function FormContextProvider({ children }) {
  const [formCardInfo, setFormCardInfo] = useState(cardInfo);

  function inputChange(e) {
    setFormCardInfo({ ...formCardInfo, [e.target.name]: e.target.value });
  }

  return (
    <FormContext.Provider
      value={{ formCardInfo, setFormCardInfo, inputChange }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormContextProvider };
