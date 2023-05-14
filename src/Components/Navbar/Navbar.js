import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import { Icon } from "@iconify/react";

export function Navbar() {
  return (
    <nav className="nav__container">
      <div>
        <p>📸</p>
        <NavLink to="/">
          <h2>SnapShop</h2>
        </NavLink>
      </div>

      <input
        className="search__bar"
        placeholder="🔍 search products..."
        type="text"
      ></input>

      <div>
        <button className="btn__login">Login</button>
        <Icon icon="mdi:cards-heart-outline" color="#5348c7" height={24} />
        <NavLink to="/wishlist">Wishlist</NavLink>
        <Icon
          icon="material-symbols:shopping-cart-outline"
          color="#5348c7"
          height={24}
        />
        <NavLink to="/cart">Cart</NavLink>
      </div>

      <button className="btn__help">? Help</button>
    </nav>
  );
}
