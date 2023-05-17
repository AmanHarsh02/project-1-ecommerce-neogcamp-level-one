import { Link } from "react-router-dom";
import "../CategoryCard/CategoryCard.css";
import { useData } from "../../contexts/DataContext";

export function CategoryCard() {
  const { categories } = useData();

  return (
    <div className="categories__card__container">
      {categories.map(({ _id, categoryName, img }) => {
        return (
          <div key={_id} className="category__card">
            <div className="category__img__container">
              <Link to="/products">
                <img src={img} alt={categoryName} loading="lazy" />
              </Link>
            </div>
            <h3>{`${
              categoryName[0].toUpperCase() + categoryName.slice(1)
            }`}</h3>
          </div>
        );
      })}
    </div>
  );
}
