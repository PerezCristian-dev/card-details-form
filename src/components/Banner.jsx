import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";
import bg_main from "../../public/bg-main-desktop.png";

export const Banner = () => {
  return (
    <div className="lg:w-[45%] relative top-0 left-0">
      {/* banner BG */}
      <div className="h-60 lg:w-full lg:h-screen">
        <img src={bg_main} alt="bg banner" className="h-full w-full" />
      </div>
      <div className="w-full h-full absolute top-0 flex justify-center items-center">
        <CardBack />
        <CardFront />
      </div>
    </div>
  );
};
