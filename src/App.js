import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Cart,
  Wishlist,
  ProductListing,
  IndividualProduct,
} from "./pages/index";
import { Navbar } from "./Components/index";

function App() {
  console.log(process.env.REACT_APP_JWT_SECRET, "ENV");
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
