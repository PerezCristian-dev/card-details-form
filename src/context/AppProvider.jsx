import { useState } from "react";
import { AppContext } from "./AppContext";

const initialValues = {
  nameCard: "Jane appleseed",
  numberCard: "0000 0000 0000 0000",
  monthCard: "00",
  yearCard: "00",
  cvc: "000",
};

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialValues);

  const changeCard = (newState) => {
    setFormData({ ...formData, ...newState });
  };

  return (
    <AppContext.Provider value={{ ...formData, changeCard }}>
      {children}
    </AppContext.Provider>
  );
};
