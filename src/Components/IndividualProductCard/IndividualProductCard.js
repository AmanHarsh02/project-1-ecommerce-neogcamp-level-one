import { useNavigate, useParams } from "react-router";
import "../IndividualProductCard/IndividualProductCard.css";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";
import { useCart } from "../../contexts/CartContext";

export function IndividualProductCard() {
  const { productId } = useParams();
  const { products } = useData();
  const { cart, handleAddToCart } = useCart();
  const navigate = useNavigate();

  const selectedProduct = products.find(({ _id }) => _id === productId);

  const {
    _id,
    productName,
    productDescription,
    productImage,
    price,
    discountedPrice,
    discountPercent,
    onSale,
    rating,
  } = selectedProduct ?? "";

  const presentInCart = cart.find((product) => product._id === _id);

  const handleCartClick = () => {
    if (!presentInCart) {
      handleAddToCart("ADD_TO_CART", productId, products);
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="individual__product__container">
      <div className="product__details__container">
        <div className="image__section">
          <div id="image__container">
            <img src={productImage} alt={productName} />

            {onSale && <div id="discount__badge">{discountPercent}% Off</div>}

            <div id="wishlist__icon">
              <Icon
                icon="mdi:cards-heart-outline"
                color="#393939"
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="details__section">
          <div className="details__section__heading">
            <h3>{productName}</h3>

            <div className="price__container">
              <h3>$ {discountedPrice}/-</h3>

              {onSale && <p className="original__price">$ {price}</p>}
            </div>

            <div id="rating__container">
              <p>{rating}</p>
              <Icon
                icon="material-symbols:star-rounded"
                color="#FFC700"
                height={20}
              />
            </div>
          </div>

          <p>
            <b>Description:</b> {productDescription}
          </p>

          <button id="add__to__cart__btn" onClick={() => handleCartClick()}>
            {presentInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
