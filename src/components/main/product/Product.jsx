import { Title } from "./title/Title";
import { Link } from "./title/Link";
import { Price } from "./price/Price";

export const Product = () => {
   return (
      <div className="main__product">
         <Title />
         <Price />
      </div>
   );
}