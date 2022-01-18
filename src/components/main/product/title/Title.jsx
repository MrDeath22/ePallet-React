import { Link } from "./Link";
import "./style/Title.css";

export const Title = () => {
   return (
      <div className="main__title title">
         <span className="title__txt">MOTT'S</span>
         <span className="title__name">Mott's Unsweeaden Applesauce</span>
         <span className="title__size">Pack Size: <span>24/16.90 oz</span></span>
         <p className="title__desc">Chef Maxwell Applecuae is a different pleasure to fix your prise and diet low be pleasure to fix your prise and night 40% Vitamin C</p>
         <Link />
      </div>
   );
}