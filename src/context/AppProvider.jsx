import { useState } from "react";
import { addZero } from "../helpers/appZero";
import { AppContext } from "./AppContext";

const initialValues = {
  nameCard: "Jane appleseed",
  numberCard: "0000000000000000",
  monthCard: "00",
  yearCard: "00",
  cvc: "000",
};

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialValues);
  const [isValidForm, setIsValidForm] = useState(false);

  const changeCard = (newState) => {
    const [inputName, inputValue] = Object.entries(newState)[0];

    if (inputName !== "nameCard") {
      addZero(
        setFormData,
        inputName,
        inputValue,
        initialValues[inputName].length
      );
      return;
    }

    setFormData({
      formData,
      ...formData,
      [inputName]: inputValue || "Jane appleseed",
    });
  };

  return (
    <AppContext.Provider
      value={{ ...formData, changeCard, isValidForm, setIsValidForm }}
    >
      {children}
    </AppContext.Provider>
  );
};
