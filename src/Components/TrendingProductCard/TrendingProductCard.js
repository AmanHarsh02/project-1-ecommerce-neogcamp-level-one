import { Link } from "react-router-dom";
import "../TrendingProductCard/TrendingProductCard.css";

export function TrendingProductCard({ product }) {
  const { _id, productName, productImage } = product;
  return (
    <div className="trending__product__card__container">
      <Link to={`/product/${_id}`}>
        <div className="trending__product__img__container">
          <img src={productImage} alt={productName} />
          <div className="trending__product__name__container">
            {productName}
          </div>
        </div>
      </Link>
    </div>
  );
}
