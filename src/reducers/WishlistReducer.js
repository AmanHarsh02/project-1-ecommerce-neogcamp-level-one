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
    case "MOVE_TO_WISHLIST": {
      const newWishlist = [...state.wishlist];
      const productId = action.payload.productId;
      const cart = action.payload.cart;

      const selectedProduct = cart.find(({ _id }) => _id === productId);

      const foundProduct = newWishlist.find(({ _id }) => _id === productId);

      if (!foundProduct) {
        newWishlist.push(selectedProduct);
      }

      return { ...state, wishlist: newWishlist };
    }
    default:
      return { ...state };
  }
};
