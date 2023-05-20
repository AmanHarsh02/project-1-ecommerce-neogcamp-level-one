export const initialState = {
  products: [],
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART": {
      const newCart = [...state.cart];
      const productId = action.payload.productId;
      const products = action.payload.products;

      const selectedProduct = products.find(({ _id }) => _id === productId);

      const foundProduct = newCart.find(({ _id }) => _id === productId);

      if (!foundProduct) {
        selectedProduct.presentInCart = true;
        newCart.push(selectedProduct);
      }

      return { ...state, cart: newCart };
    }

    default:
      return { ...state };
  }
};
