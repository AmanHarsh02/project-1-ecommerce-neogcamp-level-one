import { useData } from "../../contexts/DataContext";
import "../Filters/Filters.css";

export function Filters() {
  const ratings = [4, 3, 2, 1];
  const {
    products,
    categories,
    priceRange,
    selectedCategory,
    ratingValue,
    sortMethod,
    dataDispatch,
  } = useData();

  const range = products.reduce(
    (acc, curr) => {
      if (curr?.discountedPrice < acc.min) {
        acc.min = curr?.discountedPrice;
      }
      if (curr.discountedPrice > acc.max) {
        acc.max = curr?.discountedPrice;
      }
      return acc;
    },
    { min: products[0]?.discountedPrice, max: products[0]?.discountedPrice }
  );

  return (
    <div className="filters__container">
      <div className="filters__heading">
        <h3>Filters</h3>
        <p onClick={() => dataDispatch({ type: "CLEAR_FILTERS" })}>Clear</p>
      </div>

      <div className="slider__container">
        <input
          onChange={(e) =>
            dataDispatch({ type: "PRICE_RANGE", payload: e.target.value })
          }
          type="range"
          value={priceRange}
          min={range.min}
          max={range.max}
          step="100"
        />
      </div>

      <div className="category__container">
        <h3>Category</h3>

        {categories.map(({ _id, categoryName }) => {
          return (
            <label key={_id}>
              <input
                onChange={(e) =>
                  dataDispatch({ type: "CATEGORIES", payload: e.target.value })
                }
                checked={selectedCategory.includes(categoryName)}
                type="checkbox"
                value={categoryName}
              />
              {categoryName[0].toUpperCase() + categoryName.slice(1)}
            </label>
          );
        })}
      </div>

      <div className="rating__container">
        <h3>Rating</h3>

        {ratings.map((rating, i) => {
          return (
            <label key={i}>
              <input
                onChange={(e) =>
                  dataDispatch({ type: "RATING", payload: e.target.value })
                }
                checked={Number(ratingValue) === rating}
                type="radio"
                value={rating}
                name="rating"
              />
              {`${rating} Stars & above`}
            </label>
          );
        })}
      </div>

      <div className="sort__container">
        <h3>Sort by</h3>

        <label>
          <input
            onChange={(e) =>
              dataDispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
            }
            checked={sortMethod === "ascending"}
            type="radio"
            value="ascending"
            name="sort"
          />
          Price - Low to High
        </label>

        <label>
          <input
            onChange={(e) =>
              dataDispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
            }
            checked={sortMethod === "descending"}
            type="radio"
            value="descending"
            name="sort"
          />
          Price - High to Low
        </label>
      </div>
    </div>
  );
}
