export const initialState = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newCart = [...action.payload];

      return { ...state, cart: newCart };
    }
    case "REMOVE_FROM_CART": {
      let newCart = [...action.payload];

      return { ...state, cart: newCart };
    }
    case "INCREASE_ITEM": {
      let newCart = [...action.payload];

      return { ...state, cart: newCart };
    }
    case "DECREASE_ITEM": {
      let newCart = [...action.payload];

      return { ...state, cart: newCart };
    }
    case "MOVE_TO_CART": {
      const newCart = [...state.cart];
      const productId = action.payload.productId;
      const wishlist = action.payload.wishlist;

      const selectedProduct = wishlist.find(({ _id }) => _id === productId);

      const foundProduct = newCart.find(({ _id }) => _id === productId);

      if (!foundProduct) {
        selectedProduct.quantity = 1;
        newCart.push(selectedProduct);
      }

      return { ...state, cart: newCart };
    }

    default:
      return { ...state };
  }
};
