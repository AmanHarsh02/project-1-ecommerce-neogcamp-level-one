import "../ProductListing/ProductListing.css";
import { Filters, ProductCard } from "../../Components";
import { useData } from "../../contexts/DataContext";

export function ProductListing() {
  const { filteredProducts } = useData();

  return (
    <div className="products__listing__container">
      <aside className="aside">
        <Filters />
      </aside>
      <div className="main">
        <h3>Showing All Products</h3>

        <div className="products__container">
          {filteredProducts.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </div>
    </div>
  );
}
