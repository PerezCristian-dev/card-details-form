import { Button } from "./Button";
import checkImg from "../../public/icon-complete.svg";

export const SuccessForm = () => {
  return (
    <section className="flex justify-center items-center mt-28 lg:w-[55%] lg:m-0 lg:mx-32">
      <div className="flex flex-col items-center justify-center w-80 ">
        <img
          src={checkImg}
          alt="icon complete"
          className="animate__animated animate__bounce"
        />
        <h3 className="uppercase text-3xl text-very-dark-violet my-5 animate__animated animate__bounceIn">
          Thank you!
        </h3>
        <p className="text-dark-grayish-violet">
          We've added your card details
        </p>
        <Button>Continue</Button>
      </div>
    </section>
  );
};
