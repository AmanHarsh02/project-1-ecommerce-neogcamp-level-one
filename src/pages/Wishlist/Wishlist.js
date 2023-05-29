import "../Wishlist/Wishlist.css";
import { ProductCard } from "../../Components";
import { useWishlist } from "../../contexts/WishlistContext";
import { empty_cart_illustration } from "../../assets";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";

export function Wishlist() {
  const { wishlist } = useWishlist();
  const { setTitle } = useData();

  useEffect(() => setTitle("Wishlist"), []);

  return (
    <div className="wishlist__page__container">
      <h2 className="wishlist__page__heading">My Wishlist</h2>

      <div className="wishlist__products__container">
        {wishlist.length === 0 && (
          <img
            src={empty_cart_illustration}
            alt="Empty Cart"
            className="empty__wishlist__img"
          ></img>
        )}
        {wishlist.map((product) => {
          return (
            <ProductCard
              product={product}
              move={true}
              add={false}
              key={product._id}
            />
          );
        })}
      </div>
    </div>
  );
}
