import "../CheckOut/CheckOut.css";
import {
  AddressChange,
  CartPriceCard,
  OrderChange,
} from "../../Components/index";
import { useCart } from "../../contexts/CartContext";

export function CheckOut() {
  const { cart } = useCart();

  return (
    <div className="checkout__container">
      <div className="checkout__summary__container">
        <AddressChange />
        <OrderChange />
      </div>

      <div>
        <CartPriceCard cart={cart} />
      </div>
    </div>
  );
}
