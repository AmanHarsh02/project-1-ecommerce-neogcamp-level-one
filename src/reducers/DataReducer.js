export const initialState = {
  user: {},
  products: [],
  cart: [],
  wishlist: [],
  address: [],
  searchValue: "",
  sortMethod: "",
  priceRange: "",
  categories: [],
  selectedCategory: [],
  sortByRating: "",
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_USER_DATA":
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};
