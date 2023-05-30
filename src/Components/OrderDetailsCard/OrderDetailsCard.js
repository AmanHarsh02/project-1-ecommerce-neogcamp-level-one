import { toast } from "react-toastify";
import { useCart } from "../../contexts/CartContext";
import { useData } from "../../contexts/DataContext";
import "../OrderDetailsCard/OrderDetailsCard.css";

export function OrderDetailsCard() {
  const { cart, deliveryCharges, totalPrice, totalDiscount } = useCart();
  const { selectedAddress, addresses } = useData();
  const { name, houseNo, city, state, country, zip } = selectedAddress ?? {};

  return (
    <div className="order__details__card__container">
      <h3>ORDER DETAILS</h3>

      <div className="order__details__container">
        <div>
          <strong>Item</strong>
          <strong>Qty</strong>
        </div>
        {cart.map(({ productName, qty }) => {
          return (
            <div>
              <p>{productName}</p>
              <p>{qty}</p>
            </div>
          );
        })}
      </div>
      <h3>PRICE DETAILS</h3>

      <div className="checkout__price__details__container">
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
        <div>
          <strong>Total Amount</strong>
          <strong>${(totalPrice + deliveryCharges).toFixed(2)}</strong>
        </div>
      </div>
      <div>
        <h3>DELIVER TO</h3>
        <div className="address__container">
          {selectedAddress ? (
            <p>{`${name}, ${houseNo}, ${city}, ${state}, ${country}, ${zip}`}</p>
          ) : (
            <p>Please select an address</p>
          )}
        </div>
      </div>
      <button className="place__order__btn">Place Order</button>
    </div>
  );
}