import { createContext, useContext, useReducer } from "react";
import { useData } from "./DataContext";
import { useAuth } from "./AuthContext";
import { initialState, wishlistReducer } from "../reducers/WishlistReducer";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  const { loggedIn } = useAuth();
  const token = localStorage.getItem("token");

  const callWishlistDispatch = (actionType, payload) => {
    wishlistDispatch({
      type: actionType,
      payload: payload,
    });
  };

  const handleAddToWishlist = async (actionType, product) => {
    if (loggedIn) {
      try {
        const response = await fetch("/api/user/wishlist", {
          method: "POST",
          headers: { authorization: token },
          body: JSON.stringify({ product }),
        });

        const { wishlist } = await response.json();

        const payload = wishlist;

        toast.success(`${product.productName} Added To Wishlist`);
        callWishlistDispatch(actionType, payload);
      } catch (e) {
        console.error(e);
      }
    } else {
      toast.error("Please login first");
    }
  };

  const handleRemoveFromWishlist = async (actionType, product) => {
    try {
      const response = await fetch(`/api/user/wishlist/${product._id}`, {
        method: "DELETE",
        headers: { authorization: token },
      });

      const { wishlist } = await response.json();

      const payload = wishlist;

      toast.warn(`${product.productName} Removed From Wishlist`);
      callWishlistDispatch(actionType, payload);
    } catch (e) {
      console.error(e);
    }
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
