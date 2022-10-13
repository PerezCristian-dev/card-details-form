import { Formik } from "formik";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { validateErrors } from "../helpers/validateErrors";

export const Form = () => {
  const { changeCard } = useContext(AppContext);

  const onChange = (event, handleChange) => {
    const { target } = event;
    handleChange(event);
    changeCard({ [target.name]: target.value });
  };

  return (
    <section className="flex justify-center w-[55%] mx-32 ">
      <Formik
        initialValues={{
          nameCard: "",
          numberCard: "",
          monthCard: "",
          yearCard: "",
          cvc: "",
        }}
        validate={validateErrors}
        onSubmit={(values) => {
          changeCard({ ...values });
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, errors, values }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-96 m-10 justify-self-end"
          >
            <label
              htmlFor="nameCard"
              className="uppercase text-very-dark-violet mt-2"
            >
              Cardholder Name
            </label>
            <input
              name="nameCard"
              type="text"
              value={values.nameCard}
              onChange={(event) => {
                onChange(event, handleChange);
              }}
              placeholder="e.g. Jane Appleseed"
              className={`rounded-lg border border-light-grayish-violet p-2 my-2 outline-none ${
                errors.nameCard ? "border-red-500" : ""
              }`}
            />
            <span className="error">{errors.nameCard}</span>
            <label
              htmlFor="numberCard"
              className="uppercase text-very-dark-violet mt-2"
            >
              Card Number
            </label>
            <input
              name="numberCard"
              type="text"
              onChange={(event) => {
                onChange(event, handleChange);
              }}
              value={values.numberCard}
              maxLength="19"
              minLength="19"
              placeholder="e.g. 1234 5678 9123 0000"
              className={`rounded-lg border border-light-grayish-violet p-2 my-2  outline-none ${
                errors.numberCard ? "border-red-500" : ""
              }`}
            />

            <span className="error">{errors.numberCard}</span>

            <div className="flex justify-between">
              <div className="mt-2">
                <label
                  htmlFor="monthCard"
                  className="uppercase text-very-dark-violet "
                >
                  Exp. Date (mm/yy)
                </label>
                <div className="flex">
                  <input
                    name="monthCard"
                    type="text"
                    onChange={(event) => {
                      onChange(event, handleChange);
                    }}
                    value={values.monthCard}
                    maxLength="2"
                    placeholder="MM"
                    className={`rounded-lg border border-light-grayish-violet p-2 mr-2 my-2 w-20 outline-none ${
                      errors.monthCard ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    name="yearCard"
                    type="text"
                    onChange={(event) => {
                      onChange(event, handleChange);
                    }}
                    value={values.yearCard}
                    placeholder="YY"
                    maxLength="2"
                    className={`rounded-lg border border-light-grayish-violet p-2 my-2 w-20 outline-none ${
                      errors.yearCard ? "border-red-500" : ""
                    }`}
                  />
                </div>
                <span className="error">
                  {errors.yearCard || errors.monthCard}
                </span>
              </div>

              <div className="flex flex-col mt-2">
                <label
                  htmlFor="cvc"
                  className="uppercase text-very-dark-violet"
                >
                  cvc
                </label>
                <input
                  name="cvc"
                  type="text"
                  maxLength="3"
                  minLength="3"
                  onChange={(event) => {
                    onChange(event, handleChange);
                  }}
                  value={values.cvc}
                  placeholder="e.g. 123"
                  className={`rounded-lg border border-light-grayish-violet p-2 my-2 w-48 outline-none ${
                    errors.cvc ? "border-red-500" : ""
                  }`}
                />
                <span className="error">{errors.cvc}</span>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-very-dark-violet rounded-lg p-4 mt-6"
            >
              Confirm
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};
