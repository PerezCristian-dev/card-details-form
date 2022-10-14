export const addZero = (setFormData, inputName, inputValue, amountZero) => {
  const result =
    inputValue +
    "0".repeat(
      amountZero -
        (inputValue.replace(/\s/g, "").length > 16
          ? 16
          : inputValue.replace(/\s/g, "").length)
    );
  setFormData((formData) => ({
    ...formData,
    [inputName]: result,
  }));
};
