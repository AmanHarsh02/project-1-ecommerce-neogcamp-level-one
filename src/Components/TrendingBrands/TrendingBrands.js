import "../TrendingBrands/TrendingBrands.css";
import {
  brand_logo_1,
  brand_logo_2,
  brand_logo_3,
  brand_logo_4,
  brand_logo_5,
} from "../../assets";

export function TrendingBrands() {
  return (
    <div className="brands__container">
      <img src={brand_logo_1} alt="brand_logo" />
      <img src={brand_logo_2} alt="brand_logo" />
      <img src={brand_logo_3} alt="brand_logo" />
      <img src={brand_logo_4} alt="brand_logo" />
      <img src={brand_logo_5} alt="brand_logo" />
    </div>
  );
}
