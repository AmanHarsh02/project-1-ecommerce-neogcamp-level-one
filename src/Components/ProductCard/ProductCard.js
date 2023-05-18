import { Icon } from "@iconify/react";
import "../ProductCard/ProductCard.css";

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

  return (
    <div className="product__card__container">
      {onSale && <div className="discount__badge">{discountPercent}% Off</div>}

      <div className="wishlist__icon">
        <Icon icon="mdi:cards-heart-outline" color="white" height={24} />
      </div>

      <div className="image__container">
        <img src={productImage} alt={productName} />
      </div>

      <div className="details__container">
        <div className="details__heading">
          <p>{productName}</p>

          <div>
            <p>{rating}</p>
            <Icon
              icon="material-symbols:star-rounded"
              color="yellow"
              height={20}
            />
          </div>
        </div>

        <div>
          <h3>$ {discountedPrice}</h3>

          {onSale && <p className="original__price">$ {price}</p>}

          <button className="add__to__card__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
