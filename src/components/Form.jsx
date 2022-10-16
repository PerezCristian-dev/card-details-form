import { Formik } from "formik";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { validateErrors } from "../helpers/validateErrors";
import { Button } from "./Button";

export const Form = () => {
  const { changeCard, setIsValidForm } = useContext(AppContext);

  const onChange = (event, handleChange) => {
    const { target } = event;
    handleChange(event);
    changeCard({ [target.name]: target.value });
  };

  return (
    <section className="flex justify-center items-center lg:w-[55%] mt-4 md:mt-8 lg:mx-32">
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
          setIsValidForm(true);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          values,
          touched,
        }) => (
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
              onBlur={handleBlur}
              onChange={(event) => {
                onChange(event, handleChange);
              }}
              placeholder="e.g. Jane Appleseed"
              className={`rounded-lg border border-light-grayish-violet p-2 my-2 outline-none ${
                errors.nameCard && touched.nameCard ? "border-red-500" : ""
              }`}
            />

            {errors.nameCard && touched.nameCard ? (
              <span className="error">{errors.nameCard}</span>
            ) : null}

            <label
              htmlFor="numberCard"
              className="uppercase text-very-dark-violet mt-2"
            >
              Card Number
            </label>
            <input
              name="numberCard"
              type="text"
              onBlur={handleBlur}
              onChange={(event) => {
                onChange(event, handleChange);
              }}
              value={values.numberCard}
              placeholder="e.g. 1234 5678 9123 0000"
              className={`rounded-lg border border-light-grayish-violet p-2 my-2  outline-none ${
                errors.numberCard && touched.numberCard ? "border-red-500" : ""
              }`}
            />

            {errors.numberCard && touched.numberCard ? (
              <span className="error">{errors.numberCard}</span>
            ) : null}

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
                    onBlur={handleBlur}
                    onChange={(event) => {
                      onChange(event, handleChange);
                    }}
                    value={values.monthCard}
                    maxLength="2"
                    placeholder="MM"
                    className={`rounded-lg border border-light-grayish-violet p-2 mr-2 my-2 w-20 outline-none ${
                      errors.monthCard && touched.monthCard
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <input
                    name="yearCard"
                    type="text"
                    onBlur={handleBlur}
                    onChange={(event) => {
                      onChange(event, handleChange);
                    }}
                    value={values.yearCard}
                    placeholder="YY"
                    maxLength="2"
                    className={`rounded-lg border border-light-grayish-violet p-2 my-2 w-20 outline-none ${
                      errors.yearCard && touched.yearCard
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                </div>
                <div className="flex flex-col">
                  {errors.yearCard && touched.yearCard ? (
                    <span className="error">{errors.yearCard}</span>
                  ) : null}

                  {errors.monthCard && touched.monthCard ? (
                    <span className="error">{errors.monthCard}</span>
                  ) : null}
                </div>
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
                  onBlur={handleBlur}
                  onChange={(event) => {
                    onChange(event, handleChange);
                  }}
                  value={values.cvc}
                  placeholder="e.g. 123"
                  className={`rounded-lg border border-light-grayish-violet p-2 my-2 w-48 outline-none ${
                    errors.cvc && touched.cvc ? "border-red-500" : ""
                  }`}
                />
                {errors.cvc && touched.cvc ? (
                  <span className="error">{errors.cvc}</span>
                ) : null}
              </div>
            </div>
            <Button>Confirm</Button>
          </form>
        )}
      </Formik>
    </section>
  );
};
