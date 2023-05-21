import { createContext, useContext, useEffect, useReducer } from "react";
import { useData } from "./DataContext";
import { cartReducer, initialState } from "../reducers/CartReducer";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const { loggedIn } = useAuth();

  const {
    user: { cart },
  } = useData();

  const callCartDispatch = (actionType, payload) => {
    cartDispatch({
      type: actionType,
      payload: payload,
    });
  };

  const handleAddToCart = (actionType, productId, products) => {
    if (!loggedIn) {
      const payload = { productId: productId, products: products };

      callCartDispatch(actionType, payload);
    } else {
      console.warn("Please login first");
    }
  };

  const handleRemoveFromCart = (actionType, productId) => {
    const payload = productId;

    callCartDispatch(actionType, payload);
  };

  const handleIncreaseOrDecrease = (actionType, productId) => {
    const payload = productId;

    callCartDispatch(actionType, payload);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        cartDispatch,
        handleAddToCart,
        handleRemoveFromCart,
        handleIncreaseOrDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
