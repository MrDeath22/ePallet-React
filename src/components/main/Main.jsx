import { Slider } from "./slider/Slider";
import { Product } from "./product/Product";

export const Main = () => {
   return (
      <div className="main">
         <div className="main__container container">
            <div className="main__inner d-flex align-center">
               <Slider />
               <Product />
            </div>
         </div>
      </div>
   );
}