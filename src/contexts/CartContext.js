import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer, initialState } from "../reducers/CartReducer";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const { loggedIn } = useAuth();
  const [isCartLoading, setIsCartLoading] = useState(false);
  const token = localStorage.getItem("token");

  const callCartDispatch = (actionType, payload) => {
    cartDispatch({
      type: actionType,
      payload: payload,
    });
  };

  const handleAddToCart = async (actionType, product) => {
    if (loggedIn) {
      try {
        const response = await fetch("/api/user/cart", {
          method: "POST",
          headers: { authorization: token },
          body: JSON.stringify({ product }),
        });

        const { cart } = await response.json();

        const payload = cart;

        toast.success(`${product.productName} Added To Cart`);
        callCartDispatch(actionType, payload);
      } catch (e) {
        console.error(e);
      } finally {
        setIsCartLoading(false);
      }
    } else {
      setIsCartLoading(false);
      toast.error("Please login first");
    }
  };

  const handleRemoveFromCart = async (actionType, product) => {
    try {
      const response = await fetch(`/api/user/cart/${product._id}`, {
        method: "DELETE",
        headers: { authorization: token },
      });

      const { cart } = await response.json();

      const payload = cart;

      toast.warn(`${product.productName} Removed From Cart`);
      callCartDispatch(actionType, payload);
    } catch (e) {
      console.error(e);
    } finally {
      setIsCartLoading(false);
    }
  };

  const handleIncreaseOrDecrease = async (actionType, product) => {
    const type = actionType === "INCREASE_ITEM" ? "increment" : "decrement";

    try {
      const response = await fetch(`/api/user/cart/${product._id}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ action: { type: type } }),
      });

      const { cart } = await response.json();

      const payload = cart;

      callCartDispatch(actionType, payload);
    } catch (e) {
      console.error(e);
    }
  };

  const deliveryCharges = cartState.cart.length >= 1 ? 50 : 0;

  const totalPrice = cartState.cart.reduce(
    (total, { discountedPrice, qty }) => total + discountedPrice * qty,
    0
  );

  const totalDiscount = cartState.cart.reduce(
    (total, { price, discountedPrice, qty }) =>
      total + (price - discountedPrice) * qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        cartDispatch,
        handleAddToCart,
        handleRemoveFromCart,
        handleIncreaseOrDecrease,
        isCartLoading,
        setIsCartLoading,
        deliveryCharges,
        totalPrice,
        totalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
