import { useNavigate, useParams } from "react-router";
import "../IndividualProductCard/IndividualProductCard.css";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

export function IndividualProductCard() {
  const { productId } = useParams();
  const { products } = useData();
  const { cart, handleAddToCart } = useCart();
  const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } =
    useWishlist();
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

  const presentInWishlist = wishlist.find((product) => product._id === _id);

  const handleCartClick = () => {
    if (!presentInCart) {
      handleAddToCart("ADD_TO_CART", selectedProduct);
    } else {
      navigate("/cart");
    }
  };

  const handleWishlistClick = () => {
    if (!presentInWishlist) {
      handleAddToWishlist("ADD_TO_WISHLIST", selectedProduct);
    } else {
      handleRemoveFromWishlist("REMOVE_FROM_WISHLIST", selectedProduct);
    }
  };

  return (
    <div className="individual__product__container">
      <div className="product__details__container">
        <div className="image__section">
          <div id="image__container">
            <img src={productImage} alt={productName} />

            {onSale && <div id="discount__badge">{discountPercent}% Off</div>}

            <div id="wishlist__icon" onClick={() => handleWishlistClick()}>
              {presentInWishlist ? (
                <Icon icon="mdi:cards-heart" color="red" height={24} />
              ) : (
                <Icon
                  icon="mdi:cards-heart-outline"
                  color="#393939"
                  height={24}
                />
              )}
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
