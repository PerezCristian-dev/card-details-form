import { useContext } from "react";
import cardFront from "../../public/bg-card-back.png";
import { AppContext } from "../context/AppContext";

export const CardBack = () => {
  const { cvc } = useContext(AppContext);

  //* centrando las card con absolute y tranform
  //* top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]

  return (
    <div
      className="absolute top-[50%] left-[50%] translate-x-[-43%] translate-y-[-60%] sm:translate-x-[-46.5%] sm:translate-y-[-60%]
      lg:left-auto lg:transform-none lg:bottom-32 lg:-right-40 w-[300px] sm:w-[320px] md:w-[340px] lg:w-96"
    >
      <div className="absolute top-[43%] lg:top-[40%] right-10 lg:right-12">
        <p>{cvc}</p>
      </div>
      <img src={cardFront} alt="card front" className="w-full" />
    </div>
  );
};
