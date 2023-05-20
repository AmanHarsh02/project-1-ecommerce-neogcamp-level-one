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

  const handleAddToCart = (actionType, productId, products) => {
    if (loggedIn) {
      cartDispatch({
        type: actionType,
        payload: { productId: productId, products: products },
      });
    } else {
      console.warn("Please login first");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        cartDispatch,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
