export const Profile = () => {
   return (
      <ul className="header__profile profile d-flex align-center">
         <li className="profile__item">
            <a className="profile__link" href="#">
               <i class="fal fa-folders"></i>
               Orders
            </a>
         </li>
         <li className="profile__item">
            <a className="profile__link" href="#">
               <i class="fal fa-shopping-bag"></i>
               Cart
            </a>
         </li>
         <li className="profile__item">
            <a className="profile__link" href="#">
               <i class="fal fa-user"></i>
               Profile
            </a>
         </li>
      </ul>
   );
}