import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import { Icon } from "@iconify/react";

export function Navbar() {
  return (
    <nav className="nav__container">
      <div className="nav__main">
        <div className="item__container">
          <NavLink to="/" className="nav__link">
            <Icon
              icon="material-symbols:camera-outline-rounded"
              color="#5348c7"
              height={24}
              style={{ alignSelf: "center" }}
            />
            <h2>SnapShop</h2>
          </NavLink>
        </div>

        <div className="search__bar__container">
          <Icon icon="ic:outline-search" color="#282828" height={24} />
          <input
            className="search__bar"
            placeholder="search products..."
            type="text"
          ></input>
        </div>

        <div className="item__container">
          <div className="login__container">
            <div>
              <Icon
                icon="solar:user-circle-linear"
                color="#282828"
                height={24}
                className="user__icon"
              />
            </div>

            <button className="btn__login">Login</button>
          </div>

          <NavLink to="/wishlist" className="nav__link">
            <div className="icon__with__badge">
              <Icon
                icon="mdi:cards-heart-outline"
                color="#5348c7"
                height={24}
              />
              <div className="count__badge">0</div>
            </div>
            <p>Wishlist</p>
          </NavLink>

          <NavLink to="/cart" className="nav__link">
            <div className="icon__with__badge">
              <Icon
                icon="material-symbols:shopping-cart-outline"
                color="#5348c7"
                height={24}
              />
              <div className="count__badge">0</div>
            </div>
            <p>Cart</p>
          </NavLink>
        </div>

        <button className="btn__help">? Help</button>
      </div>

      <div className="search__bar__container_bottom">
        <Icon icon="ic:outline-search" color="#282828" height={24} />
        <input
          className="search__bar_bottom"
          placeholder="search products..."
          type="text"
        ></input>
      </div>
    </nav>
  );
}
