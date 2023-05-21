import "../CartPriceCard/CartPriceCard.css";

export function CartPriceCard({ cart }) {
  const deliveryCharges = cart.length >= 1 ? 500 : 0;

  const totalPrice = cart.reduce(
    (total, { discountedPrice, quantity }) =>
      total + discountedPrice * quantity,
    0
  );

  const totalDiscount = cart.reduce(
    (total, { price, discountedPrice, quantity }) =>
      total + (price - discountedPrice) * quantity,
    0
  );

  return (
    <div className="cart__price__details__container">
      <h3>Price Details</h3>
      <hr></hr>
      <div>
        <p>Price</p>
        <p>${totalPrice}</p>
      </div>
      <div>
        <p>Discount</p>
        <p>-${totalDiscount}</p>
      </div>
      <div>
        <p>Delivery Charges</p>
        <p>${deliveryCharges}</p>
      </div>
      <hr></hr>
      <div>
        <h3>Total Amount</h3>
        <h3>${totalPrice + deliveryCharges}</h3>
      </div>
      <hr></hr>
      <p>You will save ${totalDiscount} on this order</p>
      <button className="place__order__btn">Place Order</button>
    </div>
  );
}
