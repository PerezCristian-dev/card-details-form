import { useState } from "react";
import { AppContext } from "./AppContext";

const intialForm = {
  nameCard: "",
  numberCard: 0,
  monthCard: 00,
  yearCard: 0000,
  cvc: 000,
};

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState(intialForm);

  const changeCard = (newState) => {
    setFormData({ ...formData, newState });
  };

  return (
    <AppContext.Provider value={{ formData, changeCard }}>
      {children}
    </AppContext.Provider>
  );
};
