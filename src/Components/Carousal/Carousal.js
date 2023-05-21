import "../Carousal/Carousal.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import banner_0 from "../../assets/home_banner_0.png";
import banner_1 from "../../assets/home_banner_1.png";
import banner_2 from "../../assets/home_banner_2.png";
import { useEffect, useState } from "react";

export function Carousal() {
  const [image, setImage] = useState(0);
  const [banner, setBanner] = useState(banner_0);

  const banners = ["1", "2", "3"];

  const getSourceImg = () => {
    switch (image) {
      case 0:
        return setBanner(banner_0);
      case 1:
        return setBanner(banner_1);
      case 2:
        return setBanner(banner_2);
      default:
        return setBanner(banner_0);
    }
  };

  useEffect(() => {
    getSourceImg();
  }, [image]);

  console.log(image, banner);

  return (
    <div className="carousal__container">
      <div className="img__container">
        <Link to="/products">
          <img src={banner} alt="banner" />
        </Link>
        <div className="carousal__navigate__btn right">
          <Icon
            icon="material-symbols:chevron-right-rounded"
            color="white"
            height={30}
          />
        </div>

        <div className="carousal__navigate__btn left">
          <Icon
            icon="material-symbols:chevron-left-rounded"
            color="white"
            height={30}
          />
        </div>
      </div>
      <div className="carousal__navigation_container">
        {banners.map((_, i) => {
          return (
            <div
              key={i}
              onClick={() => setImage(i)}
              className={
                image === i
                  ? "carousal__navigation active"
                  : "carousal__navigation"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
