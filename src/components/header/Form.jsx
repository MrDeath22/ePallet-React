export const Form = () => {
   return (
      <form className="header__form w-50">
         <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Text input with dropdown button"></input>
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>
            <ul class="dropdown-menu dropdown-menu-end">
               <li><a className="dropdown-item" href="#">Action</a></li>
               <li><a className="dropdown-item" href="#">Another action</a></li>
               <li><a className="dropdown-item" href="#">Something else here</a></li>
               <li><hr className="dropdown-divider"></hr></li>
               <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
         </div>
      </form>
   );
}