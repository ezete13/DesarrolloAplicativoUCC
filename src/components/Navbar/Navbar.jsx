import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header>
    <div className="px-4 py-4 bg-nav text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to={'/'} className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt="" style={{width:'200px'}}/>
          </Link>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link to={'/home'} className="nav-link text-white">
              <img src="https://icons.veryicon.com/png/o/object/material-design-icons-1/pokeball-1.png" alt="" style={{width:'30px'}} className="bi d-block mx-auto mb-1 inverted"/>
                Ver Pokemons
              </Link>
            </li>
            <li>
              <Link to={'/items'} className="nav-link text-white">
              <img src="https://icons.veryicon.com/png/o/clothes-accessories/shoe-bag-clothing-linear-icon/backpack-linear.png" alt="" style={{width:'30px'}} className="bi d-block mx-auto mb-1 inverted"/>
                Mostrar Items
              </Link>
            </li>
            <li>
              <Link to={'/'} className="nav-link text-white">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/1em/profile-24.png" alt="" style={{width:'30px'}} className="bi d-block mx-auto mb-1 inverted"/>
                Cerrar Sesion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
        <form className="col-12 mb-2 mb-lg-0 me-lg-auto">
          <input type="search" className="form-control" placeholder="PokeBuscador..." aria-label="Search"/>
        </form>
      </div>
    </div>
  </header>
    </>
  );
}
