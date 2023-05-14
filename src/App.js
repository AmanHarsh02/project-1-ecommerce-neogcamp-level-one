import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductListing from "./pages/ProductListing";
import IndivudualProduct from "./pages/IndidualProduct";

function App() {
  console.log(process.env.REACT_APP_JWT_SECRET, "ENV");
  return (
    <div className="App">
      <h1>E-Commerce Project</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<IndivudualProduct />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
