import src from "../../../js/imgs";

export const Img = () => {
   return (
      src.map(i => {
         return (
            <li className="slider__item">
               <img className="slider__img" src={i} alt="img" width={80} />
            </li>
         );
      })
   );
}