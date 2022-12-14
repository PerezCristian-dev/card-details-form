import { useContext } from "react";
import cardFront from "../../public/bg-card-front.png";
import { AppContext } from "../context/AppContext";

export const CardFront = () => {
  const { nameCard, numberCard, monthCard, yearCard } = useContext(AppContext);

  //* este agrega espacio en cada 4 caracteres, tambien no permite letras

  // !Es posible que no sea necesario
  let numberCardWithSpace = numberCard
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  return (
    <div
      className="absolute top-[50%] left-[50%] translate-x-[-60%] translate-y-[-5%] sm:translate-x-[-70%] sm:translate-y-[-5%] 
      lg:left-auto lg:transform-none lg:top-32 lg:-right-20 w-[300px] sm:w-[320px] md:w-[340px] lg:w-96"
    >
      <div className="absolute top-0 p-5 w-full h-full flex flex-col justify-between">
        <div className="flex items-center ">
          <span className="inline-block w-8 h-8 bg-first-white rounded-full"></span>
          <span className="inline-block w-4 h-4 ml-2 border-first-white border-solid border-[1px] rounded-full"></span>
        </div>
        <div className="w-full text-first-white">
          <p className="text-[1.2rem] md:text-[1.4rem] tracking-widest">
            {numberCardWithSpace}
          </p>
          <div className="text-sm w-full flex justify-between mt-6 uppercase">
            <span>{nameCard}</span>
            <span>{`${monthCard}/${yearCard}`}</span>
          </div>
        </div>
      </div>
      <img src={cardFront} alt="card front" className="w-full" />
    </div>
  );
};
