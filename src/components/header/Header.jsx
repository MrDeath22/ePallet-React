import { Logo } from "./Logo";
import { Form } from "./Form";
import { Profile } from "./Profile";

import "./style/Header.css";

export const Header = () => {
   return (
      <header className="header">
         <div className="header__container container">
            <div className="header__inner d-flex between">
               <Logo />
               <Form />
               <Profile />
            </div>
         </div>
      </header>
   );
}