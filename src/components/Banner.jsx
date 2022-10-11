import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";
import bg_main from "../../public/bg-main-desktop.png";

export const Banner = () => {
  return (
    <div className="w-[45%] relative top-0 left-0">
      {/* banner BG */}
      <div className="w-full h-screen">
        <img src={bg_main} alt="bg banner" className="h-full w-full" />
      </div>

      <CardBack />
      <CardFront />
    </div>
  );
};
