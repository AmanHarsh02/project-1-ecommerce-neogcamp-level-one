import { createContext, useContext, useReducer } from "react";
import { useData } from "./DataContext";
import { useAuth } from "./AuthContext";
import { initialState, wishlistReducer } from "../reducers/WishlistReducer";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  const { loggedIn } = useAuth();

  const callWishlistDispatch = (actionType, payload) => {
    wishlistDispatch({
      type: actionType,
      payload: payload,
    });
  };

  const handleAddToWishlist = (actionType, productId, products) => {
    console.log(actionType, productId);
    if (loggedIn) {
      console.log(actionType, productId);

      const payload = { productId: productId, products: products };

      callWishlistDispatch(actionType, payload);
    } else {
      console.warn("Please login first");
    }
  };

  const handleRemoveFromWishlist = (actionType, productId) => {
    const payload = productId;

    callWishlistDispatch(actionType, payload);
  };

  const handleMoveToWishlist = (actionType, productId, cart) => {
    const payload = { productId: productId, cart: cart };

    callWishlistDispatch(actionType, payload, cart);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: wishlistState.wishlist,
        wishlistDispatch,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        handleMoveToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
