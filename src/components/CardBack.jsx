import { useContext } from "react";
import cardFront from "../../public/bg-card-back.png";
import { AppContext } from "../context/AppContext";

export const CardBack = () => {
  const { cvc } = useContext(AppContext);

  return (
    <div className="absolute bottom-32 -right-40 w-96">
      <div className="absolute top-[43.5%] right-12">
        <p>{cvc}</p>
      </div>
      <img src={cardFront} alt="card front" className="w-full" />
    </div>
  );
};
