import "../CartProductCard/CartProductCard.css";

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
  } = product;

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

        <p>
          Quantity: <span>-</span> 1 <span>+</span>
        </p>

        <button className="remove__from__cart__btn">Remove From Cart</button>
      </div>
    </div>
  );
}
