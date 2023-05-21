export const initialState = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newCart = [...state.cart];
      const productId = action.payload.productId;
      const products = action.payload.products;

      const selectedProduct = products.find(({ _id }) => _id === productId);

      const foundProduct = newCart.find(({ _id }) => _id === productId);

      if (!foundProduct) {
        selectedProduct.quantity = 1;
        newCart.push(selectedProduct);
      }

      return { ...state, cart: newCart };
    }
    case "REMOVE_FROM_CART": {
      let newCart = [...state.cart];
      const productId = action.payload;
      const selectedProduct = newCart.find(({ _id }) => _id === productId);

      if (selectedProduct) {
        newCart = newCart.filter(({ _id }) => _id !== productId);
      }

      return { ...state, cart: newCart };
    }
    case "INCREASE_ITEM": {
      let newCart = [...state.cart];
      const productId = action.payload;
      const selectedProduct = newCart.find(({ _id }) => _id === productId);

      newCart = newCart.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      return { ...state, cart: newCart };
    }
    case "DECREASE_ITEM": {
      let newCart = [...state.cart];
      const productId = action.payload;
      const selectedProduct = newCart.find(({ _id }) => _id === productId);

      if (selectedProduct.quantity > 1) {
        newCart = newCart.map((product) =>
          product._id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else {
        newCart = newCart.filter(({ _id }) => _id !== productId);
      }

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
