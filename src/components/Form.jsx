import React from "react";

export const Form = () => {
  return (
    <form className="flex flex-col w-96 m-10">
      <label
        htmlFor="nameCard"
        className="uppercase text-very-dark-violet mt-2"
      >
        Cardholder Name
      </label>
      <input
        name="nameCard"
        type="text"
        placeholder="e.g. Jane Appleseed"
        className="rounded-lg border border-light-grayish-violet p-2 my-2"
      />
      <label
        htmlFor="numberCard"
        className="uppercase text-very-dark-violet mt-2"
      >
        Card Number
      </label>
      <input
        name="numberCard"
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        className="rounded-lg border border-light-grayish-violet p-2 my-2"
      />

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
              type="number"
              placeholder="MM"
              className="rounded-lg border border-light-grayish-violet p-2 mr-2 my-2 w-20"
            />
            <input
              name="yearCard"
              type="number"
              placeholder="YY"
              className="rounded-lg border border-light-grayish-violet p-2 my-2 w-20"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="cvc" className="uppercase text-very-dark-violet">
            cvc
          </label>
          <input
            name="cvc"
            type="number"
            placeholder="e.g. 123"
            className="rounded-lg border border-light-grayish-violet p-2 my-2 w-48"
          />
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-very-dark-violet rounded-lg p-4 mt-6"
      >
        Confirm
      </button>
    </form>
  );
};
