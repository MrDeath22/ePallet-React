import "./style/Nav.css";

export const Nav = () => {
   return(
      <nav className="nav">
         <div className="nav__container container">
            <ol className="nav__list w-100 d-flex between">
               <li className="nav__item">
                  <a className="nav__link" href="#">Food Service</a>
               </li>
               <li className="nav__item">
                  <a className="nav__link" href="#">Health & Beauty</a>
               </li>
               <li className="nav__item">
                  <a className="nav__link" href="#">Industrial Engridients</a>
               </li>
               <li className="nav__item">
                  <a className="nav__link" href="#">Beverages</a>
               </li>
               <li className="nav__item">
                  <a className="nav__link" href="#">Pet Suppiles</a>
               </li>
               <li className="nav__item">
                  <a className="nav__link nav__link--active" href="#">Frozen</a>
               </li>
               <li className="nav__item">
                  <a className="nav__link" href="#">Cleaning Products</a>
               </li>
            </ol>
         </div>
      </nav>
   );
}