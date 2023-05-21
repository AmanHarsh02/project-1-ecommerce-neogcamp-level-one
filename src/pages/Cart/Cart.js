import "../Cart/Cart.css";
import { useCart } from "../../contexts/CartContext";
import { CartProductCard } from "../../Components";

export function Cart() {
  const { cart } = useCart();

  return (
    <div className="cart__page__container">
      <h2 className="cart__page__heading">My Cart ({cart.length})</h2>

      <div className="cart__details__container">
        <div className="cart__products__container">
          {cart.map((product) => {
            return <CartProductCard key={product._id} product={product} />;
          })}
        </div>
        <div className="cart__price__details__container">
          <h3>Price Details</h3>
          <hr></hr>
          <div>
            <p>Price</p>
            <p>2000</p>
          </div>
          <div>
            <p>Discount</p>
            <p>-1000</p>
          </div>
          <div>
            <p>Delivery Charges</p>
            <p>500</p>
          </div>
          <hr></hr>
          <div>
            <h3>Total Amount</h3>
            <h3>2500</h3>
          </div>
          <hr></hr>
          <p>You will save 1000 on this order</p>
          <button className="place__order__btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}
