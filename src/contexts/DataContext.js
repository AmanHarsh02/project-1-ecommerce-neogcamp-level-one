import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { initialState, dataReducer } from "../reducers/DataReducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories } = await response.json();

      if (response.status === 200) {
        dispatch({
          type: "SET_CATEGORIES",
          payload: categories,
        });
      }

      const productResponse = await fetch("/api/products");
      const { products } = await productResponse.json();

      if (productResponse.status === 200) {
        dispatch({
          type: "SET_PRODUCTS",
          payload: products,
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);