import "../CheckOut/CheckOut.css";
import {
  AddressChange,
  OrderChange,
  OrderDetailsCard,
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

      <div className="checkout__details__container">
        <OrderDetailsCard />
      </div>
    </div>
  );
}
