export const addZero = (setFormData, inputName, inputValue, amountZero) => {
  console.log({ inputValue });
  const result =
    inputValue + "0".repeat(amountZero - inputValue.replace(/\s/g, "").length);
  setFormData((formData) => ({
    ...formData,
    [inputName]: result,
  }));
};
