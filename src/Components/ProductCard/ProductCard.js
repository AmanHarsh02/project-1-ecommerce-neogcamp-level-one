import { Icon } from "@iconify/react";
import "../ProductCard/ProductCard.css";
import { useNavigate } from "react-router";

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

  const navigate = useNavigate();

  const handleClick = (e) => {
    const clickedOn = e.target.tagName;

    if (clickedOn === "IMG") {
      navigate(`/product/${_id}`);
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

          <button className="add__to__card__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
