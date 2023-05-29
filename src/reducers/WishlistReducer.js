export const initialState = {
  wishlist: [],
};

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const newWishlist = [...action.payload];

      return { ...state, wishlist: newWishlist };
    }
    case "REMOVE_FROM_WISHLIST": {
      const newWishlist = [...action.payload];

      return { ...state, wishlist: newWishlist };
    }
    case "CLEAR_WISHLIST":
      return { ...state, wishlist: action.payload };

    default:
      return { ...state };
  }
};
