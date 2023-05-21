import { NavLink, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
import { useData } from "../../contexts/DataContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

export function Navbar() {
  const { dataDispatch } = useData();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <nav className="nav__container">
      <div className="nav__main">
        <div className="item__container">
          <NavLink to="/" className="nav__link">
            <img src={logo} alt="logo" />
            <h2>SnapShop</h2>
          </NavLink>
        </div>

        <div className="search__bar__container" onClick={handleClick}>
          <Icon icon="ic:outline-search" color="#282828" height={24} />
          <input
            onChange={(e) =>
              dataDispatch({ type: "SEARCH_VALUE", payload: e.target.value })
            }
            className="search__bar"
            placeholder="search products..."
            type="text"
          ></input>
        </div>

        <div className="item__container">
          <NavLink to="/wishlist" className="nav__link">
            <div className="icon__with__badge">
              <Icon
                icon="mdi:cards-heart-outline"
                color="#5348c7"
                height={24}
              />
              <div className="count__badge">{wishlist.length}</div>
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
              <div className="count__badge">{cart.length}</div>
            </div>
            <p>Cart</p>
          </NavLink>

          <NavLink to="/user-profile" className="nav__link">
            <div>
              <Icon
                icon="solar:user-circle-linear"
                color="#5348c7"
                height={24}
                className="user__icon"
              />
            </div>

            <p>Profile</p>
          </NavLink>
        </div>

        <button className="btn__help">? Help</button>
      </div>

      <div className="search__bar__container_bottom" onClick={handleClick}>
        <Icon icon="ic:outline-search" color="#282828" height={24} />
        <input
          onChange={(e) =>
            dataDispatch({ type: "SEARCH_VALUE", payload: e.target.value })
          }
          className="search__bar_bottom"
          placeholder="search products..."
          type="text"
        ></input>
      </div>
    </nav>
  );
}
