import { toast } from "react-toastify";
import "../CartPriceCard/CartPriceCard.css";
import { useNavigate } from "react-router";

export function CartPriceCard({ cart }) {
  const navigate = useNavigate();

  const deliveryCharges = cart.length >= 1 ? 500 : 0;

  const totalPrice = cart.reduce(
    (total, { discountedPrice, qty }) => total + discountedPrice * qty,
    0
  );

  const totalDiscount = cart.reduce(
    (total, { price, discountedPrice, qty }) =>
      total + (price - discountedPrice) * qty,
    0
  );

  const handlePlaceOrder = () => {
    if (cart.length >= 1) {
      navigate("/check-out");
    } else {
      toast.warning("Cart is Empty.");
    }
  };

  return (
    <div className="cart__price__details__container">
      <h3>Price Details</h3>
      <hr></hr>
      <div>
        <p>Price</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div>
        <p>Discount</p>
        <p>-${totalDiscount.toFixed(2)}</p>
      </div>
      <div>
        <p>Delivery Charges</p>
        <p>${deliveryCharges.toFixed(2)}</p>
      </div>
      <hr></hr>
      <div>
        <h3>Total Amount</h3>
        <h3>${(totalPrice + deliveryCharges).toFixed(2)}</h3>
      </div>
      <hr></hr>
      <p>You will save ${totalDiscount} on this order</p>
      <button className="place__order__btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}
