import { Icon } from "@iconify/react";
import "../CartProductCard/CartProductCard.css";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useNavigate } from "react-router";

export function CartProductCard({ product }) {
  const {
    _id,
    productName,
    productImage,
    price,
    discountedPrice,
    discountPercent,
    onSale,
    rating,
    quantity,
  } = product;
  const { cart, handleRemoveFromCart, handleIncreaseOrDecrease } = useCart();
  const { wishlist, handleMoveToWishlist } = useWishlist();
  const navigate = useNavigate();

  const presentInWishlist = wishlist.find((product) => product._id === _id);

  const handleWishlistClick = () => {
    if (!presentInWishlist) {
      handleMoveToWishlist("MOVE_TO_WISHLIST", _id, cart);
      handleRemoveFromCart("REMOVE_FROM_CART", _id);
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <div className="cart__product__card__container">
      <div className="cart__product__img__container">
        <img src={productImage} alt={productName} />
      </div>

      <div className="cart__product__details__container">
        <h3>{productName}</h3>

        <div className="cart__product__price__container">
          <h3>$ {discountedPrice}/-</h3>

          {onSale && <p className="original__price">$ {price}</p>}
        </div>

        {onSale && <h3>{discountPercent}% Off</h3>}

        <div className="quantity__container">
          <p>Quantity:</p>
          <div className="quantity__counter__container">
            <Icon
              icon="simple-line-icons:minus"
              color="#5348c7"
              className="increase__decrease__icons"
              onClick={() => handleIncreaseOrDecrease("DECREASE_ITEM", _id)}
            />

            <p>{quantity}</p>

            <Icon
              icon="simple-line-icons:plus"
              color="#5348c7"
              className="increase__decrease__icons"
              onClick={() => handleIncreaseOrDecrease("INCREASE_ITEM", _id)}
            />
          </div>
        </div>

        <div className="buttons__container">
          <button
            className="remove__from__cart__btn"
            onClick={() => handleRemoveFromCart("REMOVE_FROM_CART", _id)}
          >
            Remove From Cart
          </button>

          <button
            className="move__to__wishlist__btn"
            onClick={() => handleWishlistClick()}
          >
            {presentInWishlist ? "Go To Wishlist" : "Move To Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
