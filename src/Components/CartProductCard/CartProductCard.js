import { Icon } from "@iconify/react";
import "../CartProductCard/CartProductCard.css";
import { useCart } from "../../contexts/CartContext";

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
    presentInCart,
    quantity,
  } = product;
  const { handleRemoveFromCart, handleIncreaseOrDecrease } = useCart();

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

        <button
          className="remove__from__cart__btn"
          onClick={() => handleRemoveFromCart("REMOVE_FROM_CART", _id)}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}
