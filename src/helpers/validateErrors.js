export const validateErrors = (values) => {
  const errors = {};

  // nameCard;
  if (!values.nameCard) {
    errors.nameCard = "Can't be blank.";
  } else if (values.nameCard.length < 3) {
    errors.nameCard = "Invalid Name Card.";
  }
  //numberCard ;
  if (!values.numberCard) {
    errors.numberCard = "Can't be blank";
  } else if (values.numberCard.replace(/\s/g, "").length > 16) {
    errors.numberCard = "Max 16 characters.";
  } else if (
    !/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g.test(values.numberCard)
  ) {
    errors.numberCard = "Wrong format, numbers only.";
  }

  //monthCard ;
  if (!values.monthCard) {
    errors.monthCard = "Month can't be blank.";
  } else if (
    values.monthCard.length === 2 &&
    !(values.monthCard * 1 >= 1 && values.monthCard * 1 <= 12)
  ) {
    errors.monthCard = "Month not valid.";
  } else if (values.monthCard.length !== 2) {
    errors.monthCard = "Max 2 charaters.";
  }

  //yearCard ;
  if (!values.yearCard) {
    errors.yearCard = "Year can't be blank.";
  } else if (
    values.yearCard.length === 2 &&
    parseInt(20 + values.yearCard) - new Date().getFullYear() < 0
  ) {
    errors.yearCard = "Year not valid.";
  } else if (values.yearCard.length !== 2) {
    errors.yearCard = "Max 2 caracters.";
  }

  //cvc ;
  if (!values.cvc) {
    errors.cvc = "Can't be blank.";
  } else if (!/^[0-9]*$/g.test(values.cvc)) {
    errors.cvc = "CVC not valid.";
  } else if (values.cvc.length !== 3) {
    errors.cvc = "Max 3 characters.";
  }

  return errors;
};
