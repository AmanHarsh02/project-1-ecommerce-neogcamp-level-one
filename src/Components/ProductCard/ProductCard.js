import { Icon } from "@iconify/react";
import "../ProductCard/ProductCard.css";
import { useNavigate } from "react-router";
import { useCart } from "../../contexts/CartContext";
import { useData } from "../../contexts/DataContext";

export function ProductCard({ product }) {
  const {
    _id,
    productName,
    productImage,
    price,
    discountedPrice,
    discountPercent,
    onSale,
    rating,
  } = product;
  const { products } = useData();
  const { cart, handleAddToCart } = useCart();
  const navigate = useNavigate();

  const presentInCart = cart.find((product) => product._id === _id);

  const handleClick = (e) => {
    const clickedOn = e.target.tagName;

    if (clickedOn === "IMG") {
      navigate(`/product/${_id}`);
    }
  };

  const handleCartClick = () => {
    if (!presentInCart) {
      handleAddToCart("ADD_TO_CART", _id, products);
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="product__card__container">
      <div className="image__container" onClick={(e) => handleClick(e)}>
        <img src={productImage} alt={productName} />

        {onSale && (
          <div className="discount__badge">{discountPercent}% Off</div>
        )}

        <div className="wishlist__icon">
          <Icon icon="mdi:cards-heart-outline" color="#393939" height={24} />
        </div>
      </div>

      <div className="details__container">
        <div className="details__heading">
          <p className="product__name__container">{productName}</p>

          <div className="rating__container">
            <p>{rating}</p>
            <Icon
              icon="material-symbols:star-rounded"
              color="#FFC700"
              height={20}
            />
          </div>
        </div>

        <div>
          <h3>$ {discountedPrice}/-</h3>

          {onSale && <p className="original__price">$ {price}</p>}

          <button
            className="add__to__cart__btn"
            onClick={() => handleCartClick()}
          >
            {presentInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
