import src from "../../../js/imgs";
import { Img } from "./Img";
import "./style/Slider.css";

export const Slider = () => {
   return (
      <div className="main__slider slider">
         <div>
            <img className="slider__imgm" src={src[0]} alt="img" width={450} />
         </div>
         <ul className="slider__imgs d-flex">
            <Img />
         </ul>
      </div>
   );
}