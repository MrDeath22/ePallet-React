import { Back } from "./Back";
import "./style/Pages-link.css";

export const Pages = () => {
   return (
      <div className="page">
         <div className="page__container container">
            <div>
               <a className="page__link" href="#">Frozen</a>
               <i class="fas fa-chevron-right"></i>
               <a className="page__link" href="#">Juice</a>
               <i class="fas fa-chevron-right"></i>
               <a className="page__link" href="#">Motts anwered Utelates</a>
            </div>
            <Back />
         </div>
      </div>
   );
}