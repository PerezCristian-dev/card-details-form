export const addZero = (setFormData, inputName, inputValue, amountZero) => {
  if (inputValue.replace(/\s/g, "").length > 16) return;

  const result =
    inputValue + "0".repeat(amountZero - inputValue.replace(/\s/g, "").length);

  setFormData((formData) => ({
    ...formData,
    [inputName]: result,
  }));
};
